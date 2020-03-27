/*var btn = document.querySelector('#btn');

function btnOnClick(event){
	console.log(event);
	//alert('sdad');
	btn.style.backgroundColor = 'red';
	
	//Wyrejestrowanie zdarzenia
	//btn.removeEventListener('click', btnOnClick);
}
//Nasłuchiwacz zdarzenia 
btn.addEventListener('click', btnOnClick);*/

//////////////////////////////////////////////////
/*
var sendFormBtn = document.querySelector('#send-form-btn');
var linkBtn = document.querySelector('#link-btn');

function onSendFormBtnClick(event){
	event.preventDefault(); //Usunięcie/zablokowanie domyślengo działania 

}
sendFormBtn.addEventListener('click', onSendFormBtnClick);

function onLinkBtnClick(event){
	event.preventDefault();
}
linkBtn.addEventListener('click', onLinkBtnClick);*/


////////////////////////////////////////////////////
/*
function init(){
	//Tutaj powinny się znajdować wszystkie skrypty, ponieważ wykonują się po załadowaniu drzewa DOM.
}

document.addEventListener('DOMContentLoaded',init);
//Zdarzenie czekające na załadowanie wszystkich elementów strony
window.addEventListener('load', function(){
	
});
*/

///////////////////////////////////////////////////
/*var inputEmail = document.querySelector('#input-email');

inputEmail.addEventListener('focus', function(){
	console.log('Focus')
});

//Zdarzenie odznaczenia inputa
inputEmail.addEventListener('blur', function(){
	console.log('Blured')
});

inputEmail.addEventListener('keydown', function(){
	console.log('Keydown')
});

//Zdarzenie z wyświetleniem nacisnietego przycisku
inputEmail.addEventListener('keyup', function(event){
	console.log('Keyup')
	console.log(event.key)
});*/

//Project

//Inputs
var inputFirstName = document.querySelector('#inputFirstName');
var inpuLastName = document.querySelector('#inputLastName');
var inputAge = document.querySelector('#inputAge');

//console.log(inputFirstName,inpuLastName, inputAge);

//Spans
var spanFirstName = document.querySelector('#firstName');
var spanLastName = document.querySelector('#lastName');
var spanAge = document.querySelector('#age');

//Event Listeners
inputFirstName.addEventListener('keyup', function(event){
	spanFirstName.textContent = inputFirstName.value;
});
inpuLastName.addEventListener('keyup', function(event){
	spanLastName.textContent = inpuLastName.value;
});
inputAge.addEventListener('keyup', function(event){
	spanAge.textContent = inputAge.value;
});



