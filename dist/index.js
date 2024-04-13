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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = __importDefault(require("prompts"));
const picocolors_1 = require("picocolors");
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    let isCancelled = false;
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
                    if (fs_extra_1.default.existsSync(installPath) &&
                        fs_extra_1.default.lstatSync(installPath).isDirectory()) {
                        const files = fs_extra_1.default.readdirSync(installPath);
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
        isCancelled = true;
        return console.log((0, picocolors_1.yellow)('Starbase initialization cancelled!') + '\n');
    };
    const answers = yield (0, prompts_1.default)(questions, { onCancel });
    // Exit if valid installPath is not provided
    if (!answers.installPath) {
        // Display error when not an intentional cancellation
        if (!isCancelled) {
            console.log((0, picocolors_1.red)('Install path is required to proceed.') + '\n');
        }
        return true; // Exit
    }
    // Create proper paths
    const templatePath = path_1.default.join(__dirname, '../template');
    const installPath = path_1.default.resolve(process.cwd(), answers.installPath);
    // Copy template files
    yield fs_extra_1.default
        .copy(templatePath, installPath, {
        filter: (src) => {
            // Do not copy node_modules or dist
            if (src.includes('template/node_modules') ||
                src.includes('template/dist')) {
                return false;
            }
            // Copy everything else
            return true;
        },
    })
        .catch((err) => {
        return console.error((0, picocolors_1.red)(err));
    });
    // Rename gitignore.md to .gitignore (npmjs.com removes .gitignore files)
    yield fs_extra_1.default
        .move(path_1.default.join(installPath, 'gitignore.md'), path_1.default.join(installPath, '.gitignore'))
        .catch((err) => {
        return console.error((0, picocolors_1.red)(err));
    });
    // Success!
    return console.log((0, picocolors_1.green)(`Starbase has been installed in "${answers.installPath}"`) + '\n');
}))();
