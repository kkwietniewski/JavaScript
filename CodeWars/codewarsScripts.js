const functionResults = {
    name: [],
    value: []
}

const div = document.querySelector(".functions");
function uniqueInOrder(iterable) {
    // const chars = [];
    // for (let index = 0; index < iterable.length; index++) {
    //     if(iterable[index] !== iterable[index+1]){
    //         const char = iterable[index];
    //         chars.push(char);
    //     }
    // }
    // return chars;
    return [...iterable].filter((char,index)=>char !== iterable[index+1])
}

let numberToString = (num) => num.toString();

function descendingOrder(number) {
    const numbers = [...number.toString().split("")];
    number = "";
    number += numbers.sort().reverse().map(char=>char);
    return parseInt(number.replace(/,/g,""));
}

functionResults.name.push("uniqueInOrder");
functionResults.value.push(uniqueInOrder([1,2,2,3,3]));

functionResults.name.push("numberToString");
functionResults.value.push(numberToString(123));

functionResults.name.push("descendingOrder");
functionResults.value.push(descendingOrder(123456789));

descendingOrder(123456789);
functionResults.name.forEach((result, index)=>{    
    let pName = document.createElement("p");
    let pValue = document.createElement("p");

    pName.textContent = functionResults.name[index];
    pValue.textContent = functionResults.value[index];
    div.appendChild(pName, pValue);
    div.appendChild(pValue);
});
