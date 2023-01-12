// основной файл для итоговой функции поиска разницы
import build from './build.js';
import render from './render.js';
import parse from './parsers.js';

const gendiff = (filepath1, filepath2) => {
  const paths = [filepath1, filepath2];
  const data = paths.map((filepath) => parse(filepath));
  const tree = build(data);
  return render(tree);
};

export default gendiff;
