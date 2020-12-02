const pCreator = (text, id = '') => {
  const specifics = document.createElement('p');

  if (id !== '') {
    specifics.setAttribute('id', id);
  }

  specifics.textContent += text;

  return specifics;
};

export default pCreator;