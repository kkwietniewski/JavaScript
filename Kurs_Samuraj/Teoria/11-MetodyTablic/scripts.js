// TABLICA - METODY

const italianUsers = ["Giovanni", "Michele", "Angelo", "Luigi", "Valentina", "Marco"];
// console.log(italianUsers);



// PODSTAWOWE METODA, KTÓRE TRZEBA ZNAĆ


// PUSH - dodaj element na końcu tablicy

// italianUsers.push('Roberta');
// italianUsers.push("Alessandra");
// console.log(italianUsers);



// UNSHIFT - dodaj element na początku tablicy

// italianUsers.unshift("Tommaso");
// console.log(italianUsers);



// POP - Usuń ostatni element tablicy
// Usunięcie wartości i indeksu (nie tylko wartości)

// const deletedUser = italianUsers.pop()
// console.log(italianUsers);

// delete italianUsers[italianUsers.length - 1] //zmiana wartości ostatniego  na udenfined

/* ---------------------------------  */

// SHIFT - Usuń pierwszy element
// Usunięcie wartości i indeksu (nie tylko wartości)

// italianUsers.shift();
// italianUsers.shift();
// console.log(italianUsers);
// delete italianUsers[0] //zmiana wartości pierwszego na udenfined

// CO ZWRACAJĄ TE METODY (BO OPRÓCZ TEGO, ŻE COŚ ROBIĄ /POWYŻEJ/ TO COŚ ZWRACAJĄ)

// const removedLastElement = italianUsers.pop(); //metoda zwraca element (ostatni element tablicy), który został usunięty

// const removedFirstElement = italianUsers.shift(); //metoda zwraca element (pierwszy element tablicy), który został usunięty.

const lengthArrayAfterPush = italianUsers.push("Vito"); //metoda zwraca długoś tablicy jaką ma tablica po jej wykonaniu
const lengthArrayAfterUnshift = italianUsers.unshift("Apollonia"); //też zwraca długoś po dodaniu


/* ------------------------------------ */

// METODA CONCAT
// łączenie tablic. W istocie nie tyle łaczy dwie (czy więcej) tablic, a na ich podstawie tworzy nową

const redColors = ["czerwony", "zachodzącego słońca", "krwisty"];
const greenColors = ["zielony", "trawiasty", "zielony banan"];

const redAndGreenColors = redColors.concat(greenColors);

const allColors = redColors.concat(['żółty', 'brązowy'], greenColors);
// const redGreenBlueColors = redColors.concat(greenColors, ["morski"]);

// Inny, nowy sposób (od ES6) to operator spread (operator rozwijania, operator trzech kropek)
const colorsCollections = [...redColors, ...greenColors]; //elementy tablicy są pojedyńczo wyjęte.
// ...redColors  - "czerwony", "zachodzącego słońca", "krwisty"

const colorsCollections2 = [...redColors, ...greenColors, "morski"];


/* -------------------------------- */
const items = ["zad", "bza", "wus", "xad", "coe", "mer", "tve"]

// METODA SLICE
// zwraca nową tablicę, która składa się z części tablicy na której jest wykownywany. Jeśli damy tylko jeden argument, to będzie zwracała od tego elementu (od tego indexu) do końca
items.slice(3);
// drugi argument mówi, do którego elementu (index), ale bez tego elementu
items.slice(2, 3);
// a tak jak poniżej mozemy pobrać całą tablicę
// items.slice(0, items.length);
// lub
// const newItems = items.slice(0);

// Jeśli użyjemy minusa to mówimy ile od końca mamy zwrócić, w przykłądzie poniżej będzie tylko ostatni element
items.slice(-1);

//! Pamiętajmy, że slice nie wpływa na tablicę na której jest wykonywany, więc najczesciej przypiszemy zwróconą wartość do nowej zmiennej

const newItems = items.slice(0, 3); //trzy pierwsze elementy

/* -------------------------------- */


// METODA SPLICE
// Przykład metody destrukcyjnej (destructive method, mutating method - zmianiają tablicę na której są wywyoływane)
// Ta metoda zmienia tablice (modyfikuje) na której jest wykonywana
const animals = ["dog", "cat", "canary", "mouse"];
// animals.splice(1, 2); //od indeksu pierwszego (czyli 2 element) usuń 2 elementy.
// animals.splice(2); //usunie wszystkie elmenty od index 2, łącznie z nim element (usunie index-y, a więc zmniejszy długość tablicy)
// animals.splice(0); //wyzeruje całą tablicę


// Metoda splice umożliwia nam też zastąpienie usunietych elementów

// animals.splice(3, 1, 'hamster');
// animals.splice(0, 2, 'fishes', 'snake');

// Umożliwia nam też dodawanie nowych elementów

// animals.splice(2, 0, "rat");
// animals.splice(0, 0, "horse", "pig", "donkey");

// BARDZO WAŻNE. Metod splice nie tylko wykonuje operacje na tablicy (zmienie ją), ale też zwraca wartości, kóre usuwa w formie tablicy. Więc to co usunięmy możemy wykorzystać.

// const pets = animals.splice(0, 3);



/* -------------------------------- */

// METODA SORT
//metoda destrukcyjna
["Marek", "Zenek", "Arek"].sort();
animals.sort();

/* -------------------------------- */

// METODA INDEXOF
// szuka takiego elementu w tablicy, jeśli znajdzie zwraca index tego elementu, jeśli nie zwraca -1;
animals.indexOf('canary');
["Arek", 22, null, 22].indexOf(22);
["Arek", 22, null, 22].lastIndexOf(22);
["Arek", 22, null, 22].indexOf("Are"); //-1

//METODA INCLDES
animals.includes('cat'); //true
animals.includes('rat'); //false
[20, 22, 123, 120].includes(22);



//METODA JOIN
//Tworzy stringa z elementów, domyślnie oddzielonych przeccinkiem, można to zmienić.
items.join(); //string odddzielony przecinkami
items.join("<--");
items.join(" separator; \n");


//METODA REVERSE
//metoda destrukcyjna, odwracajaca kolejność

items.reverse();
['a', 'b', 'c'].reverse();


//METODA SPLIT
//można użyć do rozdzielenia stringa na tablice

const letters = "Marek Magda Anna".split('');
const names = "Marek Magda Anna".split(' ');
const threeCities = "Gdańsk, Sopot, Kraków, Warszawa, Poznań".split(", ", 3);

const dateOfBirths = "1998,1978,1965,1999,2000".split(",");