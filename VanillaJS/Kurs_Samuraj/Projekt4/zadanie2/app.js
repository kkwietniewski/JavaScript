window.addEventListener('click', (event)=>{
    // console.log('click');
    const x = event.clientX;
    const y = event.clientY;
    console.log(x,y)

    const color = getColor(x,y);
    document.body.style.backgroundColor = color;
});


function getColor(x,y){
    if(x %2==0 && y %2==0){
        return 'red';
    }
    else if((x %2==1 && y %2==0) || (x %2==0 && y %2==1)){
        return 'green';
    }
    else{
        return 'blue';
    }
}