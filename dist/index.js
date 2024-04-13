#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts = require("prompts");
const picocolors_1 = require("picocolors");
const fs = require("fs-extra");
const path = require("path");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const questions = [
        {
            type: 'text',
            name: 'installPath',
            message: 'What folder would you like to install Starbase in?',
            validate: (installPath) => {
                var _a;
                if (!installPath)
                    return 'This is not a valid folder name.';
                try {
                    // Check if the directory exists
                    if (fs.existsSync(installPath) &&
                        fs.lstatSync(installPath).isDirectory()) {
                        const files = fs.readdirSync(installPath);
                        if (((_a = files === null || files === void 0 ? void 0 : files.filter((f) => !['.git'].includes(f))) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                            return 'This folder is not empty.';
                        }
                        return true;
                    }
                }
                catch (err) {
                    return 'Error checking directory existence -- this is usually a permissions issue.';
                }
                return true;
            },
        },
    ];
    const onCancel = () => {
        console.log((0, picocolors_1.yellow)('Starbase initialization cancelled!') + '\n');
        return true;
    };
    const answers = yield prompts(questions, { onCancel });
    if (answers.installPath) {
        // Copy template files
        const template = path.join(__dirname, '../template');
        fs.copy(template, answers.installPath, {
            filter: (src) => {
                if (src.includes('node_modules') || src.includes('dist')) {
                    return false;
                }
                return true;
            },
        }, (err) => {
            if (err) {
                return console.error((0, picocolors_1.red)(err));
            }
            fs.move(`${answers.installPath}/gitignore.md`, `${answers.installPath}/.gitignore`, (err) => {
                if (err) {
                    return console.error((0, picocolors_1.red)(err));
                }
                console.log((0, picocolors_1.green)(`Starbase has been installed in "${answers.installPath}"`) +
                    '\n');
            });
        });
    }
}))();
