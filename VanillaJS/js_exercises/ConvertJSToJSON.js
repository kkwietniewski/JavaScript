function Samochod(marka, cena, moc)
{
  this.marka = marka;
  this.cena = cena; 
  this.moc = moc;
}


Samochod.prototype.zwiekszMoc = function(tmpPow)
{
  if(tmpPow != 'string')
  {
    var convert = parseInt(this.moc);
    convert += tmpPow;
    this.moc = convert.toString();
    console.log("Zwiekszam moc...");
  }
}

Samochod.prototype.toString = function()
{
  console.log('{marka: Fiat, cena: 45000, moc: 125}'
);
}

var cars = new Array(3);
cars[0] = new Samochod('volkswagen', '15000', '105');
cars[1] = new Samochod('mercedes', '20000', '160');
cars[2] = new Samochod('toyota', '12000', '125');

console.log(JSON.stringify(cars)); //brak metod

var car = {marka: "vw", cena: "12000", moc: "105"};

function zwiekszMoc(x)
{
  if(x != 'string')
  {
    var convert = parseInt(car.moc);
    convert += x;
    car.moc=convert.toString();
  }
  
}

console.log(JSON.stringify(car)); //brak metod