import stylish from './stylish.js';
import plain from './plain.js';

const getFormat = (ast, format) => {
  let result;
  switch (format) {
    case 'stylish':
      result = stylish(ast);
      break;
    case 'plain':
      result = plain(ast);
      break;
    default:
      result = console.log(`Unknown format ${format}`);
  }
  return result;
};

export default getFormat;
