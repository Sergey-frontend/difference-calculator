import { expect, test } from '@jest/globals';
import fs from 'fs';
import gendiff from '../src/index.js';
import getFullPath from '../src/getPath.js';

const result2json = fs.readFileSync(getFullPath('result2json.txt'), 'utf8');

test('compare two json files', () => {
  expect(gendiff('file1.json', 'file2.json')).toEqual(result2json);
});
