const btn = document.querySelector('button');
const liCollection = [...document.getElementsByTagName('li')];//kolekcja html
console.log(liCollection);
const liNodes = document.querySelectorAll('li');
let size = 10;

    // btn.addEventListener('click',()=>{
    //     for(let i=0;i<liNodes.length;i++){
    //         // console.log(size)
    //         if(liNodes[i].style.display === ''){
    //             liNodes[i].style.display = 'block'
    //         }
    //         liNodes[i].style.fontSize = size + 'px'
    //     }
    //     size++
    // })
btn.addEventListener('click',()=>{
    liNodes.forEach(li => {
        // console.log(size)
        if(!li.style.display){//zwraca negację wartości sprawdzającej czy coś jest w display, jest równe '' więc zwraca true, gdyby nie było ! to zwróciłoby false
            li.style.display = 'block'
        }
        li.style.fontSize = `${size}px`
    });
    size++;
});
