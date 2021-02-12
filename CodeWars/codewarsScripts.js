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

const numberToString = (num) => num.toString();

function descendingOrder(number) {
    const numbers = [...number.toString().split("")];
    number = "";
    number += numbers.sort().reverse().map(char=>char);
    return parseInt(number.replace(/,/g,""));
}

function alphabetPosition(text){
    //pierwsze rozwiązanie
    
    // let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    // text = text.toLowerCase().replace(/[^a-z]/gm, "").split("");
    // text = text.map(exampleLetter=>{
    //     return alphabet.map((alphLetter, index)=>{
    //         if(alphLetter == exampleLetter) return index+1;
    //     }).join().replace(/,/g,"");
    // }).join().replace(/,/g," ");
    // return text;
    
    //drugie rozwiązanie
    return text.toLowerCase().match(/[a-z]/g).map(char=>char.charCodeAt()-96).join(" ");
}

function makeNegative(num){
    //Moje rozwiązanie
    // return num > 0 ? parseFloat("-"+num) : num;
    // return num > 0 ? -num : num

    //Najlepsze rozwiązanie
    return -Math.abs(num);

}

function longest(s1, s2){
    return s1.concat(s2).split("").sort().filter((char,index,array)=>array.indexOf(char) == index).join("");
    //Najlepsze rozwiązanie
    // return [...new Set(s1+s2)].sort().join("");
}

functionResults.name.push("uniqueInOrder");
functionResults.value.push(uniqueInOrder([1,2,2,3,3]));

functionResults.name.push("numberToString");
functionResults.value.push(numberToString(123));

functionResults.name.push("descendingOrder");
functionResults.value.push(descendingOrder(123456789));

functionResults.name.push("alphabetPosition");
functionResults.value.push(alphabetPosition("The sunset sets at twelve o' clock."));

functionResults.name.push("makeNegative");
functionResults.value.push(makeNegative(-0.12));

functionResults.name.push("longest");
functionResults.value.push(longest("aretheyhere", "yestheyarehere"));

descendingOrder(123456789);
functionResults.name.forEach((result, index)=>{    
    let pName = document.createElement("p");
    let pValue = document.createElement("p");

    pName.textContent = functionResults.name[index];
    pValue.textContent = functionResults.value[index];
    div.appendChild(pName, pValue);
    div.appendChild(pValue);
});
