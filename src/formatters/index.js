import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const getFormat = (ast, format) => {
  let result;
  switch (format) {
    case 'stylish':
      result = stylish(ast);
      break;
    case 'plain':
      result = plain(ast);
      break;
    case 'json':
      result = json(ast);
      break;
    default:
      result = `Unknown format ${format}`;
  }
  return result;
};

export default getFormat;
