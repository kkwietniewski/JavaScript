/* CZYM JEST DOM */

//  -- reprezentacja dokumentu HTML w przeglądarce.
//  -- elementy strony (tag,tekst, atrybut) są węzłami, które mogą być pobrane, modyfifowane. Mozna też usuwać węzły i tworzyć nowe.
//  -- Struktura DOM przypomina drzewo. Na szczycie (na początku) jest obiekt document.
//  -- DOM nie jest częścią JS, ale JS umożliwia pracę z DOM


/* POBIERANIE ELEMENTÓW ZE STRONY */

// właściowości obiektu document
document.documentElement // dostęp do węzła html
document.body // dostęp do węzła body
document.images  //dostęp do obiektu (HTMLCollection -obiekt tablicopodobny) zawierającego wszystkie img w dokumencie (jeśli ich nie ma to obiekt jest pusty). Obiekt ten przypomina tablicę ponieważ ma length i do poszczególnych elementów można się dostać za pomocą notacje tablicy). 

// Taki obiekt łatwo przerobić na tablicę na dwa sposoby:
const imgs = Array.from(document.images);
const imgs2 = [...document.images];



// Metody pobierające JEDEN element

document.querySelector("li:nth-child(3)"); //jak selektor CSS
const firstElement = document.getElementById('car'); //Jako argument przy wywołaniu metody podajemy identyfikator


// Obie metody zwracają pierwszy znaleziony element lub null jeśli nie znalazły żadnego.


// Metody pobierające WSZYSTKIE pasujace elementy

document.querySelectorAll("* ul>li>a"); //NodeList - lista węzłów (obiekt tablicopodobny, oprócz właściwości length i mozliwości pracy z nim na notacji tablicy czyli np.[1], ma też kilka metod tablicy, ale tylko nieliczne)
document.getElementsByTagName('li'); //HTMLCollection (obiekt tablicopodobny)
document.getElementsByClassName("even"); //HTMLCollection (obiekt tablicopodobny)

// Zwracają listę pasujacych elementów w formie tablicopodobnego obiektu (NodeList/listy węzłów w przypadku querySelectorAll i HTMLCollection/kolekcji html w przypadku dwóch pozostałych). Jeśli nie znajdują żadnego pasującego elementu to zwracany obiekt jest pusty.
// Ten pierwszy sposób współcześne zdaje się być czesciej używany, bardziej też przypomina tablicę (ma część jej metod)

// Pamiętajmy jednak, że taki pseudotablice możemy łatwo zmienic na tablicę np.

const liList = document.querySelectorAll('li'); //pobranie elementów (NodeList)

const liArray = [...liList]; //parametr rest do przerobienia na tablicę
const liArray2 = Array.from(liList); //metoda do przerobienia na tablicę


// POBIERANIE ATRYBUTÓW I ZAWARTOŚCI Z ELEMENTÓW

const h2 = document.querySelector('h2');
// console.log(h2.getAttribute('class'));
// console.log(h2.getAttribute('data-color'));
// console.log(h2.getAttribute('id')); //Jeśli nie ma danego atrybutu, to zwracany jest null. Jeśli jest zwraca całą zawartość atrybutu

const h2Class = document.querySelector('h2').getAttribute('class');

const h2Text = h2.textContent; //zawartość tekstowa
const h2HTML = h2.innerHTML; //tekst wraz ze znacznikami html któe są wewnatrz danego elementu

// classList
//Obiekt classList przechowuje wszytskie klasy danego elelement (jeśli nie ma to jest to pusty obiekt)
// console.log(h2.classList);

// Przykładowa metoda contains dla obiektu ClassList
h2.classList.contains("title"); // Metoda contains sprawdza czy element posiada daną klasę. Jeśli ma zwracane jest true, jeśli nie zwraca false



//////////////////////////////////////////////////////////////

// MODYFIKACJA ELEMENTÓW DOM

const firstLi = document.querySelector('li:first-child');

// Możemy modyfikować zawartość elementy poprzez przypisanie nowych właściwości textConten lub innerHTML. Stara wartość jest usuwana.
firstLi.textContent = "Nowa zawartość tekstowa";
firstLi.innerHTML = '<strong>Pogrubienie</strong> i normalnie';

// Możemy też dodać do obecnej zawartości dodatkową treść np.
firstLi.textContent += " coś nowego";

// Dodawanie stylów do elementu(liniowo)
firstLi.style.fontSize = "30px";
firstLi.style.backgroundColor = "#ccc";
firstLi.style.letterSpacing = "2px";
// let div = document.createElement("div");
// div.style.borderTop = "solid 10px";
// div.textContent = "Hej";
// document.querySelector("ul").appendChild(div);

// Dodawanie, odejmowanie i przełączanie klas
// firstLi.classList.toggle("space");
firstLi.classList.add("space");
// firstLi.classList.remove("space");

// Nadpisywanie zawartości atrybutów - przykładowo class i id. Ale można też innych atrybutów. Zwrócmy uwagę, że nie używay słowa class (które jest w JS zarezerwowane), a zamiast niego nazwa właściwości brzmi className. Z id jest już "normalnie", podobnie z .src
firstLi.className = "one two";
firstLi.id = "";

// Ustawić zawartość atrybutu (również nadpisując ten obecny) można za pomocą metody setAttribute. Zwrócmy uwagę, że tu już możemy użyć nazwy class ponieważ jest ona przekazana w stringu (a zawartość stringa moze być dowolna i nie jest oczywiscie bolokowana przez nazwy zastrzeżone)
firstLi.setAttribute('title', 'Uwaga, ważne');
firstLi.setAttribute('class', 'sizeX');

//setAttribute czy odniesienie do własciści (element.id czy element.className) nadpisują, więc nie zawsze śą dobrym rozwiązaniem.

// Modyfikowanie wielu elementów

// zamiana na tablicę, dzięki temu mamy dostęp do wielu metod, m.in. forEach
const liItems = [...document.getElementsByTagName("li")];

// liItems.style.fontSize = "40px"; // nie zadziała, bo nie przypisujemy wszystkim elementom a próbujemy tak naprawdę przypisać tablicy. Musimy odwołać się do każdego elementu osobno.

// Dodanie klasy (pętla i forEach)

// for (let i = 0; i < liItems.length; i++) {
//  liItems[i].style.fontSize = "40px";
//  liItems[i].classList.add('red');
// }

// liItems.forEach(function(item) {
//  item.style.textDecoration = "underline";
//  item.style.fontSize = "40px";
//  item.classList.add('red');
// })

// const liValues = document.querySelectorAll("li");
// liValues.forEach(item => {
//     item.style.color = "#b060e2";
//     item.style.fontFamily = "cursive";
//     item.classList.add('space');
// });

////////////////////////////////////////////////////////////

// NASŁUCHIWANIE I OBSŁUGA ZDARZEŃ

// Metoda addEventListener - możemy wywołać ją na dowolnym elemencie DOM oraz na window (reprezentacja okna przeglądarki).

//PRZYKŁAD
// - jako pierwszy argument podajemy nazwę zdarzenie w tym przypadku podwójne kliknięcie czyli "dblclick".
// jako drugi argument podajemy funkcję (callback), która ma być wywołana w moemencie wystapienie zdarzenia (za każdym razem gdy wystąpi) 
window.addEventListener("dblclick", function() {
    console.log("podwójne kliknięcie");
   });
   
   // PRZYKŁAD - możemy podać funkcję strzałkową
   // document.body.addEventListener("click", () => console.log("kliknięcie"))
   
   
   // PRZYKŁAD - mozemy też podać nazwę funkcji, która została stworzona poza metodą addEventListener
   // const showScroll = () => {
   //  console.log("skrol");
   // }
   
   function showScroll() {
    console.log("skrol");
   }
   
   window.addEventListener("scroll", showScroll);
   
   
   
   
   // PRZYKŁAD - metodę możemy przypisać bezposrednio do pobieranego elementu
   // document.querySelector('h1').addEventListener('mousemove', function() {
   //  this.textContent += "+";
   //  console.log("ruch myszką po h1");
   // })
   
   
   
   // PRZYKŁAD
   const h1 = document.querySelector('h1');
   
   const addText = function() {
    this.textContent += " :) "; //dodanie znaków (stringa) do istniejacej zawartości tekstowej
    h1.classList.toggle("red"); //dodanie/zabranie klasy z elementu (dodaje jak nie ma, zabiera jak jest)
   }
   
   h1.addEventListener('click', addText);
   
   
   // PRZYKŁAD - nastawienie nasłuchiwania, czyli uruchomienie metody addEventListener na każdym elemencie. Pamietajmy że nie można beżposrednio na pobranym obiekcie, tylko na każdym jego elemencie osobno
   
   const addClassRed = function() {
    console.log("klik li");
   }
   
   const items = document.querySelectorAll("li");
   // zapis items.addEventListener() nie zadziała, bo nie możemy ustawić nasłuchiwanie na tablicy tylko na pobranych elementach. Jak to zrobić, widać ponizej (można też użyć pętli)
   
   //Metoda forEach sprawia, ze podana jako argument funkcja, jest wykonywana na każdym elemencie tablicy (na każdym li) Przy czym przekazujemy do środka ten element nadając mu nazwę (w tym wypadku item) Przy wywołaniu funkcji na kzdym elemencie w tym item będzie znajdowało się kolejne il (czyli kolejna pozycja z tablicy)
   items.forEach(item => item.addEventListener("click", addClassRed));
   
   
   // TWORZENIE I DODAWANIE ELEMENTÓW DO STRONY
   
   const divElement = document.createElement('div');
   divElement.textContent = "Ostatni DIV";
   divElement.style.backgroundColor = "red";
   document.body.appendChild(divElement);
   
   
   