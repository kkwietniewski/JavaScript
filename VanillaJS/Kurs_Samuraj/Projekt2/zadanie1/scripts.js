const square = document.createElement('div');
document.body.appendChild(square);

let grow = true;//flaga

let size = 100; //wielkosc kwadratu
square.style.width = size+"px"; // niejawna konwersja number na string "100px", konkatenacja
square.style.height = size+"px";
//maksymalna wielkość kwadratu
//window.innerWidth * 0,5

window.addEventListener("scroll", () =>{
    if(size >= window.innerWidth/2){
        grow = false;
    }
    else if(size <= 100){
        grow = true;
    }

    if(grow == true){
        size += 10;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }
    else{
        size -= 10;
        square.style.width = size + "px";
        square.style.height = size + "px";
    }

});