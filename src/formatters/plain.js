import _ from 'lodash';

const makeString = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (build) => {
  const iter = (node, parent = '') => {
    const {
      key, value, type, children, meta,
    } = node;
    switch (type) {
      case 'nested':
        return children.flatMap((child) => iter(child, `${parent}${key}.`)).join('\n');
      case 'removed':
        return `Property '${parent}${key}' was removed`;
      case 'added':
        return `Property '${parent}${key}' was added with value: ${makeString(value)}`;
      case 'updated':
        return `Property '${parent}${key}' was updated. From ${makeString(meta.oldValue)} to ${makeString(value)}`;
      case 'unchanged':
        return [];
      default: throw new Error(`Unknown type: ${type}`);
    }
  };
  const diff = build.map((node) => iter(node));
  const result = `${diff.join('\n')}`;
  return result.trim();
};

export default plain;
