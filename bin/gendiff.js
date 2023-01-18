#!/usr/bin/env node

import { program } from 'commander';
import gendiff from '../src/index.js';

program
  .description('Compares two configureation files and shows a difference.')
  .version('0.0.1', '-v, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    const diff = gendiff(filepath1, filepath2, program.opts().format);
    console.log(diff);
  });

program.parse();
