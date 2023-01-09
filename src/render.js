/* перевод данных в строчный вид, с учетом {} */
const symbols = { removed: '-', added: '+', unchanged: ' ' };

const render = (ast) => {
  const gendiff = ast.map((el) => {
    const {
      type, key, value, meta,
    } = el;
    if (el.type === 'updated') {
      return `- ${key}: ${value}\n+ ${key}: ${meta.oldValue}`;
    }
    return `${symbols[type]} ${key}: ${value}`;
  });
  return `{\n${gendiff.join('\n')}\n}`;
};

export default render;
