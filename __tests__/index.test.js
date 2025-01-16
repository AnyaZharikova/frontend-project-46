import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { genDiff, makeObject } from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fixturesPath = path.join(__dirname, '..', '__fixtures__');

test('return difference', () => {
  const filepath1 = path.join(fixturesPath, 'file1.json');
  const filepath2 = path.join(fixturesPath, 'file2.json');
  const expectedResultPath = path.join(fixturesPath, 'expected_result.txt');
  const expectedResult = fs.readFileSync(expectedResultPath, 'utf-8').trim();
  const actualResult = genDiff(makeObject(filepath1), makeObject(filepath2));

  expect(actualResult).toEqual(expectedResult);
});
