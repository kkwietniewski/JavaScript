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

for(var i in cars)
{
	console.log(cars[i]);
}

cars[0].zwiekszMoc(30);

for(var i in cars)
{
	console.log(cars[i]);
}

var strCar = cars[2].toString();
console.log(strCar);// przed zdefiniowaniem Samochod.prototype.toString wynikiem było {obiect Obiect }, teraz jest {marka: Fiat, cena: 45000, moc: 125}
