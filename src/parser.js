import yaml from 'js-yaml';

const parse = (data, extention) => {
  switch (extention) {
    case '.yml':
    case '.yaml':
      return yaml.load(data);
    case '.json':
      return JSON.parse(data);
    default: throw new Error(`Unknown extention: ${extention}`);
  }
};

export default parse;
