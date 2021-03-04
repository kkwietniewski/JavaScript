class Family{
  constructor(lastName, members, ...names){
    this.lastName = lastName;
    this.members = members;
    this.names = names;
  };
  addMember(newMember){
    this.names.push(newMember);
    this.members++;
    console.log(`Nowy członek rodziny: ${newMember}, rodzina liczy teraz ${this.members} osób`);
  }
  static makeFamily(...members){
    return members;
  }
}

const nowakowie = new Family("Nowakowie",3,"Bogdan", "Kasia","Tymon");
nowakowie.addMember("Trent");

console.log(Family.makeFamily("Ala", "Martyna", "Klaudyna"));

//Klasy nadrzędne (superclass), klasy pochodne, podrzędne (subclassy) i dziedziczenie

//Klasy dziedziczą po klasach nadrzędnych
//Tworzenie klasy
//1. zbudowanie prototypu klasy dziedziczącej w opraciu o klasę po której dziedziczy (można zapamiętać w pewnym uproszczeniu, że powstaje łańcuch prototypów)
//2. wywołanie kostruktora klasy(klas) nadrzednej (nadrzędnych)

//Słowa kluczowe - extends -wskazanie klasy po której nowa klasa powinna dziedziczyć, super - służy do rozszerzenia kostruktora nowej klasy o konstruktor klasy z której dziedziczy

class Animal{
  constructor(age, name){
    this.name = name;
    this.age = age;
  }
  breathe(){
    console.log("*Zwierze oddycha*");
  }
}

const pies = new Animal(5, "Kajtek");

class Mammal extends Animal{
  constructor(age, name, hairs){
    super(age, name); // wywołuje construktor klasy nadrzędnej
    this.hairs = hairs;
  }
  drinkMilk(){
    console.log("*Pije mleko*");
  }

  speak(){
    console.log("asdfasdfsdgdfg sda");
  }
}

const ssak = new Mammal(3, "Boyd", "blond");
ssak.breathe();
ssak.drinkMilk();


class Human extends Mammal{
  constructor(age, name, hairs, language){
    super(age, name, hairs);
    this.langauage = language;
  }
  // bez wpisania constructor, zostaje i tak wywołane
  // constructor){
  //   super();
  // }
  
  speak(){
    console.log("Witaj! Nazywam się "+this.name);
  }
}

const czlowiek = new Human(35, "Roman", "Ciemne", "Polski");
czlowiek.speak();