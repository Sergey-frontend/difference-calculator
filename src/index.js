// основной файл для итоговой функции поиска разницы
import path from 'node:path';
import { readFileSync } from 'node:fs';
import buildAST from './buildAST.js';
import parse from './parser.js';
import getFormat from './formatters/index.js';

const getAbsolutePath = (filename) => path.resolve(process.cwd(), filename);

const parseData = (filepath) => {
  const extention = path.extname(filepath);
  const data = readFileSync(getAbsolutePath(filepath), 'utf-8');
  return parse(data, extention);
};

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = parseData(filepath1)
  const data2 = parseData(filepath2)
  const tree = buildAST([data1, data2]);
  return getFormat(tree, formatName);
};

export default gendiff;
