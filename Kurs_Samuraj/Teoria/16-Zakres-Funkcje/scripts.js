/* CO TO JEST ZAKRES (SCOPE) - WPROWADZENIE */

// Zakres mówi gdzie dana zmienna jest widoczna i gdzie może być wykorzystana.

// Zakres globalny (główny) i zakres lokalny (zakres lokalny tworzy blok lub ciało funkcji).

// W naszym programie (złożonym) istnieje mnóstwo zakresów. Każdy blok, funkcja, towrzy swój zakres. Jeden zakres może być zagnieżdzony w innym zakresie. 

//Zakres jest zależny od tego gdzie dana zmienna znajduje się w kodzie (gdzie została utworzona).


/* ZAKRES GLOBALNY */
// Poza blokami i funkcjami. Przestrzeń najwyższego rzędu.

// var userID = 102;
// const colorID = 5;
// let userAge = 20;

// console.log(userID);
// console.log(colorID);
// console.log(userAge);

// userID = 200;
// colorID = 10;
// userAge = 21;


// console.log(userID);
// console.log(colorID);
// console.log(userAge);

// Zmienne zadeklarowane w zakresie globalnym są widoczne wszędzie w programie (również w innych zakresach)

let userName = "Adam";

function showName() {
 let userName = "Jan";
 userName = "Marysia";
//  console.log(userName);
}

// showName()
// console.log(userName);

//////////////////////////////////////////////////////////

/* ZAKRES LOKALNY (FUNKCJA) */


// Przykład 1

// Jeśli zakres lokalny tworzony jest przez funkcje to sposób deklaracji nie ma znacznie (istniało przed ES6).

var varFun = "a";
let letFun = "b";
const constFun = "c";


function variablesInFunction() {

 var inFunction = "jestem";
//  let varFun = 0;
 varFun = 4;
 // console.log(varFun);
 // console.log(inFunction);
 // let letFun = 5;
 // const constFun = 6;
 // console.log(funInFun);

 function showVariable() {
  // const constFun = "funkcja w funkcji";
  varFun = "nadpisuje wartość zmiennej z wyższego zakresu";
  let funInFun = "lokalny w lokalnym"
  console.log(varFun);
  console.log(letFun);
  console.log(constFun);
  //Zmienne zadeklarowane w zakresach wyżyszych są widoczne w zakresie zagnieżdzonym (również te zadeklarowane w zakresie globalnym), ale mogą być przysłonięte przez własny zakres (czy kolejny zakres nadrzędny).
 }
 // showVariable();
};
console.log(varFun);
variablesInFunction();

// showVariable();

// Funkcja tworzy zakres lokalny dla zmiennych zadeklarowanych za pomocą const var i let.

// PRZYKŁAD 2


function calculate(a, b) {
 // const a = a;
 // const b = b;
 let number1 = a;
 let number2 = b;


 function add(x, y) {
  x = 10;
  console.log(x + y)
 }
 add(number1, number2)
}

const firstNumber = 10
// calculate(firstNumber, 3)


// PRZYKŁAD 3

function calculate2(a, b) {
 // const a = a;
 // const b = b;
 const number1 = a;
 const number2 = b;

 add2()

}

function add2() {
 // number2 = 10;
 // const number2 = 10;
 // console.log(number1 + number2)
}

// calculate2(2, 3)