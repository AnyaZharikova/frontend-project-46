import _ from 'lodash';

const makePath = (node, prefix = '') => {
  const { type, key, children } = node;
  const path = prefix && !prefix.endsWith('.') ? `${prefix}.${key}` : `${prefix}${key}`;

  if (type === 'nested') {
    return children.map((child) => makePath(child, path));
  }

  return `${path}`;
};

const getValue = (value) => {
  if (value === null || typeof value === 'boolean') {
    return value;
  }
  if (!_.isObject(value)) {
    return `'${value}'`;
  }
  return '[complex value]';
};

const makePlain = (diffTree, prefix = '') => {
  const cb = (lines, node) => {
    const {
      type, value, oldValue, newValue, children,
    } = node;

    let line = '';
    switch (type) {
      case 'nested':
        line = makePlain(children, `${prefix}${node.key}.`);
        break;
      case 'added':
        line = `Property '${makePath(node, prefix)}' was added with value: ${getValue(value)}`;
        break;
      case 'deleted':
        line = `Property '${makePath(node, prefix)}' was removed`;
        break;
      case 'changed':
        line = `Property '${makePath(node, prefix)}' was updated. From ${getValue(oldValue)} to ${getValue(newValue)}`;
        break;
      case 'unchanged':
        return lines;
      default:
        throw new Error(`Unsupported type: ${type}!`);
    }

    if (lines) {
      lines.push(line);
    }

    return lines;
  };

  const result = diffTree.reduce(cb, []).join('\n');

  return result;
};

export default makePlain;
