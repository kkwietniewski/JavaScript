const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ['user','wiosna', 'Monisia'];
const messages = ['wyjeżdzam na zawsze', 'piękna pora roku', 'Dostanie pięknego Misia <3'];

input.addEventListener('input', (e)=>{
    div.textContent = ''
    const text = e.target.value;
    // console.log(text);
    passwords.forEach((password, index) =>{
        if(password === text){
            div.textContent = messages[index];
            e.target.value = ''
        }
    })
})

input.addEventListener('focus',(e)=>{
    e.target.classList.add('active');
})

input.addEventListener('blur',(e)=>{
    e.target.classList.remove('active');
})

// if(password == e.target.value){
//     div.textContent = message;
//     e.target.value = ''
// }else{
//     div.textContent = '';
// }