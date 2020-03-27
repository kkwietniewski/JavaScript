
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
console.log(car);

zwiekszMoc(50);

console.log(car);