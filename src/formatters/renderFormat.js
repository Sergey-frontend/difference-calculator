import stylish from './stylish.js';

const getFormat = (ast, format) => {
  let result;
  switch (format) {
    case 'stylish':
      result = stylish(ast);
      break;
    default:
      result = console.error(`Unknown format ${format}`);
  }
  return result;
};

export default getFormat;
