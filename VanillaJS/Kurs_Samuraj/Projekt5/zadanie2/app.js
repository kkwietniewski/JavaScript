// const input = document.getElementById('pass');
// const div = document.querySelector('.message');
// const passwords = ['jedEN','DwA'];
// const messages = ['super', 'działa'];


// const showMessage = (e) =>{
//     div.textContent = ''
//     const text = e.target.value;
//     // console.log(text);
//     passwords.forEach((passowrd, index)=>{
//         if(passowrd.toLocaleLowerCase() === text.toLocaleLowerCase()){
//             div.textContent = messages[index]
//         }
//     })
// }
// input.addEventListener('input', showMessage)

const input = document.getElementById('pass');
const div = document.querySelector('.message');
const passwords = ['jedEN','DwA'];
const messages = ['super', 'działa'];

const LCPasswords = passwords.map(elem=> elem.toLowerCase())//zwraca wynik zadanego działania
// [10,45,66].forEach(elem=> elem *3)//nie zwraca wyniku zadanego działania

const LCPasswordsBrackets = passwords.map(password => {
    return password.toLowerCase() //Używając nawiasów {} funkcja strzałkowa wymaga return, bez nich jest on domyślny
})
console.log(LCPasswords);
console.log(LCPasswordsBrackets);
console.log(passwords);

const showMessage = (e) =>{
    div.textContent = ''
    const text = e.target.value;
    // console.log(text);
    for (let i = 0; i < LCPasswords.length; i++) {
        const password = LCPasswords[i];
        const message = messages[i];
        if(text.toLowerCase() === password){
            div.textContent = message;
        }
    }
}
input.addEventListener('input', showMessage)