import _ from 'lodash';

const symbols = { removed: '-', added: '+', unchanged: ' ' };

const getSpace = (num, str = ' ') => {
  const defaultSpace = 4;
  return str.repeat(num * defaultSpace - 2);
};

const makeString = (value, num = 1) => {
  if (!_.isObject(value)) {
    return value;
  }
  const keys = _.keys(value);
  const result = keys.map((key) => {
    const nestedKey = value[key];
    return `${getSpace(num + 1)}  ${key}: ${makeString(nestedKey, num + 1)}`;
  });
  return `{\n${result.join('\n')}\n  ${getSpace(num)}}`;
};

const stylish = (build) => {
  const iter = (node, depth = 1) => {
    const {
      key, value, type, children, updatedValue,
    } = node;
    switch (node.type) {
      case 'added':
      case 'removed':
      case 'unchanged':
        return `${getSpace(depth)}${symbols[type]} ${key}: ${makeString(value, depth)}`;
      case 'updated': {
        const removedKey = `${getSpace(depth)}${symbols.removed} ${key}: ${makeString(updatedValue, depth)}`;
        const addedKey = `${getSpace(depth)}${symbols.added} ${key}: ${makeString(value, depth)}`;
        return `${removedKey}\n${addedKey}`;
      }
      case 'nested': {
        const objectResult = children.flatMap((child) => iter(child, depth + 1));
        return `${getSpace(depth)}  ${key}: {\n${objectResult.join('\n')}\n${getSpace(depth)}  }`;
      }
      default: throw new Error(`Unknown type: ${type}`);
    }
  };

  const result = build.map((item) => iter(item));
  return `{\n${result.join('\n')}\n}`;
};

export default stylish;
