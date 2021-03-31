let size = 10;
let orderElement = 1;

const init = () =>{
    const btnAdd = document.createElement('button');
    btnAdd.textContent = 'Dodaj 10 elementów do listy';
    btnAdd.style.fontSize = '20px';
    
    const btnReset = document.createElement('button');
    btnReset.textContent = 'Resetuj';
    btnReset.style.fontSize = '20px';

    const ul = document.createElement('ul');
    ul.style.listStyle = 'none';

    document.body.appendChild(btnAdd);
    document.body.appendChild(btnReset);
    document.body.appendChild(ul);

    btnAdd.addEventListener('click',createLiElements);
    btnReset.addEventListener('click',resetElements);
};

const createLiElements = () =>{
    const ul = document.querySelector('ul');
    for(let i= 0; i<10; i++){
        const li = document.createElement('li');
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        
        ul.appendChild(li);
    }
};
const resetElements = () =>{
    size = 10;
    orderElement = 1;

    document.querySelector('ul').textContent = '';
};

init()