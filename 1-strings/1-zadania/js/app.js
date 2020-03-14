// Mamy tekst: Koty to fajne zwierzaki Wypisz w konsoli liczbę wyrazów w tym zdaniu.


function catsAreFun() {
const text = `Koty to fajne zwierzaki`;
let textSplit = "";
textSplit = text.split(" ");
return textSplit.length;
} console.log(catsAreFun());



// Za pomocą funkcji Prompt() pobierz od użytkownika jego imię. Następnie używając odpowiednich funkcji dla stringów wypisz w konsoli to imię tak by było pisane małymi literami a rozpoczynało się od dużej litery np.

// Witaj Piotr!


function hiPeter() {
let name = prompt(`Podaj swoje imię`, `Marian`);
name = name.charAt(0).toUpperCase() + name.slice(1);
console.log(`Witaj ${name}!`);

} hiPeter();


// Mamy zmienną:

// const text = "Ala ma kota";

// Sprawdź czy występuje w niej słowo "kot". Jeżeli tak - wypisz w konsoli "Zdanie zawiera słowo kot", w przeciwnym razie wypisz "Zdanie nie zawiera słowa kot".

function thereIsCat() {
    let text = `Ala ma psa`;
    if (text.includes(`kot`)) {
        console.log(`Zdanie zawiera słowo "kot"`);
    } else {
        console.log(`Zdanie nie zawiera słowa "kot"`);
    }
}thereIsCat()


// Mamy zmienną:

// const text = "Ala ma kota";

// Wypisz ten tekst w konsoli:

//     pisany małymi literami
//     pisany dużymi literami
//     pisany naprzemiennie dużymi i małymi literami
//     za pomocą metody replace() zamień imię Ala na twoje imię i wypisz wynik w konsoli


function upperLower() {
    let text = `Ala ma kota`;
    let textTwo = '';
    console.log(text.toUpperCase());
    console.log(text.toLowerCase());

for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
    textTwo += text[i].toUpperCase();
    } else {
        textTwo += text[i].toLowerCase();
    }
} return textTwo;
}console.log(upperLower());


// Korzystając z obiektu Math stwórz kilka losowych zmiennych z zakresu 10-100000. Możesz skorzystać ze wzoru Math.floor(Math.random()*(max-min+1)+min). Po wygenerowaniu wypisz je w konsoli tak, by wszystkie kończyły się w jednym rzędzie. Przykładowo:

// .........10
// ........102
// ..........1
// .......1002
// ......92020

// Wykorzystaj tutaj funkcję padStart(). Zakładamy, że pojedyncza linia powinna mieć długość 10 znaków.

function numberPadStart(min, max) {
for (let i = 0; i < min; i++) {
const fullNumber = Math.floor(Math.random()*(max-min+1)+min);
const maskedNumber = fullNumber.toString();
    console.log(maskedNumber.padStart(10, "."));
}
 } numberPadStart(10, 100000);



//  Wygeneruj pod zmienną uniqueID tekst będący losowym ciągiem liter i cyfr o długości 20 znaków. Nie narzucam tutaj sposobu rozwiązania.

let alfabet = "1234567890qwertyuiop[]asdfghjkl;zxcvbnm,./QWERTYUIOP{}ASDFGHJKL:ZXCVBNM<>?";

function uniqueIdGenerator(min, max) {  
    let id = "";
    for (let i = 0; i < 20; i++) {   
    let random = Math.floor(Math.random()*(max-min+1)+min);
    id += alfabet[random];
    } 
    return id;
    } 
console.log(uniqueIdGenerator(0, alfabet.length));


// Stwórz zmienną x równą jakiejś wartości liczbowej. Następnie wypisz w konsoli tekst:

// Liczba x * x da w wyniku x*x

// Gdzie w odpowiednie miejsca wstawisz zmienną x i wynik działania.

function printX(x) {
console.log(`Liczba ${x} * ${x} da w wyniku ${x*x}`);
} printX(70);