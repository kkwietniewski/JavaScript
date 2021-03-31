const slideList = [{
  img: "images/img1.jpg",
  text: "Pierwszy tekst"
},
{
  img: "images/img2.jpg",
  text: "Drugi tekst"
},
{
  img: "images/img3.jpg",
  text: "Trzeci tekst"
}];

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];


//Interfejs
const time = 4000;
let active = 0;


//Implementacja
const changeDot = ()=>{
  const activeDot = dots.findIndex(dot => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
}

const changeSlide = ()=>{
  active++;
  if(active === slideList.length){
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;

  changeDot();
}

let timeId = setInterval(changeSlide, time);

/////////////////////////////////////////////////
//Rozwiązanie z kursu
// const keyChangeSlide = (e)=>{
//   if(e.keyCode == 37 || e.keyCode == 39){
//     clearInterval(timeId);
//     e.keyCode == 37 ? active -- : active++;

//     if(active == slideList.length){
//       active = 0;
//     }else if(active < 0){
//       active = slideList.length-1;
//     }

//     image.src = slideList[active].img;
//     h1.textContent = slideList[active].text;

//     changeDot();
//     timeId = setInterval(changeSlide, time);
//   }
// }
/////////////////////////////////////////////////

function keyChangeSlide(event){
  let isClick = false;
  if(event.keyCode === 37){
    clearInterval(timeId);
    active--;
    if(active < 0){
      active = slideList.length-1;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;

    changeDot();
    isClick = true;
  }else if(event.keyCode === 39){
    clearInterval(timeId);
    changeSlide();
    isClick = true;
  }

  if(isClick == true){
    isClick = false;
    timeId = setInterval(changeSlide, time);
  }
}

window.addEventListener("keydown", keyChangeSlide);