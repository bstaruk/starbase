#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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

function main(): void {
  const args = process.argv.slice(2);
  const projectName = args[0];

  if (!projectName) {
    console.error('Error: Please specify a project name.');
    console.error('  npm create starbase <project-name>');
    process.exit(1);
  }

  const targetDir = path.resolve(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    const existing = fs.readdirSync(targetDir);
    const allowedFiles = new Set(['.git', '.gitignore', '.gitattributes']);
    const conflicts = existing.filter((f) => !allowedFiles.has(f));

    if (conflicts.length > 0) {
      console.error(`Error: Directory "${projectName}" is not empty.`);
      process.exit(1);
    }
  }

  const templateDir = path.resolve(__dirname, '..', 'template');

  if (!fs.existsSync(templateDir)) {
    console.error('Error: Template directory not found.');
    process.exit(1);
  }

  console.log(`Creating project in ${targetDir}...`);

  copyDir(templateDir, targetDir);

  const packageJsonPath = path.join(targetDir, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    packageJson.name = projectName;
    fs.writeFileSync(
      packageJsonPath,
      JSON.stringify(packageJson, null, 2) + '\n',
    );
  }

  console.log('\nDone! Next steps:\n');
  console.log(`  cd ${projectName}`);
  console.log('  npm install');
  console.log('  npm run dev');
  console.log();
}

main();
