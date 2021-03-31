//Closure (domknięcie) to mechanizm, który pomaga nam uzyskać dostęp do danej wartości poza funkcją i gdy ta funkcja nie jest już aktywna.

//Closure - zmienna istnieje w innej funkcji, mimo, że funkcja, w której była stworzona ta zmienna nie jest już aktywna.
//W pamięci programu zmienna istnieje, jeśli prowadzi do niej referencja z innej funkcji. Możemy mieć do niej dostęp, ale także je zmieniać.

//Przykład Closure////////////////////////////////////////////////
// function x(){
//   let number = 1;
//   function y(){
//     console.log(number);
//   }
//   return y;
// }

// const example = x();
// example();
//////////////////////////////////////////////////////////////////

//Tradycyjny projekt
//////////////////////////////////////////////////////////////////
// let number = 0;

// const add = ()=>{
//   number++;
//   document.body.textContent= `aktualny stan licznika ${number}`;
// }
// document.addEventListener("click", add);

//////////////////////////////////////////////////////////////////


const add = (start = 0)=>{
  let number = start;
  return () => {
    number++;
    document.body.textContent = `aktualny stan licznika kliknięć ${number}`;
  }

}

const counter = add();
document.addEventListener("click", counter);