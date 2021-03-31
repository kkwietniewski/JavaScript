const span = document.querySelector(".clock span");

const getTime = ()=>{

  const time = new Date();
  
  //Przykładowe metody
  // console.log(time.toLocaleString()); // data i godzina
  // console.log(time.toLocaleDateString()); // data
  
  const seconds = time.getSeconds() < 10 ? "0"+time.getSeconds() : time.getSeconds();
  const minutes = time.getMinutes() < 10 ? "0"+time.getMinutes() : time.getMinutes();
  const hours = time.getHours() < 10 ? "0"+time.getHours() : time.getHours();
  
  span.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(getTime, 1000);