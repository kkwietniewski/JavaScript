//Inny zapis
// function Car(){}

const Car = function(color, age){
  this.color = color;
  this.age = age;
  this.getAge = function(){ 
    console.log(`Ten ${this.color} samochód, ma ${this.age} lat`);
  }
}

const maluch = new Car("Czerwony", 35);
const polonez = new Car("Biały", 50);
//Kroki tworzenia obiektu z konstruktora:
// 1. nowy pusty obiekt
// 2. następuje wiązanie this z utworzonym opbiektem
// 3. powstaje właściwość __proto__
// 4. Wywołąnie funkcji i przypisanie zmiennej

console.log(maluch.color);
console.log(maluch.age);
maluch.getAge();

polonez.driveWheels = "tył";

console.log(polonez.color);
console.log(polonez.age);
console.log(polonez.driveWheels);
polonez.getAge();