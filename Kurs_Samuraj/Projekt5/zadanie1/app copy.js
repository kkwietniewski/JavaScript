const input = document.getElementById('pass');
const div = document.querySelector('.message')
const password = 'user';
const message = 'wyjeżdzam na zawsze'

// input.addEventListener('input', function(e){
//     console.log(e.target.value);
//     console.log(this.value);// to to samo co e.target

//     // if(password == e.target.value){
//     //     div.textContent = message;
//     //     e.target.value = ''
//     // }else{
//     //     div.textContent = '';
//     // }
// })

input.addEventListener('input', (e)=>{
    console.log(e.target);
    console.log(this);// w przypadku funkcji strzałkowej this odnosi się do obiektu window

    // if(password == e.target.value){
    //     div.textContent = message;
    //     e.target.value = ''
    // }else{
    //     div.textContent = '';
    // }
})

input.addEventListener('focus',(e)=>{
    e.target.classList.add('active');
})

input.addEventListener('blur',(e)=>{
    e.target.classList.remove('active');
})