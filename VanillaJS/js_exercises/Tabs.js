var osoby = ['Paweł', 'Jan', 'Zbigniew', 'Krzysztof'];

console.log(osoby);

//Dodaje element(y) na koniec tablicy
osoby.push('Marek', 13);

console.log(osoby);
console.log(typeof(osoby));

//Dodaje element(y) na początek tablicy
osoby.unshift('Jola',6);

console.log(osoby);

osoby[14] = 'Kacper';

console.log(osoby);

//Tworzenie nowej tablicy z wycinka
console.log(osoby.slice(2,15));

//Usuwanie ostatniego elementu tablicy

osoby.pop();

console.log(osoby);
console.log(osoby.length);

//Usuwanie pierwszego elementu tablicy


osoby.shift();

console.log(osoby);

//Łączenie elementów

console.log(osoby.join(' - '));

//Odwracanie tablicy
console.log(osoby.reverse());