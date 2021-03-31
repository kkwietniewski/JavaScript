// WARTOŚCI DOMYŚLNE W FUNKCJI (ES6)

// jeśli nie podamy argumentu na etapie wywołania to funckja weźmie argumenty domyślne

// Tworzenie funkcji z pomocą fat arrow
const addTwoNumbers = (x = 0, y = 0) => {
    const result = x + y;
    console.log(result);
    return result;
   }
   
   
   // Deklaracja funkcji (to samo ale inny sposób tworzenie) 
   // const addTwoNumbers = function(x = 0, y = 0) {
   //  const result = x + y;
   //  console.log(result);
   //  return result;
   // }
   
   // Bez wartości domyślnych gdybyśmy nie podali argumentów otrzymalibyśmy undefined w miejscu ich wykorzystania.
   
   
   /* ---------------------------------------- */
   
   
   // CALLBACK
   // Funkcja wywołania zwrotnego, czyli funkcja, przekazania jako argument do funkcji, i wywołana w niej.
   // Funkcja do której przekazujemy inną funkcję (czyli nasz callback) nazywa sie funkcją wyższego rzędu.
   
   //1. Przykład callback
   
//    function count(x, callback) {
//     return callback(x)
//    }
   
//    function addOne(item) {
//     item++
//     console.log(item);
//     return item;
//    }
   
//    function subtractOne(number) {
//     number--
//     console.log(number);
//     return number;
//    }
   
//    const result = count(5, addOne)
    // count(5, addOne)

    function callbackFunction(x, useFunction){
        return useFunction(x);
    }

    function FirstLettertoUpper(str){
        const UpperFirstLetter = str.charAt(0).toUpperCase() + str.slice(1);
        return UpperFirstLetter;
    }

    // const result = callbackFunction("magda", FirstLettertoUpper);

   
   // 2. Przykład callback
   
//    const showClick = function() {
//     console.log("click")
//    }
    function showClick(){
        return console.log("Click");
    }
   
   document.body.addEventListener("click", showClick)
   
   
   //3. Przykład callback
   
   const showTime = () => {
    console.log("minęły 2 sekundy")
   }
   // setInterval(showTime, 2000)
   
   
   //4. Przykład callback
   
   const usersAge = [20, 30, 21, 17, 67, 96, 55];
   
//    usersAge.forEach(userAge => console.log(`Wiek użytkownika to ${userAge}`));
//    usersAge.forEach(function(userAge) { console.log("Wiek użytkownika to " + userAge); });
   
   
   /* ----------------------------------------- */
   
   // ARGUMENTS - być może nie będziesz tak często używała, ale  wiedz, że jest coś takiego jak obiekt arguments (podobny do tablicy, ale to nie jest tablica), który zawiera aktualną listę argumentów przekazanych do tablicy.
   
   const showArguments = function() {
    console.log(arguments); //arguments - nazwa dla obiektu (nazwa przypisana)
    console.log(arguments.length); //długość - ile argumentów przekazaliśmy
    console.log(arguments[0]); //odwołanie do konkretnego argumentu
    console.log(typeof arguments); //obiekt (tablicopodobny). Ma właściwość length, można odwołać się za pomocą notacji tablicowej np. arguments[2]. Nie ma metod znanych z tablicy
    console.log(Array.isArray(arguments));
   }
   
//    showArguments("5", null, {})
   
   // Wykorzystanie w praktyce
   
   const addAllNumbers = function() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
     result += arguments[i];
    }
    return result;
   }
   
   const usersMoney = addAllNumbers(3, 2, 200, 1, 3, 32, 213);
   // console.log(addAllNumbers(19, 11.1, 20, -32));
   
   
   /* ---------------------------------------- */
   
   // Jak sprawić by funkcja zachowywała się inaczej przy różnych argumentach
   
   function showInfoAboutUser(age, name, sex) {
    if (arguments.length === 0) {
     console.log('nie mam żadnych informacji o tym użytkowniku');
    } else if (arguments.length === 1) {
     console.log("Użytkownik ma " + age + " lat. Nic więcej nie wiemy");
    } else if (arguments.length === 2) {
     console.log(`Użytkownik ma ${age} lat i ma na imię ${name}`);
    } else {
     console.log(`Użytkownik ma ${age} lat i ma na imię ${name} i jest ${sex}`);
    }
   }
   
   
// Operator rest (ES6) - wiele elementów podanych jako argumenty do jednej tablicy
//...nazwa (dowolna zgodnie z zasadami dla zmiennej)
// zwraca tablicę (arguments nie jest tablicą)

function showAllArguments(...items) {
    console.log(items);
    // console.log(arguments[5]);
    return items;
   }
//    showAllArguments("1", 2, 12, "ab", true, "Adam")
   
   function addAllWords(...words) {
    let txt = "";
    // for (let i = 0; i < words.length; i++) {
    //  // txt += words[i] + "-";
    //  txt += `${words[i]}-`;
    // }
   
    // words.forEach(function(word) {
    //  // txt += word + "-";
    //  txt += `${word}-`
    // })
   
    words.forEach(word => txt += `${word}${word == words[words.length-1] ? ".": "-"}`)
   
    console.log(txt);
   }
   // addAllWords()
   addAllWords("ja", "ty", 2, "Gdańsk","aaa","Bgag")
   
   // dzięki operatorowi rest możemy zbierać pozostałe argumenty (które zostaly umieszczone poza paramterami)
   
   function showUsers(owner, ...others) {
    console.log(`Na imprezie był ${owner} ${others.length ? "oraz " + others + "." : "."}`)
   }
   
   // showUsers("Adrian");
   // showUsers("Adrian", "Jadzia", "Staszek", "Henio");
   
   
   /* ---------------------------------------- */
   
   // METODY A FUNKCJE
   // Metody to funkcje umieszczone w obiektach (poznamy w przyszłości). 
   
   const objectExample = {
    name: "Adam",
    showName: function() {
     console.log("Jan")
    },
    showAge() {
     console.log(30);
    }
   }
   
   // objectExample.showName();
   // objectExample.showAge();
   
   const showName = function() {
    console.log("Jan")
   }
   
   // showName();