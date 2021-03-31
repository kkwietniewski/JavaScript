// Literał tekstowy - sposób tworzenia wartości typu prostego



// STRING - kolekcja znaków znajdujących się wewnatrz cudzysłowów (pojedyńczych (apostrof) (''), podwójnych ("") i grawisa (``))


const userName = "Tomasz Niewierny";
const userName2 = 'Mieszko';
const userName3 = `Jaś`; //super string od ES6

//Możliwość pobrania konkretnego zanku wg indeksu
const secoundLetter = userName[1];

//tworzenie instancji (obiektu) String
const objUserName = new String(userName);
const primitiveUserName = userName;

//typ prosty
const emptyString = "";

//obiekt, będący instancją String
const emptyObiectString = new Object("");
const emptyObiectString2 = new String();


//Metody dla typu string
userName.toUpperCase();
userName.toLowerCase();

const userNameUpperCase = userName.toUpperCase();

//metody robią czynność () - wywołanie, właściwości zawierają coś


//Metody i właściwości które warto znać
//właściwość zwacająca długość łańcucha
userName.length; //notacja kropkowa
userName['length']; //notacja tablicowa


//Pobranie konkretnego zanku
userName.charAt(2);
userName[2];

//Alternatywna konkatenacja do "+"
userName.concat(" -fajne imie");
let konkatenacja = userName + " -fajne imie";
`${userName} -fajne imie`; //gravis, super string

//Który indeks ma dany znak (i czy występuje)
userName.indexOf('d'); //Pierwszy pasujący znak, zwraca jego wartość, jeśli nie ma takowego to zwraca -1. (wielkość liter ma znaczenie)
userName.lastIndexOf('n'); //to samo ale od końca

//Czy dany znak występuje w łańcuchu
userName.includes('o'); //true
userName.includes('O'); //false

//Usuwanie białych znaków
const afterTrim = "   słowo    ".trim();

//Kopiowanie łańcucha znaków podaną ilość razy
const repeatString = "word ".repeat(4);

//Zwracanie fragmentu łacucha. Jako pierwszy argument gdzie ma zacząć, jako drugi gdzie skończyć (bez tego). Liczba, którą podajemy jest indeksem
const sliceWord = userName.slice(1, 3); //od 2 do 4 znaku, ale bez niego, wycina tylko "om"!





//cudzysłowy w środku stringa
const singleQuoteExample = "i'm Magda";
const singleQuoteExample2 = 'i\'m Magda';
const singleQuoteExample3 = 'It is "Magda"';


const superText = `tekst
tekst w nowej
 linii, cudzysłow " i 
 apostrof '`;


//Konwersja innego typu na stringa
String(10000);
10000..toString();
10000..toString(2); //Ze wskazaniem na dany system liczbowy


//Niejawna konwersja z trickiem
"" + 100; //daje "100"
"" + true; //daje "true"

//Do zapamiętania, konwersja właściwości tring związanych z typem boolean i konwersji string na boolean:

//- Pusty string (""), zamieniany na wartość false
//- String z jakimsś znakiem(znakami) w środku jest zamieniany na true
Boolean(); //Konwersja na wartość typu Bolean.
console.log(Boolean(emptyString)); //Zwraca false
console.log(Boolean(objUserName)); //Zwraca true
const objString = new String("");

console.log(Boolean(objString)); //Zwraca true