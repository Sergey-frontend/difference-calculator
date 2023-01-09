import _ from 'lodash';

/* построение массива объекта с нужными значениями для вывода */
const mknode = (key, value, type, meta = {}) => ({
  key, value, type, meta,
});

const build = (objects) => {
  const [obj1, obj2] = objects;
  const keys = _.union(_.keys(obj1), _.keys(obj2));
  const sortedKeys = _.sortBy(keys);
  const nodes = sortedKeys.map((key) => {
    const [value1, value2] = [obj1[key], obj2[key]];
    if (!_.has(obj1, key)) return mknode(key, value2, 'added');
    if (!_.has(obj2, key)) return mknode(key, value1, 'removed');
    if (value1 !== value2) return mknode(key, value2, 'updated', { oldValue: value1 });
    return mknode(key, value1, 'unchanged');
  });
  return nodes;
};

export default build;
