// основной файл для итоговой функции поиска разницы
import path from 'node:path';
import { readFileSync } from 'node:fs';
import buildTree from './buildTree.js';
import parse from './parser.js';
import format from './formatters/index.js';

const getAbsolutePath = (filename) => path.resolve(process.cwd(), filename);

const getData = (filepath) => readFileSync(getAbsolutePath(filepath), 'utf-8');

const getExtentions = (filepath) => path.extname(filepath);

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = parse(getData(filepath1), getExtentions(filepath1));
  const data2 = parse(getData(filepath2), getExtentions(filepath2));
  const tree = buildTree([data1, data2]);
  return format(tree, formatName);
};

export default gendiff;
