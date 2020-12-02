const pCreator = (text, id = '') => {
    console.log('hello');
    const specifics = document.createElement('p');

    if (id !== '') {
        specifics.setAttribute('id', id);
    }
    
    specifics.textContent += text;

    return specifics;
}

export default pCreator;