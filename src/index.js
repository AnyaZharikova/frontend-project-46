import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import makeComparisonTree from './compareData.js';
import applyFormat from './formatters/index.js';

const getAbsolutePath = (file) => path.resolve(process.cwd(), file);

const readFile = (filepath) => fs.readFileSync(getAbsolutePath(filepath), 'utf-8');

const getExtension = (file) => path.extname(file);

const genDiff = (file1, file2, format = 'stylish') => {
  const dataOfFile1 = readFile(file1);
  const dataOfFile2 = readFile(file2);

  const extOfFile1 = getExtension(file1);
  const extOfFile2 = getExtension(file2);

  const parsedFile1 = parse(dataOfFile1, extOfFile1);
  const parsedFile2 = parse(dataOfFile2, extOfFile2);

  const diffTree = makeComparisonTree(parsedFile1, parsedFile2);

  return applyFormat(diffTree, format);
};

export default genDiff;
