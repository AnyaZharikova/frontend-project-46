import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import parse from './parsers.js';

const getAbsolutePath = (file) => path.resolve(process.cwd(), file);

const readFile = (filepath) => fs.readFileSync(getAbsolutePath(filepath), 'utf-8');

const getExtension = (file) => path.extname(file);

const genDiff = (file1, file2) => {
  const dataOfFile1 = readFile(file1);
  const dataOfFile2 = readFile(file2);

  const extOfFile1 = getExtension(file1);
  const extOfFile2 = getExtension(file2);

  const parsedFile1 = parse(dataOfFile1, extOfFile1);
  const parsedFile2 = parse(dataOfFile2, extOfFile2);

  const keys = _.sortBy(Object.keys({ ...parsedFile1, ...parsedFile2 }));
  const indent = '  ';
  const matched = ' ';
  const added = '+';
  const changed = '-';

  const getDiff = (key) => {
    const value1 = parsedFile1[key];
    const value2 = parsedFile2[key];

    switch (true) {
      case !Object.hasOwn(parsedFile2, key):
        return `${indent}${changed} ${key}: ${value1}`;
      case !Object.hasOwn(parsedFile1, key):
        return `${indent}${added} ${key}: ${value2}`;
      case parsedFile1[key] !== parsedFile2[key]:
        return `${indent}${changed} ${key}: ${value1}\n${indent}${added} ${key}: ${value2}`;
      default:
        return `${indent}${matched} ${key}: ${value1}`;
    }
  };

  const result = keys.map(getDiff).join('\n');

  return `{\n${result}\n}`;
};

export default genDiff;
