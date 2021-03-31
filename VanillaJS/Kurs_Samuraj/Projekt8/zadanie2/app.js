const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");

const text =  ['Hejjjj!', 'tyyyy', 'pokaż mi swoje towary!'];

//Parametry
let indexText = 0;
let indexLetter = -30;
let time = 3000;

//Implementacja
const addLetter = ()=>{
  if(indexLetter >= 0){
    spnText.textContent += text[indexText][indexLetter];
  }
  indexLetter++;
  
  if(indexLetter === text[indexText].length) {
    
    indexText++
    if(indexText === text.length) return;

    return setTimeout(()=>{
      indexLetter = 0;
      spnText.textContent = "";
      addLetter();
    },2000);
  }
  setTimeout(addLetter, 100);
}

addLetter();

const cursorAnimation = ()=>{
  spnCursor.classList.toggle("active");
}
setInterval(cursorAnimation, 400);