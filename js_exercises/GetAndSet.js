var person = {
	firstName: 'Monika',
  lastName: 'Nogała',
  get FullName()
  {
 		return this.firstName + ' ' + this.lastName;
  },
  set FullName(tmpName)
  {
  	var tmpNames = tmpName.toString().split(' ');
    this.firstName = tmpNames[0];
    this.lastName = tmpNames[1];
  }
}

//console.log(person.FullName);
person.FullName = 'Grzegorz Brzęczyszczykiewicz';
//console.log(person.firstName);
//console.log(person.lastName);
//console.log(person.FullName);
for(var i in person)
{
	console.log(i + ': ', person[i]);
}
