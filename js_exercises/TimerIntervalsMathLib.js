//Generator liczb losowych

//function getRandomIntInclusive(min, max) {
//	min = Math.ceil(min);
//	max = Math.floor(max);
//	return Math.floor(Math.random() * (max - min + 1)) + min;
//}

/*setTimeout(function(){
	console.log('dsadasd');
}, 1000);*/

//Interwały czasowe i zatrzymywanie
/*
var interval = setInterval(function(){
	console.log('setInterval');
},2000);

//console.log(interval);
setTimeout(function(){
	clearInterval(interval);
	
}, 10000);
*/
//Zegarek

var h1 = document.querySelector('h1');
var timeNow = '';
var viewTime = '';
var week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

var interval = setInterval(function(){
	timeNow = new Date();
	//console.log(timeNow.getSeconds());
	
	viewTime = 'Today is ' +
		week[timeNow.getUTCDay()-1] +
		' ' +
		timeNow.getHours() + 
		' : ' +
		timeNow.getMinutes() +
		' : ' +
		timeNow.getSeconds();
	
	h1.textContent = viewTime;
},1000);