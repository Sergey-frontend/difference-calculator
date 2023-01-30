import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const format = (ast, formatter) => {
  switch (formatter) {
    case 'stylish':
      return stylish(ast);
    case 'plain':
      return plain(ast);
    case 'json':
      return json(ast);
    default: throw new Error(`Unknown format: ${format}`);
  }
};

export default format;
