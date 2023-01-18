import { readFileSync } from 'node:fs';
import { expect, test } from '@jest/globals';
import gendiff from '../src/index.js';
import getFullPath from '../src/getPath.js';

const stylishResult = readFileSync(getFullPath('stylish-result.txt'), 'utf-8');
const plainResult = readFileSync(getFullPath('plain-result.txt'), 'utf-8');
const jsonResult = readFileSync(getFullPath('json-result.txt'), 'utf-8');

const stylishCase = [
  ['file1.json', 'file2.json', stylishResult],
  ['file1.yml', 'file2.yaml', stylishResult],
  ['file1.json', 'file2.yaml', stylishResult],
  ['file1.yml', 'file2.json', stylishResult],
];

const plainCase = [
  ['file1.json', 'file2.json', plainResult],
  ['file1.yml', 'file2.yaml', plainResult],
  ['file1.json', 'file2.yaml', plainResult],
  ['file1.yml', 'file2.json', plainResult],
];

const jsonCase = [
  ['file1.json', 'file2.json', jsonResult],
  ['file1.yml', 'file2.yaml', jsonResult],
  ['file1.json', 'file2.yaml', jsonResult],
  ['file1.yml', 'file2.json', jsonResult],
];

test.each(stylishCase)('stylish output', (file1, file2, expected) => {
  expect(gendiff(file1, file2)).toBe(expected);
});

test.each(plainCase)('plain output', (file1, file2, expected) => {
  expect(gendiff(file1, file2, 'plain')).toBe(expected);
});

test.each(jsonCase)('json output', (file1, file2, expected) => {
  expect(gendiff(file1, file2, 'json')).toBe(expected);
});
