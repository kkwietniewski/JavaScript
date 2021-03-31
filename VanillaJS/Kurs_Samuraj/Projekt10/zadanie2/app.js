const user = (name = "", age) =>{
  let userName = name;
  let userAge = age;

  function showName(){
    console.log(`Cześć ${userName}, ${userAge >= 18 ? 'Mozesz kupić piwo': 'Nie możesz kupić piwa!' }`);
  }

  return showName;
}

const mieszko = user("Mieszko", 20);
const pawel = user("Paweł", 16);
const noName = user();

mieszko();
pawel();
noName();