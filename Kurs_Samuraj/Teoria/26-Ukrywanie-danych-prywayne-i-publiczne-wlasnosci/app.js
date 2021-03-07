//Prywatne i publiczne właśności
//Domyślnie wszystkie metody i własności obiektów są publiczne w JS

//Przykłady ukrywania danych
//_konwencja
//wykorzystywanie closure - metody dostępowe do ukrytych własności

// 1 - Konwencja

class Cat{
  constructor(color){
    this.color = color;
  }
  //metoda pobierająca zawartość _color
  getColor(){
    return this._color;
  }
  setColor(value){
    if(typeof value === "string"){
      return this._color = value;
    }else{
      console.log("Wartość nieporawidłowa!")
    }
  }
}

const kotek = new Cat("czarny");
kotek.color;

// 2 - Wykorzystywanie domknięć(closure)

class Dog{
  constructor(name, color){
    this.name = name;
    let _color = color;
    this.getColor = () => _color;
    this.setColor = color => _color = color;
  }
}

const fafik = new Dog("faifk", "czerwony");

class Car{
  constructor(name, counter = 100000, year = 2000){
    this.name = name;
    let _counter = counter;
    let _year = year;
    let _changeNumber = 0;

    this.getYear = () => _year;
    this.getCounter = () => {
      if(_changeNumber) console.log(`Uważaj licznik został zmieniony ${_changeNumber} razy`)
      return _counter;
    }
    this.getNumberOfChange = () => _changeNumber;
    this.setCounter = value =>{
      _changeNumber++;
      return _counter = value;
    }
    this.showCarAge = function(year){
      return year - _year;
    }  
  }
}

const polonez = new Car("Polonez caro", 25000, 2009)