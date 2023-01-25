import { describe, expect, test } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { cwd } from 'node:process';
import gendiff from '../src/index.js';

const getFixturesPath = (filepath) => resolve(cwd(), '__fixtures__', filepath);

describe.each([
  ['json'], ['yaml'],
])('$s extension', (extension) => {
  test.each([
    ['stylish'], ['plain'], ['json'],
  ])('%s formatter', (formatter) => {
    const file1Path = `__fixtures__/file1.${extension}`;
    const file2Path = `__fixtures__/file2.${extension}`;
    const expected = readFileSync(getFixturesPath(`${formatter}-result.txt`), 'utf-8');

    expect(gendiff(file1Path, file2Path, formatter)).toBe(expected);
  });
});
