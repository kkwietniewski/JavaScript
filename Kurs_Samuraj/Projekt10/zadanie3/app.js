const count = () =>{
  let counter = 0;
  return ()=>{
    counter++;
    document.querySelector("h1").textContent= counter+" sekund";
  }
}

const getResult = count();

setInterval(getResult, 1000);