const btn = document.querySelector('button');
const ul = document.querySelector('ul');
let i = 1;
btn.addEventListener('click', function(){
    const li = document.createElement('li');
    li.textContent = i;
    ul.appendChild(li);
    
    if(i%3==0){
        li.classList.add('big');
    }
    i += 2;
});
