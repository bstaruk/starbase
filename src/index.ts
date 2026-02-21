#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as clack from '@clack/prompts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SKIP_FILES = ['node_modules', '.npmignore'];
const RENAME_FILES: Record<string, string> = { _gitignore: '.gitignore' };

function copyDir(src: string, dest: string): void {
  fs.mkdirSync(dest, { recursive: true });

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destName = RENAME_FILES[entry.name] ?? entry.name;
    const destPath = path.join(dest, destName);

    if (SKIP_FILES.includes(entry.name)) {
      continue;
    }

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function main(): Promise<void> {
  clack.intro('create-starbase');

  const arg = process.argv[2];

  let projectName: string;

  if (arg) {
    projectName = arg;
  } else {
    const response = await clack.text({
      message: 'Mission name',
      placeholder: 'starbase',
      defaultValue: 'starbase',
    });

    if (clack.isCancel(response)) {
      clack.cancel('Mission aborted.');
      process.exit(0);
    }

    projectName = response;
  }

  const isDot = projectName === '.';
  const targetDir = isDot
    ? process.cwd()
    : path.resolve(process.cwd(), projectName);
  const packageName = isDot ? path.basename(process.cwd()) : projectName;

  if (fs.existsSync(targetDir)) {
    const existing = fs.readdirSync(targetDir);
    const allowedFiles = new Set(['.git', '.gitignore', '.gitattributes']);
    const conflicts = existing.filter((f) => !allowedFiles.has(f));

    if (conflicts.length > 0) {
      const overwrite = await clack.confirm({
        message: `Launch pad "${isDot ? '.' : projectName}" is not clear. Overwrite existing files?`,
      });

      if (clack.isCancel(overwrite) || !overwrite) {
        clack.cancel('Mission aborted.');
        process.exit(0);
      }
    }
  }

  const templateDir = path.resolve(__dirname, '..', 'template');

  if (!fs.existsSync(templateDir)) {
    clack.cancel('Payload not found. Template directory is missing.');
    process.exit(1);
  }

  clack.log.step(`Systems online at ${targetDir}`);

  copyDir(templateDir, targetDir);

  const packageJsonPath = path.join(targetDir, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    packageJson.name = packageName;
    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + '\n',
    );
  }

  const nextSteps = isDot
    ? 'npm install\nnpm run dev'
    : `cd ${projectName}\nnpm install\nnpm run dev`;

  clack.note(nextSteps, 'Flight plan');

  clack.outro('You are go for launch.');
}

main();
