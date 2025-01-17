import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fixturesPath = path.join(__dirname, '..', '__fixtures__');

describe('genDiff', () => {
  test('compare two JSON-files', () => {
    const filepath1 = path.join(fixturesPath, 'file1.json');
    const filepath2 = path.join(fixturesPath, 'file2.json');
    const expectedResultPath = path.join(fixturesPath, 'expected_result.txt');
    const expectedResult = fs.readFileSync(expectedResultPath, 'utf-8').trim();
    const actualResult = genDiff(filepath1, filepath2);

    expect(actualResult).toEqual(expectedResult);
  });

  test('compare two YAML-files', () => {
    const filepath1 = path.join(fixturesPath, 'file1.yaml');
    const filepath2 = path.join(fixturesPath, 'file2.yaml');
    const expectedResultPath = path.join(fixturesPath, 'expected_result.txt');
    const expectedResult = fs.readFileSync(expectedResultPath, 'utf-8').trim();
    const actualResult = genDiff(filepath1, filepath2);

    expect(actualResult).toEqual(expectedResult);
  });
});
