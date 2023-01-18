import yaml from 'js-yaml';

const parse = (data, extention) => {
  let result;
  if (extention === '.json') {
    result = JSON.parse(data);
  }
  if (extention === '.yml') {
    result = yaml.load(data);
  }
  if (extention === '.yaml') {
    result = yaml.load(data);
  }
  return result;
};

export default parse;
