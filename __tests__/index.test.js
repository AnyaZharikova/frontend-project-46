import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fixturesPath = path.join(__dirname, '..', '__fixtures__');

const extensions = ['.json', '.yaml'];

describe.each(extensions)('genDiff of extensions: %s', (extension) => {
  test('output in stylish', () => {
    const filepath1 = path.join(fixturesPath, `file1${extension}`);
    const filepath2 = path.join(fixturesPath, `file2${extension}`);
    const expectedResultPath = path.join(fixturesPath, 'result_stylish.txt');
    const expectedResult = fs.readFileSync(expectedResultPath, 'utf-8').trim();
    const actualResult = genDiff(filepath1, filepath2, 'stylish');

    expect(actualResult).toEqual(expectedResult);
  });
});

describe.each(extensions)('genDiff of extensions: %s', (extension) => {
  test('output in plain', () => {
    const filepath1 = path.join(fixturesPath, `file1${extension}`);
    const filepath2 = path.join(fixturesPath, `file2${extension}`);
    const expectedResultPath = path.join(fixturesPath, 'result_plain.txt');
    const expectedResult = fs.readFileSync(expectedResultPath, 'utf-8').trim();
    const actualResult = genDiff(filepath1, filepath2, 'plain');

    expect(actualResult).toEqual(expectedResult);
  });
});

describe.each(extensions)('genDiff of extensions: %s', (extension) => {
  test('output in json', () => {
    const filepath1 = path.join(fixturesPath, `file1${extension}`);
    const filepath2 = path.join(fixturesPath, `file2${extension}`);
    const expectedResultPath = path.join(fixturesPath, 'result_json.txt');
    const expectedResult = fs.readFileSync(expectedResultPath, 'utf-8').trim();
    const actualResult = genDiff(filepath1, filepath2, 'json');

    expect(actualResult).toEqual(expectedResult);
  });
});
