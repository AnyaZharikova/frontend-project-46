import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getAbsolutePath = (file) => path.resolve(process.cwd(file), file);

const readFile = (filepath) => fs.readFileSync(getAbsolutePath(filepath), 'utf-8');

const getExtension = (file) => path.extname(getAbsolutePath(file));

const makeObject = (file) => {
  const ext = getExtension(file);

  switch (ext) {
    case '.json':
      return JSON.parse(readFile(file));
    case '.yml':
    case '.yaml':
      return yaml.load(readFile(file));
    default:
      throw new Error(`${ext} is not suppurted extension!`);
  }
};

const genDiff = (file1, file2) => {
  const keys = _.sortBy(Object.keys({ ...file1, ...file2 }));
  const indent = '  ';
  const matched = ' ';
  const added = '+';
  const changed = '-';

  const getDiff = (key) => {
    switch (true) {
      case !Object.hasOwn(file2, key):
        return `${indent}${changed} ${key}: ${file1[key]}`;
      case !Object.hasOwn(file1, key):
        return `${indent}${added} ${key}: ${file2[key]}`;
      case file1[key] !== file2[key]:
        return `${indent}${changed} ${key}: ${file1[key]}\n${indent}${added} ${key}: ${file2[key]}`;
      default:
        return `${indent}${matched} ${key}: ${file1[key]}`;
    }
  };

  const result = keys.map(getDiff);

  return `{\n${result.join('\n')}\n}`;
};

export { makeObject, genDiff };
