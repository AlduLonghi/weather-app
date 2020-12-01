const inputForm = () => {
  const form = document.createElement('form');

  const inputContainer = document.createElement('div');
  inputContainer.setAttribute('id', 'input-cont');
  inputContainer.classList.add('form-group');

  const label = document.createElement('label');
  label.textContent += 'Search city:';

  const textInput = document.createElement('input');
  textInput.type = 'text';
  textInput.setAttribute('id', 'city');
  textInput.classList.add('form-control');

  const searchBtn = document.createElement('button');
  searchBtn.type = 'button';
  searchBtn.textContent += 'Search';
  searchBtn.setAttribute('id', 'search-btn');
  searchBtn.classList.add('btn', 'btn-small', 'btn-primary', 'mt-3');

  inputContainer.append(label, textInput, searchBtn);
  form.appendChild(inputContainer);

  return form;
};

export default inputForm;