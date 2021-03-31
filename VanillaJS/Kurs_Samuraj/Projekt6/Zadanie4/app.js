const options = ['walcz','przemyśl to jeszcze raz'];


const btnAdd = document.querySelector('.add');
const btnReset = document.querySelector('.clean');
const showAdvice = document.querySelector('.showAdvice');

const h1 = document.querySelector('h1');

btnAdd.addEventListener('click', e =>{
    e.preventDefault();
    const input = document.querySelector('input');
    const newOption = input.value;
    if(input.value.length){
        options.forEach(option => {
            if(option === newOption) return
        });
        options.push(newOption)
        console.log(options)
        input.value = '';
    }
});

btnReset.addEventListener('click', e =>{
    e.preventDefault();
    options.splice(0,options.length);
    console.log(options)
    h1.textContent = '';
});

showAdvice.addEventListener('click', e => {
    if(options.length === 0){
        options.push('walcz','przemyśl to jeszcze raz')
    }
    h1.textContent = options[Math.floor(Math.random() * options.length)]
})

document.querySelector('.showOptions').addEventListener('click', e => {
    alert(options.join('--- ---'));
})