#!/usr/bin/env node
import prompts = require('prompts');
import { green, yellow, red } from 'picocolors';
import fs = require('fs-extra');
import path = require('path');

(async () => {
  const questions = [
    {
      type: 'text',
      name: 'value',
      message: 'What folder would you like to install Starbase in?',
      validate: (value: string) => {
        if (!value) return 'This is not a valid folder name.';

        try {
          // Check if the directory exists
          if (fs.existsSync(value) && fs.lstatSync(value).isDirectory()) {
            const files = fs.readdirSync(value);
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

  const response = await prompts(questions, { onCancel });

  if (response.value) {
    const template = path.join(__dirname, '../template');
    fs.copy(template, response.value, (err) => {
      if (err) {
        return console.error(red(err));
      }
      console.log(
        green(`Starbase has been installed in "${response.value}"`) + '\n',
      );
    });
  }
})();
