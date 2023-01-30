import _ from 'lodash';

const buildTree = ([obj1, obj2]) => {
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const sortedKeys = _.sortBy(keys);
  const nodes = sortedKeys.map((key) => {
    const [value1, value2] = [obj1[key], obj2[key]];
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        key,
        type: 'nested',
        children: buildTree([value1, value2]),
      };
    }
    if (!_.has(obj1, key)) return { key, value: value2, type: 'added' };
    if (!_.has(obj2, key)) return { key, value: value1, type: 'removed' };
    if (value1 !== value2) {
      return {
        key, value: value2, type: 'updated', updatedValue: value1,
      };
    }

    return { key, value: value1, type: 'unchanged' };
  });
  return nodes;
};

export default buildTree;
