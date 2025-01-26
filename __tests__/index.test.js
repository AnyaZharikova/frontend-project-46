import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fixturesPath = path.join(__dirname, '..', '__fixtures__');

const extensions = ['.json', '.yaml'];

const runTest = (extension, format, fileResult) => {
  const filepath1 = path.join(fixturesPath, `file1${extension}`);
  const filepath2 = path.join(fixturesPath, `file2${extension}`);
  const expectedResultPath = path.join(fixturesPath, fileResult);
  const expectedResult = fs.readFileSync(expectedResultPath, 'utf-8').trim();
  const actualResult = genDiff(filepath1, filepath2, format);

  expect(actualResult).toEqual(expectedResult);
};

extensions.forEach((extension) => {
  test(`output in stylish for ${extension}`, () => {
    runTest(extension, 'stylish', 'result_stylish.txt');
  });

  test(`output in plain for ${extension}`, () => {
    runTest(extension, 'plain', 'result_plain.txt');
  });

  test(`output in json for ${extension}`, () => {
    runTest(extension, 'json', 'result_json.txt');
  });
});
