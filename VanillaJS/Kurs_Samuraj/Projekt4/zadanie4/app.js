let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

const changeColor = function(e){
    // console.log(e.keyCode);
    // strzałka w górę 38
    // strzałka w dół 40

    // if(e.keyCode == 38 && red <= 255){
    //     red += 10;
    //     green += 10;
    //     blue += 10;
    // }
    // else if(e.keyCode == 40 && red >= 0){
    //     red -= 10;
    //     green -= 10;
    //     blue -= 10;
    // }
    let h2 = document.querySelector('h2')
    switch (e.keyCode) {
        // case 38:
        //     if(h2 != null){
        //         h2.remove();
        //     }
        //     if(red <= 255 && green <= 255 && blue <= 255){
        //         red += 10;
        //         green += 10;
        //         blue += 10;
        //     }
        //     // console.log(red);
        //     break;

        // case 40:
        //     if(h2 != null){
        //         h2.remove();
        //     }
        //     if(red >= 0 && green >= 0 && blue >= 0){
        //         red -= 10;
        //         green -= 10;
        //         blue -= 10;
        //     }
        //     // console.log(red);
        //     break;
        
        // Najszybszy sposób
        case 38:
            if(h2 != null){
                h2.remove();
            }     

            document.body.style.backgroundColor = `rgb(${red < 255 ? ++red : red},${green < 255 ? ++green : green},${blue < 255 ? ++blue : blue})`;
            console.log(red);
            break;
        case 40:
            if(h2 != null){
                h2.remove();
            }

            document.body.style.backgroundColor = `rgb(${red > 0 ? --red : red},${green > 0 ? --green : green},${blue > 0 ? --blue : blue})`;
            console.log(red);
            break;
        default:
            if(!document.querySelector('h2')){
                h2 = document.createElement('h2');
                h2.textContent = 'Aby zmniejszyć, bądź zwiększyć jasność naciśnij strzałkę w dół lub górę!';
                document.body.appendChild(h2);
            }
            break;
    }

    // document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
};

document.addEventListener('keydown', changeColor);