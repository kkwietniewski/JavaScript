const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien mauris, suscipit non vestibulum ac, scelerisque sed odio. In sit amet purus ac massa ultrices euismod. Proin ut ullamcorper nisl, at consectetur sem. Duis sodales velit odio, at rhoncus neque vestibulum nec. Fusce auctor interdum diam. Quisque cursus sagittis risus eget commodo. Aliquam tempor lorem et lobortis convallis. Suspendisse aliquam at sem in vulputate. Integer eleifend neque sit amet laoreet tincidunt. Aenean efficitur mi ante, non varius velit varius a.";

//Parametry
let indexText = 0;
const time = 10;

//Implementacja
const addLetter = ()=>{
  spnText.textContent += text[indexText];
  indexText++;
  if(indexText == text.length) clearInterval(indexTyping);
}

const cursorAnimation = ()=>{
  spnCursor.classList.toggle("active");
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);