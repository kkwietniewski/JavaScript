const array = [111,252,39,8,13,100]


//filter - nie modyfikuje tablicy, zwraca wynik do nowej zmiennej
const oddNumbers = array.filter(number=>number%2);
const evenNumbers = array.filter(number=>!(number%2));

//map - nie modyfikuje tablicy, zwraca wynik do nowej zmiennej
const doubleNumbers = array.map(number=>number*2);
const numbersToString = array.map(number=>number+"");

//forEach - modyfikuje tablicę
array.forEach((number, index)=>array[index] = number * 2);

const input = document.querySelector("input");
const ul = document.querySelector("ul");
const fruits = document.querySelectorAll("li");

const searchTask = () =>{
  const searchPhraze = event.target.value.toLowerCase();
  let tasks = [...fruits];
  tasks = tasks.filter(li=>li.textContent.toLowerCase().includes(searchPhraze));
  console.log(tasks);
  ul.textContent = "";
  tasks.forEach(li=>ul.appendChild(li));
}

input.addEventListener("input", searchTask);