// основной файл для итоговой функции поиска разницы
import path from 'node:path';
import { readFileSync } from 'node:fs';
import build from './build.js';
import parse from './parser.js';
import getFormat from './formatters/index.js';

const getAbsolutePath = (filename) => path.resolve(process.cwd(), filename);

const parseData = (filepath) => {
  const extention = path.extname(filepath);
  const data = readFileSync(getAbsolutePath(filepath), 'utf-8');
  return parse(data, extention);
};

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const paths = [filepath1, filepath2];
  const data = paths.map(parseData);
  const tree = build(data);
  return getFormat(tree, formatName);
};

export default gendiff;
