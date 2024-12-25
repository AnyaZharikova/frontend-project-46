#!/usr/bin/env node

import { program } from 'commander';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .version('1.0.0');

program.parse();
