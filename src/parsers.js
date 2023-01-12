import { extname } from 'node:path';
import yaml from 'js-yaml';
import { readFileSync } from 'node:fs';
import getFullPath from './getPath.js';

const parse = (filename) => {
  const fileExt = extname(filename).slice(1);
  let result;
  if (fileExt === 'json') {
    result = JSON.parse(readFileSync(getFullPath(filename)));
  }
  if (fileExt === 'yml') {
    result = yaml.load(readFileSync(getFullPath(filename)));
  }
  if (fileExt === 'yaml') {
    result = yaml.load(readFileSync(getFullPath(filename)));
  }
  return result;
};

export default parse;
