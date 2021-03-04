const Person = function(name, age){
  this.name = name;
  this.age = age;
  this.children = [];
}

Person.prototype.addChildren = function(name){
  this.children.push(name);
}

const arek = new Person("Arek", 52);//egzemplarz
const bogdan = new Person("Bogdan", 22);//egzemplarz

arek.addChildren("Kacper");
arek.addChildren("Mateusz");
console.log("Rodzic "+arek.name+" ma dzieci");
arek.children.forEach(child=>console.log(child));

bogdan.addChildren("Marek");
console.log("Rodzic "+bogdan.name+" ma dzieci");
bogdan.children.forEach(child=>console.log(child));

//Prototyp jest obiektem w funkcji konstruktora, współdzielonym przez wszystkie egzemplarze. Każdy egzemplarz ma dostęp do obiekty prototypu.

//Prototyp domyślnie zawiera właściwość construktor (funkcja konsturktora lub klasa) + to co zostanie przypisane do prototypu

// function Player(){

// }

// Player.prototype.age = 23;
class Player{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  getName(){
    console.log(`Nazywam się ${this.name}`);
  }
}
const janek = new Player("Janek", 23);
const marta = new Player("Marta", 18);
console.log(janek, marta);

// console.log(janek.constructor);

marta.getName();

const Citizen = function(country, citizenship){
  this.country = country;
  this.citizenship = citizenship;
  this.changeCitizenship = function(citizenship){
    this.citizenship = citizenship;
    console.log(`Zmiana za pomocą metody w instancji na obywaltelstwo ${this.citizenship}`);
  }
}

Citizen.prototype.changeCitizenship = function(citizenship){
    this.citizenship = citizenship;
    console.log(`Zmiana za pomocą metody w prototypie na obywaltelstwo ${this.citizenship}`);
  }
//Przesłanianie

const borys = new Citizen("Ukraina", "ukraińskie");
const maria = new Citizen("Włochy", "włoskie");
borys.changeCitizenship("polskie");
maria.changeCitizenship("francuskie");

//Rozszerzanie prototypu wbudowanego
const arr = [5,6,7,8];
Array.prototype.delete = function(index){
  return this.splice(index,1);
}
console.log(arr)
console.log(arr.delete(2));
console.log(arr)


//Łańcuch prototypów

console.log(arr.__proto__)//Prototyp konstruktora
console.log(arr.__proto__.__proto__)//Prototyp Object

//Object.getPrototypeOf

console.log(Object.getPrototypeOf(borys))