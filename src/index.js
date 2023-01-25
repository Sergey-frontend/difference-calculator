// основной файл для итоговой функции поиска разницы
import path from 'node:path';
import { readFileSync } from 'node:fs';
import buildAST from './buildAST.js';
import parse from './parser.js';
import getFormat from './formatters/index.js';

const getAbsolutePath = (filename) => path.resolve(process.cwd(), filename);

const getData = (filepath) => readFileSync(getAbsolutePath(filepath), 'utf-8');

const getExtentions = (filepath) => path.extname(filepath);

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const parseData1 = parse(getData(filepath1), getExtentions(filepath1));
  const parseData2 = parse(getData(filepath2), getExtentions(filepath2));
  const tree = buildAST([parseData1, parseData2]);
  return getFormat(tree, formatName);
};

export default gendiff;
