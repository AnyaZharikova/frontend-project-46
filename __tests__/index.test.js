import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fixturesPath = path.join(__dirname, '..', '__fixtures__');

const formats = ['stylish', 'plain'];

describe.each(formats)('genDiff JSON in format: %s', (format) => {
  let filepath1;
  let filepath2;

  beforeEach(() => {
    filepath1 = path.join(fixturesPath, 'file1.json');
    filepath2 = path.join(fixturesPath, 'file2.json');
  });

  test(`output in ${format}`, () => {
    const expectedResultPath = path.join(
      fixturesPath,
      format === 'stylish' ? 'expected_result.txt' : 'exp_result_plain.txt',
    );
    const expectedResult = fs.readFileSync(expectedResultPath, 'utf-8').trim();
    const actualResult = genDiff(filepath1, filepath2, format);

    expect(actualResult).toEqual(expectedResult);
  });
});

describe.each(formats)('genDiff YAML in format: %s', (format) => {
  let filepath1;
  let filepath2;

  beforeEach(() => {
    filepath1 = path.join(fixturesPath, 'file1.yaml');
    filepath2 = path.join(fixturesPath, 'file2.yaml');
  });

  test(`output in ${format}`, () => {
    const expectedResultPath = path.join(
      fixturesPath,
      format === 'stylish' ? 'expected_result.txt' : 'exp_result_plain.txt',
    );
    const expectedResult = fs.readFileSync(expectedResultPath, 'utf-8').trim();
    const actualResult = genDiff(filepath1, filepath2, format);

    expect(actualResult).toEqual(expectedResult);
  });
});
