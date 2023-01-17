import { beforeAll, expect, test } from '@jest/globals';
import { readFileSync } from 'node:fs';
import gendiff from '../src/index.js';
import getFullPath from '../src/getPath.js';
import getFormat from '../src/formatters/renderFormat.js';

let result;
let testingObj;

beforeAll(() => {
  result = readFileSync(getFullPath('result.txt'), 'utf8');
  testingObj = { a: 1, b: 2, type: 'unknownType' };
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

test('Unknown formats', () => {
  expect(getFormat(testingObj, 'html')).toEqual(console.error('Unknown format html'));
  expect(getFormat(testingObj, [])).toEqual(console.error('Unknown format []'));
});
