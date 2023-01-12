import { beforeAll, expect, test } from '@jest/globals';
import fs from 'fs';
import gendiff from '../src/index.js';
import getFullPath from '../src/getPath.js';

let result;

beforeAll(() => {
  result = fs.readFileSync(getFullPath('result.txt'), 'utf8');
});

test('compare two json files', () => {
  expect(gendiff('file1.json', 'file2.json')).toEqual(result);
});

test('compare two yml/yaml files', () => {
  expect(gendiff('file1.yml', 'file2.yaml')).toEqual(result);
});

test('compare json and yml/yaml files', () => {
  expect(gendiff('file1.json', 'file2.yaml')).toEqual(result);
});
