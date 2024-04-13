#!/usr/bin/env node
import prompts = require('prompts');
import { green, yellow, red } from 'picocolors';
import fs = require('fs-extra');
import path = require('path');

(async () => {
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
          return 'Error checking directory existence -- this is usually a permissions issue.';
        }

        return true;
      },
    },
  ];

  const onCancel = () => {
    console.log(yellow('Starbase initialization cancelled!') + '\n');
    return true;
  };

  const answers = await prompts(questions, { onCancel });

  if (answers.installPath) {
    // Copy template files
    const templatePath = path.join(__dirname, '../template');
    const installPath = path.resolve(process.cwd(), answers.installPath);

    fs.copy(
      templatePath,
      installPath,
      {
        filter: (src) => {
          if (src.includes('node_modules') || src.includes('dist')) {
            console.log('src', src);
          }

          return true;
        },
      },
      (err) => {
        if (err) {
          return console.error(red(err));
        }

        fs.move(
          path.join(installPath, './gitignore.md'),
          path.join(installPath, './.gitignore'),
          (err) => {
            if (err) {
              return console.error(red(err));
            }
            console.log(
              green(`Starbase has been installed in "${answers.installPath}"`) +
                '\n',
            );
          },
        );
      },
    );
  }
})();
