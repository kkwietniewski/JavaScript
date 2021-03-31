var man ={
		 age: 21,
		 height: 185,
		 hairColor: 'blond',
		 
		 takeBath: function(time)
		 {
			 console.log('Cleaning will take ' + time + ' mins');
		 }
		 
	 }
man.hairColor = 'brown';

console.log(man);
man.takeBath(10);

