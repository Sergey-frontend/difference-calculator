import { expect, test } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { cwd } from 'node:process';
import gendiff from '../src/index.js';
import getFormat from '../src/formatters/index.js';

const getFixturesPath = (filepath) => resolve(cwd(), '__fixtures__', filepath);

const stylishResult = readFileSync(getFixturesPath('stylish-result.txt'), 'utf-8');
const plainResult = readFileSync(getFixturesPath('plain-result.txt'), 'utf-8');
const jsonResult = readFileSync(getFixturesPath('json-result.txt'), 'utf-8');

const stylishCase = [
  ['__fixtures__/file1.json', '__fixtures__/file2.json', stylishResult],
  ['__fixtures__/file1.yml', '__fixtures__/file2.yaml', stylishResult],
  ['__fixtures__/file1.json', '__fixtures__/file2.yaml', stylishResult],
  ['__fixtures__/file1.yml', '__fixtures__/file2.json', stylishResult],
];
const plainCase = [
  ['__fixtures__/file1.json', '__fixtures__/file2.json', plainResult],
  ['__fixtures__/file1.yml', '__fixtures__/file2.yaml', plainResult],
  ['__fixtures__/file1.json', '__fixtures__/file2.yaml', plainResult],
  ['__fixtures__/file1.yml', '__fixtures__/file2.json', plainResult],
];
const jsonCase = [
  ['__fixtures__/file1.json', '__fixtures__/file2.json', jsonResult],
  ['__fixtures__/file1.yml', '__fixtures__/file2.yaml', jsonResult],
  ['__fixtures__/file1.json', '__fixtures__/file2.yaml', jsonResult],
  ['__fixtures__/file1.yml', '__fixtures__/file2.json', jsonResult],
];

test.each(stylishCase)('stylish output', (file1, file2, stylish) => {
  expect(gendiff(file1, file2)).toEqual(stylish);
});

test.each(plainCase)('plain output', (file1, file2, plain) => {
  expect(gendiff(file1, file2, 'plain')).toEqual(plain);
});

test.each(jsonCase)('json output', (file1, file2, json) => {
  expect(gendiff(file1, file2, 'json')).toEqual(json);
});

test('Unknown format', () => {
  expect(getFormat('asd', 'html')).toEqual('Unknown format html');
});
