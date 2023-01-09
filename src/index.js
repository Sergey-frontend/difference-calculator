// основной файл для итоговой функции поиска разницы
import fs from 'fs';
import build from './build.js';
import render from './render.js';
import getFullPath from './getPath.js';

const gendiff = (filepath1, filepath2) => {
  const paths = [filepath1, filepath2];
  const data = paths.map((filepath) => {
    const fullPath = getFullPath(filepath);
    const content = fs.readFileSync(fullPath, 'utf-8');
    return JSON.parse(content);
  });
  const tree = build(data);
  return render(tree);
};

export default gendiff;
