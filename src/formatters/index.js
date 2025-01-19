import makeStylish from './stylish.js';

const applyFormat = (diffTree, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(diffTree);
    default:
      throw new Error(`Unexpected format: ${format}!`);
  }
};

export default applyFormat;
