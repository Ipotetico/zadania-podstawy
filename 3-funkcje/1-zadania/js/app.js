// Napisz funkcję, która przyjmie jeden parametr - dowolny tekst.

// Funkcja niech ZWRACA tekst Liczba liter: .... gdzie .... to liczba liter tekstu. Wynik jej użycia wypisz w konsoli za pomocą console.info()

function letterNumber(txt) {

    let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada accumsan purus. Etiam convallis magna eu augue facilisis porta. Quisque ut euismod odio. Praesent quis ligula ultricies metus ornare imperdiet sit amet quis purus. Nulla facilisis, ligula pretium tincidunt volutpat, arcu nisi dapibus erat, eu pulvinar libero risus sed odio. Sed sollicitudin lobortis dolor, sed consequat lectus euismod eu. Nullam id ligula vel velit fringilla pulvinar. Nunc semper velit eu velit blandit sagittis. Aenean sollicitudin feugiat sapien id viverra. Duis et dolor tortor. Nulla sollicitudin lacinia leo a sagittis. Vestibulum sed efficitur nibh, a tincidunt ante. Aenean tempor auctor fringilla. Quisque felis eros, consectetur scelerisque tortor eu, tincidunt accumsan lacus. In eleifend nisi et fringilla facilisis. Donec dui lorem, pulvinar quis convallis ut, efficitur a metus."

    return `Liczba liter: ${text.length}`

} console.info(letterNumber());


// Napisz funkcje, która zsumuje przekazaną do niej tablicę i zwraca jej sumę. Stwórz dowolną tablicę, a następnie przekaż ją do tej funkcji i wynik wypisz w konsoli.

function arrayResult(array) {
    let sum = 0;
    for (let el of array) {
        sum += el;
    } return sum;
} console.log(arrayResult([1,2,3,4,5,6,7]));


// Napisz funkcję, która przyjmie dowolny tekst. Funkcja niech zwraca tekst, który ma zmiksowana wielkość liter np:

// input -> Ala ma kota
// output -> AlA Ma kOtA

// Dla ułatwienia spacje liczmy jako literę.


function mixedLetters(txt) {
let text = `Ala ma kota`;
let textUpper = ``;
for (let i = 0; i < text.length; i++) {
    if (i % 2 === 0) {
        textUpper += text[i].toUpperCase();
    } else {
        textUpper += text[i].toLowerCase();
    }
} return textUpper;
} console.log(mixedLetters());




// Napisz funkcje, która będzie wymagać 2 atrybutów. Funkcja niech sprawdza, czy oba atrybuty są liczbami. Funkcja ma zwracać iloczyn (*) obu liczb. Jeżeli któryś z atrybutów nie jest liczba, funkcja niech zwraca false.


function isNumber(a, b) {
    if (typeof a === 'number' && typeof b === 'number')
        return a * b;
         else return false;

} console.log(isNumber(5, null));


// Napisz funkcje, która przyjmuje 2 parametry:

//     imię - np: Ala
//     miesiac - np: styczen

// Funkcja ma zwracac:

//     jezeli miesiac to grudzien, styczen, luty: "Ala jezdzi na sankach"
//     jezeli miesiac to marzec, kwiecien, maj: "Ala chodzi po kaluzach"
//     jezeli miesiac to czerwiec, lipiec, sierpien: "Ala sie opala"
//     jezeli miesiac to wrzesien, pazdziernik, listopad: "Ala zbiera liscie"

// Wywołaj funkcje przekazując do niej zmienne: twoje imię i dowolny miesiąc.

// Dopisz w funkcji zabezpieczenie, które pozwoli wpisać miesiac małymi lub dużymi literami. Jeżeli miesiac jest "innym słowem", funkcja niech zwraca "Ala uczy się JS"


function whatAlaDoes(name, month) {
switch(month) {
    case 'grudzień': return `${name} jeździ na saneczkach`;
    case 'styczeń': return `${name} jeździ na saneczkach`;
    case 'luty': return `${name} jeździ na saneczkach`;
    case 'marzec': return `${name} chodzi po kałzach`;
    case 'kwiecień': return `${name} chodzi po kałzach`;
    case 'maj': return `${name} chodzi po kałzach`;
    case 'czerwiec': return `${name} się opala`;
    case 'lipiec': return `${name} się opala`;
    case 'sierpień': return `${name} się opala`;
    case 'wrzesień': return `${name} zbiera liście`;
    case 'październik': return `${name} zbiera liście`;
    case 'listopad': return `${name} zbiera liście`;
    default: return `${name} uczy się Javascriptu`;
}
} console.log(whatAlaDoes(`Marcin`,`kwazar`));


// Mamy przykładowy tekst:

// const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";

// Napisz funkcję, która przyjmie 2 atrybuty:

//     tekst
//     znak rozdziału (np. |)

// Skorzystaj z odpowiedniej metody, tak aby rozdzielić przekazany do funkcji tekst na części za pomocą przekazanego znaku rozdziału. W wyniku rozdzielenia powinieneś dostać tablicę. Funkcja niech posegreguje tą tablicę alfabetycznie. Następnie funkcja niech połączy tą tablicę w nowy tekst wstawiając między imiona znak wcześniejszego rozdziału. Skorzystaj tutaj z innej odpowiedniej metody js.

// input -> "Ania|Marcin|Bartek" output -> "Ania|Bartek|Marcin"

// Wywołaj tę funkcję przekazując do niej str z początku zadania


function arrayOfNames (list, sign) {
console.log(list);
let names = list.split(sign);
console.log(names);
let sortNames = names.sort(); 
console.log(sortNames);
let joinedNames = sortNames.join(sign)
console.log(joinedNames);
} arrayOfNames("Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka", '|');


// Napisz 2 funkcje. Każda z nich niech przyjmuje tablicę imion.

// Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane dużymi literami. Druga funkcja niech zwraca nową tablicę, w której imiona mają zmienną wielkość liter.

// input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
// output1 -> ["ANIA" , "MARCIN" , "BARTEK" , "PIOTR"]
// output2 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]


function namesUpperCase(list) {

    let joined = list.join();
    console.log(joined);
    let upperCase = joined.toUpperCase();
    console.log(upperCase);
    let backToArray = upperCase.split(`,`)
    console.log(backToArray);

} namesUpperCase(["Ania" , "Marcin" , "Bartek" , "Piotr"]);


function mixedLettersNames(list) {

    let joined = list.join();
    console.log(joined);
    let mixedLetters = "";
    for (let i = 0; i < joined.length; i++) {
        if (i % 2 === 0) {
            mixedLetters += joined[i].toUpperCase();
        }else {
            mixedLetters += joined[i].toLowerCase();
        } 
    }let backToArray = mixedLetters.split(`,`)
    console.log(backToArray);

} mixedLettersNames(["Ania" , "Marcin" , "Bartek" , "Piotr"]);


// Napisz funkcję checkFemale, która sprawdza przekazane do niej imię. Zróbmy proste teoretyczne założenie, że jeżeli imię kończy się literą "a" to jest to żeńskie imię, w przeciwnym wypadku męskie. Funkcja powinna wracać true jeżeli imię jest żeńskie i false jeżeli jest męskie. Przykładowo:

// checkFemale("Ania") === true
// checkFemale("Marcin") === false


function cheqFemale(name) {

    for (let el of name) {
        if (name.charAt(name.length-1) === 'a') return true;
        else return false;
    } 
} console.log(cheqFemale('Marcin'));


// Napisz funkcję countWomanInTable(arr), do której przekażesz tablicę userów, którą masz poniżej. Funkcja powinna sprawdzić każdego użytkownika w tablicy i zwrócić ile jest kobiet. Wykorzystaj tutaj funkcję z poprzedniego zadania. Jak pobrać imię z usera? Możesz to osiągnąć za pomocą metody split(). Podziel string na 2 części - uzyskasz tablicę 2 elementów. Pierwszy to imię, drugi to nazwisko

const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Beata Lecka",
    "Katarzyna Melecka"
]

function countWomanInTable(arr) {
    let separated = [];
    let names = [];
    let joined = [];
    let females = [];

// dzielę userów na oddzielne tablice

    for (let el of users) {
         separated.push(el.split(" "));

    } console.log(separated);

    // oddzielam imiona od nazwisk

    for (let el of separated) {
        names.push(el.splice(0,1));

        // łączę w jedna tablicę

        joined = names.flat();
    } console.log(joined);

// sprawdzam ostatnia literę

    for (let el of joined) {
        if (el.charAt(el.length-1) === 'a') {
            females.push(el);
        }
    } console.log(females);
return females.length;

} console.log(countWomanInTable(users)) ;