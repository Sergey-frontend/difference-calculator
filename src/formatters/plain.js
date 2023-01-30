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
    switch (node.type) {
      case 'nested':
        return node.children.flatMap((child) => iter(child, `${parent}${node.key}.`)).join('\n');
      case 'removed':
        return `Property '${parent}${node.key}' was removed`;
      case 'added':
        return `Property '${parent}${node.key}' was added with value: ${makeString(node.value)}`;
      case 'updated':
        return `Property '${parent}${node.key}' was updated. From ${makeString(node.updatedValue)} to ${makeString(node.value)}`;
      case 'unchanged':
        return [];
      default: throw new Error(`Unknown type: ${node.type}`);
    }
  };
  const diff = build.map((node) => iter(node));
  const result = `${diff.join('\n')}`;
  return result.trim();
};

export default plain;
