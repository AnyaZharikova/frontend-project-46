import makeStylish from './stylish.js';
import makePlain from './plain.js';

const applyFormat = (diffTree, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(diffTree);
    case 'plain':
      return makePlain(diffTree);
    default:
      throw new Error(`Unexpected format: ${format}!`);
  }
};

export default applyFormat;
