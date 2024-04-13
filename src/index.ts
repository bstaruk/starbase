#!/usr/bin/env node
import prompts from 'prompts';
import { green, yellow, red } from 'picocolors';
import fs from 'fs-extra';
import path from 'path';

(async () => {
  let isCancelled = false;
  const questions = [
    {
      type: 'text',
      name: 'installPath',
      message: 'What folder would you like to install Starbase in?',
      validate: (installPath: string) => {
        if (!installPath) return 'This is not a valid folder name.';

        try {
          // Check if the directory exists
          if (
            fs.existsSync(installPath) &&
            fs.lstatSync(installPath).isDirectory()
          ) {
            const files = fs.readdirSync(installPath);
            if (
              files?.filter((f: string) => !['.git'].includes(f))?.length > 0
            ) {
              return 'This folder is not empty.';
            }

            return true;
          }
        } catch (err) {
          return 'Error checking if folder exists -- this is usually a permissions issue.';
        }

        return true;
      },
    },
  ];

  const onCancel = () => {
    isCancelled = true;
    return console.log(yellow('Starbase initialization cancelled.') + '\n');
  };

  const answers = await prompts(questions, { onCancel });

  // Exit if valid installPath is not provided
  if (!answers.installPath) {
    // Display error when not an intentional cancellation
    if (!isCancelled) {
      console.log(red('Installation path is required to proceed.') + '\n');
    }

    return true; // Exit
  }

  // Create proper paths
  const templatePath = path.join(__dirname, '../template');
  const installPath = path.resolve(process.cwd(), answers.installPath);

  // Copy template files
  await fs
    .copy(templatePath, installPath, {
      filter: (src) => {
        // Do not copy node_modules or dist
        if (
          src.includes('template/node_modules') ||
          src.includes('template/dist')
        ) {
          return false;
        }

        // Copy everything else
        return true;
      },
    })
    .catch((err) => {
      return console.error(red(err));
    });

  // Rename gitignore.md to .gitignore (npmjs.com removes .gitignore files)
  await fs
    .move(
      path.join(installPath, 'gitignore.md'),
      path.join(installPath, '.gitignore'),
    )
    .catch((err) => {
      return console.error(red(err));
    });

  // Success!
  return console.log(
    green(
      `Starbase has been installed in ${answers.installPath} -- happy developing!`,
    ) + '\n',
  );
})();
