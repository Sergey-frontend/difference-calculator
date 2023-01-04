#!/usr/bin/env node

const { program } = require('commander');

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-v, --version', 'output the version number')

program.parse()