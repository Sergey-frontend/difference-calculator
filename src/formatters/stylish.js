import _ from 'lodash';

const symbols = { removed: '-', added: '+', unchanged: ' ' };

const setSpace = (num, str = ' ') => str.repeat(num * 4 - 2);

const makeString = (value, num = 1) => {
  if (!_.isObject(value)) {
    return value;
  }
  const keys = _.keys(value);
  const result = keys.map((key) => {
    const nestedKey = value[key];
    return `${setSpace(num + 1)}  ${key}: ${makeString(nestedKey, num + 1)}`;
  });
  return `{\n${result.join('\n')}\n  ${setSpace(num)}}`;
};

const stylish = (build) => {
  const iter = (node, acc = 1) => {
    const {
      key, value, type, children, updatedValue,
    } = node;
    switch (type) {
      case 'added':
      case 'removed':
      case 'unchanged':
        return `${setSpace(acc)}${symbols[type]} ${key}: ${makeString(value, acc)}`;
      case 'updated':
        return `${setSpace(acc)}${symbols.removed} ${key}: ${makeString(updatedValue, acc)}\n${setSpace(acc)}${symbols.added} ${key}: ${makeString(value, acc)}`;
      case 'nested': {
        const objectResult = children.flatMap((child) => iter(child, acc + 1));
        return `${setSpace(acc)}  ${key}: {\n${objectResult.join('\n')}\n${setSpace(acc)}  }`;
      }
      default: throw new Error(`Unknown type: ${type}`);
    }
  };

  const result = build.map((item) => iter(item));
  return `{\n${result.join('\n')}\n}`;
};

export default stylish;
