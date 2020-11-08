const h1 = document.querySelector('h1');

// Część a i b : 

// const newH1 = document.createElement('h1');
// document.body,addEventListener('mousemove', (event)=>{
//     // dobrze jest wpisać parametr żeby mieć pewność że event zadziała
//     // console.log(event.clientX, event.clientY);
//     h1.textContent = `Ruch myszką od początku okna przeglądarki: ${event.clientX}, ${event.clientY}`; //Client najczęściej stosowany
//     // newH1.textContent = `Ruch myszką od początku dokumentu: ${event.pageX}, ${event.pageY}`;
//     // newH1.style.top = '70%'
//     // document.body.appendChild(newH1);

//     // h1.textContent = `Ekran: ${event.screenX}, ${event.screenY}`;//Wartości od początku ekranu, w przypadku dwóch, wartość pierwszego od lewej będzie dodawana do wartości tego drugiego.
    
//     // Stary zapis z konkatenacją
//     // document.body.style.backgroundColor = 'rgb('+event.clientX / 3 + ',' + event.clientY / 2 + ',' + event.clientX / event.clientY * 20+ ')'; 

//     document.body.style.backgroundColor = `rgb(${event.clientX / 3},${event.clientY / 2},${event.clientX/event.clientY * 20})`
// });

// Część c:

document.body.addEventListener('mousemove', (event)=>{
    const x = event.clientX;
    const y = event.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    h1.textContent = x + ', ' + y;

    const red = x / width * 100;
    const green = y / height * 100;
    const blue = ((x / width * 100)+(y/height * 100)) / 2;

    document.body.style.backgroundColor = `rgb(${red}%,${green}%,${blue}%)`;
});