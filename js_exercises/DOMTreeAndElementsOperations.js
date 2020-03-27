//Wybieranie elementów po id, clasie i tagu
/*
console.log(document.getElementById('article-list'));

console.log(document.getElementsByClassName('jumbotron'));

console.log(document.getElementsByTagName('p'));
*/

//Wybieranie elementów starą metodą przez document.get
/*
var articleList = document.getElementById('article-list');

console.log(articleList);
console.log(typeof(articleList));

console.log(articleList.getElementsByClassName('jumbotron'));
*/

//Nowsza metoda do zaznaczania pierwszego elementu 
/*
var articleList = document.querySelector('#article-list');

console.log(articleList);

articleList = document.querySelector('#article-list .jumbotron > h1')

console.log(articleList);

//lub wielu elementów używająca skłądni "jak w cssie"
articleList = document.querySelectorAll('#article-list .jumbotron > h1')

console.log(articleList);
*/

//Dodawanie i usuwanie klas
/*
var articleList = document.querySelector('#article-list');

articleList.classList.add('text-center', 'text-uppercase');

var button = articleList.querySelector('.jumbotron 	p > a ');

button.classList.add('btn-danger');

button.classList.remove('btn-success');
*/

//var title = document.querySelector('#article-list h1');

//Podmiana wskazanego tytulu
//title.textContent = 'New title';

//Wstawianie elementów htmla
//title.innerHTML = '<h2><p><i>Tekstteksttekst</i></p></h2>';

//Dostęp do styli css
///title.style.backgroundColor = 'red';

//Pisanie styli w formie camel case np. nazwaTyp
//title.style.marginTop = '10px';
//title.style.fontFamily = 'Courier New';

var elem = document.querySelector('#article-list .jumbotron');


//Wybieramy rodzica elementu
//console.log(elem.parentNode);

//Wybór wszystkich dzieci
//console.log(elem.childNodes);
//console.log(elem.firstChild);
//console.log(elem.lastChild);

var newElementP = document.createElement('div');

newElementP.classList.add('text-center');

newElementP.style.color = 'Blue';
newElementP.style.fontFamily = 'Courier New';

newElementP.innerHTML = '<article><p>Afngjndfljndfjndlkjfvm</p></article>'

//Dodawanie elementu do części body
document.body.appendChild(newElementP);

//Usuwanie elementu wskazując na rodzica (body) 
newElementP.parentNode.removeChild(newElementP);
console.log(document.body.contains(newElementP));