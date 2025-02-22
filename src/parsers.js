import yaml from 'js-yaml';

const parse = (data, ext) => {
  switch (ext) {
    case '.json':
      return JSON.parse(data);
    case '.yml':
    case '.yaml':
      return yaml.load(data);
    default:
      throw new Error(`${ext} is not supported extension!`);
  }
};

export default parse;
