#!/usr/bin/env node

import { program } from 'commander';

program
  .name('gendiff')
  .version('1.0.0')  
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .argument('<filepath1>', 'path to the first file')
  .argument('<filepath2>', 'path to the second file')
  .option('-f, --format [type]', 'output format');

program.parse();
