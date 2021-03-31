function sum()
{
	let suma=0;
	for(let i=0; i<arguments.length;i++)
  {
  	suma += arguments[i];
    console.log(suma);
  }
}
sum(1,2,3);


function summ()
{
	let suma=0;
	for(let i of arguments)
  {
  	if(!isNaN([i]))
    {
    	if(typeof i == 'string')
      {
      	let convert = parseInt(i);
        suma += convert;
      }
      else
      {
      	suma += i;
      }
    }
   }
		if(suma == 0)
    return 'NaN';
    else
    return suma;
}
console.log(summ('1','a',8,9));