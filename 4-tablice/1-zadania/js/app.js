// Zadeklaruj tablicę tab z 5 losowymi wyrazami. Wypisz w konsoli tą tablicę i jej długość. Następnie wypisz pierwszy i ostatni element oraz ich długość.

// Robiąc pętlę po powyższej tablicy wypisz każdy element dużymi literami oraz jego długość. Skorzystaj z pętli for, for of i forEach.



function fiveRandomWords(arr) {
    let upperCase = [];
    console.log(arr);
    console.log(arr.length);
    console.log(`${arr[0]} ${arr[0].length}`);
    console.log(`${arr[arr.length-1]} ${arr[arr.length-1].length}`);

for (let i =0; i < arr.length; i++) {
    upperCase.push(arr[i].toUpperCase());
    console.log(`Pętla for: ${upperCase[i]} ${upperCase[i].length}`);
} 
    
for( let el of arr) {
        console.log(`Pętla for of: ${el.toUpperCase()} ${el.length}`);
    }

    arr.forEach(function(el){
        console.log(`Pętla forEach: ${el.toUpperCase()} ${el.length}`);
    })

} fiveRandomWords([`encyclopedia`,`elastic`,`report`,`telescope`,`shooting`])



// Do tabeli z 1 zadania dodaj na końcu i początku po 1 nowym elemencie. Wykorzystaj odpowiednie metody. Po dodaniu elementów wypisz długość tablicy oraz całą tablicę za pomocą console.table()

function addElements(arr) {
    console.log(arr);

    arr.push(`seaweed`);
    console.log(arr);

    arr.unshift(`creation`);
    console.log(arr);

    console.table(arr);
    console.table(arr.length);

} addElements([`encyclopedia`,`elastic`,`report`,`telescope`,`shooting`]);


// Usuń z tablicy 3 element ale tylko wtedy gdy ma ona tyle elementów.

function removeThirdElement(arr) {

    if (arr.length >= 3) {
        arr.splice(2, 1);
        return console.log(arr); 
    } else {
        return console.log(`Tablica jest za krótka`);
    }
} removeThirdElement([`encyclopedia`,`elastic`,`report`,`telescope`,`shooting`]);


// Mamy tablicę:

// const names = [
//     "Marcin",
//     "Ania",
//     "Monika",
//     "Piotrek",
//     "Beata"
// ]

// Posortuj ją i wypisz w konsoli.


function sortNames(arr) {

    arr.sort();
    return arr;

} console.log(sortNames(["Marcin","Ania","Monika","Piotrek","Beata"]));

// const tab = [
//     "xloremipsumdolor",
//     "kloremipsum",
//     "aloremipsumdol",
//     "blor",
//     "cloremipsu",
//     "gloremip",
// ]

// Posortuj ją po długościach kolejnych elementów. Na początku powinien być najkrótszy tekst, na końcu najdłuższy. Następnie napisz, ile liter mają wszystkie elementy razem.


function sortWords(arr) {

    console.log(arr);

    const arr2 = arr.sort(function(a, b) {
        return a.length - b.length;
    }); console.log(arr2);

    let sum = 0;
    for (let el of arr) {
        sum += el.length
    } return `Wszystkie słowa tablicy mają razem ${sum} litery`;

} console.log(sortWords([
        "xloremipsumdolor",
        "kloremipsum",
        "aloremipsumdol",
        "blor",
        "cloremipsu",
        "gloremip",
    ]));


// Mamy tablicę:

// const tabUsers = [
//     {name : "Marcin", age: 14},
//     {name : "Piotr", age: 18},
//     {name : "Agnieszka", age: 13},
//     {name : "Weronika", age: 20}
// ]

// Za pomocą dowolnej pętli wypisz w konsoli imiona użytkowników, którzy są pełnoletni. Dodatkowe - spróbuj zrobić to zadanie także za pomocą odpowiedniej do tego celu funkcji.


function adultUsersNames(array) {
// Pętla for of
console.log(`Pętla for of`);
    for (let el of array) {
        if (el.age >= 18) {
            console.log(`${el.name}`);
        }
    }
   // Pętla forEach
   console.log(`Pętla forEach`);
    array.forEach(function(el){
        if(el.age >=18) {
            console.log(`${el.name}`);
        }
    })
    // Metoda map()
    console.log(`Metoda map()`);
    const adults = array.map(function(el){
        if (el.age>=18) console.log(`${el.name}`);
    })


} adultUsersNames([ {name : "Marcin", age: 14},
                    {name : "Piotr", age: 18},
                    {name : "Agnieszka", age: 13},
                    {name : "Weronika", age: 20}
    ]);


    // Napisz funkcję checkPalindrom(txt), która zwróci true/false w zależności od tego, czy przekazane słowo jest palindromem.


    function checkPalindrom(txt) {

     let palindrom = [...txt].reverse().join('');
     if(txt === palindrom) {
         console.log(`Słowo "${txt}" to palindrom`);
     } else {
         console.log(`Słowo "${txt}" to nie palindrom`);
     }
    } checkPalindrom(`cholera`);



    // Napisz funkcję generateRandomTable(min, max, count), która zwróci tablicę o długości count, w której będą losowe liczby z zakresu min-max. Do losowania liczb wykorzystaj funkcję z poprzedniego zadania. Wynik odpalenia funkcji podstaw po zmienną, a następnie wypisz ją w konsoli. Następnie wypisz w konsoli największą liczbę w tej tablicy.


    function generateRandomTable(min, max, count) {

        let tablica = [];

        for (i = 0; i < count; i++) {
            let randomNumber = Math.floor(Math.random()*(max-min+1)+min);
            tablica.push(randomNumber);
        } console.log(tablica);
        tablica.sort(function(a,b) {
            return b - a;
        }); return console.log(`Największa liczba z tablicy to: %c${tablica[0]}`, "font-size: 15px; font-weight: 600; color: blue");

    } generateRandomTable(1, 50, 10);



//     Stwórz funkcję monthName(nr), która będzie przyjmować tylko jeden atrybut - numer miesiąca. Funkcja powinna sprawdzić czy numer miesiąca jest prawidłowy (1-12). Jeżeli tak jest powinna zwrócić nazwę miesiąca w języku polskim. Wykorzystaj tutaj tablicę.

// Dla przykładu: monthName(10) -> "październik"



function monthName(nr) {

    let months = [
        
        {
        nr: 1, 
        name: `styczneń`,
        numeral: `pierwszy`
    },
    {
        nr: 2, 
        name: `luty`,
        numeral: `drugi`
    },
    {
        nr: 3, 
        name: `marzec`,
        numeral: `trzeci`
    },
    {
        nr: 4, 
        name: `kwiecień`,
        numeral: `czwarty`
    },
    {
        nr: 5, 
        name: `maj`,
        numeral: `piąty`
    },
    {
        nr: 6, 
        name: `czerwiec`,
        numeral: `szósty`
    },
    {
        nr: 7, 
        name: `lipiec`,
        numeral: `siódmy`
    },
    {
        nr: 8, 
        name: `sierpień`,
        numeral: `ósmy`
    },
    {
        nr: 9, 
        name: `wrzesień`,
        numeral: `dziewiąty`
    },
    {
        nr: 10, 
        name: `październik`,
        numeral: `dziesiąty`
    },
    {
        nr: 11, 
        name: `listopad`,
        numeral: `jedenasty`
    },
    {
        nr: 12, 
        name: `grudzień`,
        numeral: `dwunasty`
    },
];


return console.log(`%c ${months[nr-1].numeral.charAt(0).toUpperCase() + months[nr-1].numeral.slice(1)} miesiąc roku to ${months[nr-1].name} `, "font-size: 12px; font-weight: 600; background: #222; color: #bada55");

} monthName(06);