// Za pomocą pętli wypisz w konsoli tekst 12345678910

function printToTen() {
    let text = "";
for (let i = 1; i <=10; i++) {
    text += i.toString();
} return text;
} console.log(printToTen()); 


// Stwórz zmienną n, pod którą postawisz jakąś liczbę całkowitą z przedziału 1-10 oraz dodatkową zmienną txt, która będzie zawierać jakiś tekst np. kot.

// Sprawdź czy liczba n jest dodatnia. Jeżeli jest wypisz w konsoli tekst, który będzie powtórzeniem n razy tekstu ze zmiennej txt. Przykładowo:

// input -> "kot";
// n -> 3
// wynik -> "kotkotkot";

// Powtórzenie tekstu wygeneruj za pomocą pętli. Po uzyskaniu efektu, powtórzenie wygeneruj za pomocą metody repeat() dla stringów.

function catCat(n, txt) {
if (n > 0) {
    for (let i = 0; i < n; i++) {
        console.log(txt);
    }
   console.log(txt.repeat(n)); 
} else {
    console.log(`Podaj liczbę większą od 0`);
}
} catCat(3, `kot`);


// Wygeneruj i wypisz w konsoli tekst:

// ╔═══════════════════════╗
// ║  To jest jakiś tekst  ║
// ╚═══════════════════════╝

// Tekst w ramce powinien być postawiony pod zmienną, tak by łatwo można było go zmienić. Narożniki wygeneruj po prostu kopiując odpowiedni znaki z powyższego przykładu. Uwaga. Do powtarzania tekstu możesz skorzytać z metody

// Rozbuduj to zadanie tak, by tekst był podawany przez użytkownika za pomocą Prompt(). Jeżeli tekst jest dłuższy od 20 znaków, wyświetl tylko 20 i pokaż .... Przycięcie możesz dokonać za pomocą Slice()

function textInFrame() {
let text = prompt(`Podaj swój tekst`, `abc`);
if (text.length >= 20) {
    text = text.slice(0,18) + `...`
}

for (let i = 0; i < 3; i++) {
    if (i == 0) {
        console.log(`╔═══════════════════════╗`);
        if (i = 1) {
            console.log(`║ ${text} ║`);
            if (i = 2) {
                console.log(`╚═══════════════════════╝`);
            }
        }
    }
}
} textInFrame();


// Zrób losowanie 10 liczb z przedziału 1-10. Wypisz je w konsoli. Jeżeli przynajmniej połowa z nich jest większa niż 5, wtedy w konsoli wypisz tekst udało się, w przeciwnym razie wypisz w konsoli tekst niestety nie tym razem.


function biggerThanFive(min, max) {
    let array = [];
    let arrayOne = [];
for (let i = 0; i < max; i++) {
    let random = Math.floor(Math.random()*(max-min+1)+min);
    array.push(random);
}  console.log(array);
for (let el of array) {
    if (el > 5) {
        arrayOne.push(el);
    }  
} 
if (arrayOne.length > 5) {
    console.log(`Udało się!`);
} else {
    console.log(`Niestety nie tym razem`);
} console.log(arrayOne);
} biggerThanFive(1, 10);


// Za pomocą pętli wygeneruj poniższy tekst:

// 01-2--3---4----5-----6------7-------

// Zadanie wykonaj dla zmiennej równej n=7

function numbersAndDashes(n) {
    let text = '';
    for (let i = 0; i <= n; i++) {
    text += i.toString();
    for (let j = 0; j < i; j++) {
    text += `-`;
}
}   return text;
}   console.log(numbersAndDashes(7));


// Mamy dwie zmienne:

// const min = 1;
// const max = 1000;

// Za pomocą prompt() pobierz od użytkownika liczbę z przedziału min-max. Pamiętaj, że prompt() zwraca zawsze tekst, więc skonwertuj ją na liczbę.

// Robiąc pętlę while generuj losową liczbę z przedziału min-max. Wypisz w konsoli ile wykonało się iteracji, aż wylosowana liczba była równa tej, którą podał użytkownik.

function randomEqual(min, max) {
    let counter = 0;
let number = prompt(`Podaj liczbę z przedziału od 1 do 5`, `0`);
number = parseInt(number);
let random = 0;

while (number !== random) {
    console.log(`Dokonało się ${++counter} iteracji`);
    random = Math.floor(Math.random()*(max-min+1)+min);
} 
}
randomEqual(1, 5);