// основной файл для итоговой функции поиска разницы
import build from './build.js';
import parse from './parsers.js';
import getFormat from './formatters/renderFormat.js';

const gendiff = (filepath1, filepath2, formatName = 'stylish') => {
  const paths = [filepath1, filepath2];
  const data = paths.map((filepath) => parse(filepath));
  const tree = build(data);
  return getFormat(tree, formatName);
};

export default gendiff;
