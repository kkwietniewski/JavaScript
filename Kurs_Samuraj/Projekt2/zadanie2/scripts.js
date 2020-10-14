let size = 0;
let grow = true;
document.body.style.height = "10000px";
const square = document.createElement('div');
document.body.appendChild(square);
square.style.width = "100%";
square.style.position = "fixed";
square.style.left = "0";
square.style.top = "0";
square.style.backgroundColor = "green";
square.style.height = size + "px";

const changeHeight = function(){
    
    if(size >= window.innerHeight/2){
        grow = false;
        square.style.backgroundColor = "red";
    }
    else if (size <= 0)
    {
        grow = true;
        square.style.backgroundColor = "green";
    }
    
    if(grow){
        size += 10;
        square.style.height = size + "px";
    }
    else{
        size -= 10;
        square.style.height = size + "px";
    }
}

window.addEventListener("scroll", changeHeight);