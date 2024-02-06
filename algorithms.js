//Izaberi broj zadatka
const n = +prompt("Unesi broj zadatka:");
switch (n) {
  case 1:
    Print(Zadatak1());
    break;
  case 2:
    Print(Zadatak2());
    break;
  case 3:
    Print(Zadatak3());
    break;
  case 4:
    Print(Zadatak4());
    break;
  case 5:
    Print(Zadatak5());
    break;
  case 6:
    Print(Zadatak6());
    break;
  case 7:
    Print(Zadatak7());
    break;
  case 8:
    Print(Zadatak8());
    break;
  case 9:
    Print(Zadatak9());
    break;
  case 10:
    Print(Zadatak10());
    break;
  default:
    break;
}

function Print(a) {
  console.log(a);
}

function Print(a, b) {
  console.log(a);
  console.log(b);
}

/*
ZADATAK 1
Korisnik redom upisuje ime, cijenu i boju proizvoda. Nakon unosa se 
pita korisnika želi li nastaviti sa unosom i unosi se  sve dok se 
korisnik ne odbije unos. Zadatak je izračunati prosječnu cijenu i
ispisati proizvod koji najviše odstupa od prosjeka

const produce = [
  { Name: "banana", Price: 1.04, Colour: "yellow" },
  { Name: "apple", Price: 1.06, Colour: "green" },
  { Name: "strawberry", Price: 2, COlour: "red" },
  { Name: "beans", Price: 0.7, Colour: "red" },
];
*/
function Zadatak1() {
  const produce = [];

  do {
    let Name = prompt("Ime");
    if (produce.findIndex((x) => x.Name === Name) !== -1) break;
    let Price = +prompt("Cijena");
    let Colour = prompt("Boja");
    produce.push({ Name, Price, Colour });
    let cont = prompt("Želite li nastavit (da/ne)");
    if (cont != "da") break;
  } while (true);

  const avg =
    produce.reduce((acc, value) => acc + value.Price, 0) / produce.length;

  console.log("Prosječna cijena je: " + avg);

  const p = produce
    .sort((x, y) => -Math.abs(x.Price - avg) + Math.abs(y.Price - avg))
    .pop();

  return avg, p;
}

/*
ZADATAK 2   
Korisnik redom upisuje ime, prezime i zanimanje i plaću osobe. Unos se 
obavlja isto kao u prvom zadatku (tako i u ostalim zadacima ovog tipa). Cilj 
zadatka je izračunati prosjek plaće za svako zanimanje i ispisati sortirano 
objekte gdje piše zanimanje, prosjek i koliko osoba radi to zanimanje.

    const people = [
        {Name:"Lada", LastName:"Tudor", Job:"Profesor", Pay:1200},
        {Name:"Jure", LastName:"Cudina", Job:"Profesor", Pay:1200},
        {Name:"Tamara", LastName:"Pavlovic", Job:"Profesor", Pay:1200},
        {Name:"Ivana", LastName:"F", Job:"Programer", Pay:1000},
        {Name:"Mile", LastName:"F", Job:"Programer", Pay:1400},
        {Name:"Ana", LastName:"F", Job:"Rukomet", Pay:200},
    ];
*/
function Zadatak2() {
  const people = [];
  const jobs = [];
  do {
    let Name = prompt("Ime");
    let LastName = prompt("Prezime");
    let Job = prompt("Zanimanje");
    let Pay = +prompt("Plaća");
    people.push({ Name, LastName, Job, Pay });

    if (!jobs.some((x) => x.Job == Job))
      jobs.push({ Job, Avg: Pay, Employees: 1 });
    else {
      jobs
        .filter((X) => X.Job === Job)
        .map(
          (y) =>
            (y.Avg = (y.Avg * y.Employees + Pay) / (y.Employees + 1)) &&
            (y.Employees = y.Employees + 1)
        );
    }

    let cont = prompt("Želite li nastavit (da/ne)");
    if (cont != "da") break;
  } while (true);

  jobs.sort((x, y) => x.Employees - y.Employees).sort((x, y) => x.Avg - y.Avg);

  return jobs;
}

/*
ZADATAK 3
Isti unos kao u drugom zadatku. Treba izračunati zbroj svih plaća zajedno i ispisati 
objekt u kojem se nalazi ime zanimanja, postotak koliko to zanimanje pridonosi 
ukupnoj plaći, i nizu objekata koji se sastoje od imena osobe i postotak koliko ta 
osoba pridonosi ukupnoj plaći zanimanja
*/
function Pay(j, sum, people) {
  let array = people.filter((x) => x.Job === j.Job);
  let num = array.reduce((acc, value) => value.Pay + acc, 0);
  j.Avg = ((num / sum) * 100).toFixed(2);
  Employees(j, array, num);
}

function Employees(j, array, num) {
  array.forEach((p) => {
    j.Employees.push(p.Name, ((p.Pay / num) * 100).toFixed(2));
  });
}

function Zadatak3() {
  const people = [];
  const jobs = [];
  do {
    let Name = prompt("Ime");
    let LastName = prompt("Prezime");
    let Job = prompt("Zanimanje");
    let Pay = +prompt("Plaća");
    people.push({ Name, LastName, Job, Pay });

    if (!jobs.some((x) => x.Job == Job))
      jobs.push({ Job, Avg: 0, Employees: [] });

    let cont = prompt("Želite li nastavit (da/ne)");
    if (cont != "da") break;
  } while (true);

  const sum = people.reduce((acc, value) => value.Pay + acc, 0);

  jobs.forEach((j) => {
    Pay(j, sum, people);
  });

  return jobs;
}

/*
ZADATAK 4
Unijeti niz voća sa imenom, bojom i kalorijama. Cilj je ispisati 
svo voće sa istom bojom i koliko ukupno kalorija to voće daje. 
Neka se sortira po imenu boje. 
  const fruit = [
    { Name: "banana", Colour: "žuta", Calories: 89 },
    { Name: "jagode", Colour: "red", Calories: 53 },
    { Name: "kruška", Colour: "green", Calories: 57 },
    { Name: "jabuka", Colour: "green", Calories: 95 },
    { Name: "jabuka", Colour: "red", Calories: 125 },
    { Name: "limun", Colour: "yellow", Calories: 29 },
    { Name: "naranče", Colour: "orange", Calories: 47 },
    { Name: "mango", Colour: "yellow", Calories: 60 },
  ];
  */
function Zadatak4() {
  const colour = [];
  const fruit = [];

  do {
    let Name = prompt("Ime");
    let Colour = prompt("Boja");
    let Calories = +prompt("Kalorije");
    fruit.push({ Name, Colour, Calories });
    if (colour.findIndex((val) => val.Colour === Colour) !== -1) {
      colour
        .filter((val) => val.Colour === Colour)
        .map((y) => y.Fruit.push(Name) && (y.Cal = y.Cal + Calories));
    } else colour.push({ Colour: Colour, Cal: Calories, Fruit: [Name] });
    let cont = prompt("Želite li nastavit (da/ne)");
    if (cont != "da") break;
  } while (true);

  colour.sort((x, y) => x.Colour.localeCompare(y.Colour));

  return colour;
}

/*
ZADATAK 5
Korisnik redom upisuje imena, prezimena i bodove sportaša. Cilj je stvoriti 4 
kategorije sportaša po broju bodova (stvorit ih na način da ide 0-25% osobe sa 
maksimum bodova, 25-50%, 50-75%, 75-100%). Cilj je ispisati sportaše svake 
kategorije, sortirane po prezimenu i da su napisani u formatu prezime ime.*/

/*

ZADATAK 6
Upisati ime, cijenu i dostupnost proizvoda. Ispisati indexe svih nedostupnih 
proizvoda i napraviti novi niz sa dostupnim voćem. Sortirati ga po imenu cijeni, 
a ako je ista cijena po imenu voća te ispisati taj niz. Na kraju ispisati koliko 
posto ukupne cijene svih proizvoda doprinosi nedostupno voće */

/*

ZADATAK 7
Isti unos kao u 6. zadatku. Iz niza voća napraviti novi niz gdje svim dostupni 
voćima je boja crvena i svim nedostupnim žuta, sortirati ih po boji pa po imenu i 
ispisati niz.*/

/*
ZADATAK 8
Riješi problem Gaussove dosjetke koristeći petlje i JS ugrađene funkcije nad 
nizovima (zabranjeno korištenje formule). Sami napravite array s prvih 100 prirodnih 
brojeva (bonus points ako napravit bez petlje)*/
function Gauss(n, array) {
  if (n === 1) {
    array.push(1);
    return array.sort((x, y) => x - y);
  } else {
    array.push(n);
    return Gauss(n - 1, array);
  }
}

function Zadatak8() {
  let num = [];
  Gauss(100, num);
  console.log(num);
  return num.reduce((acc, x) => acc + x, 0);
}

/*
ZADATAK 9
Traži unos imena osoba, sortiraj ih i filtriraj da budu imena sa više od 5 slova 
te ih ispiši u csv formatu (comma seperated values)*/

/*
ZADATAK 10
Isti unos kao u četvrtom zadatku. Neka program izračuna najmanje moguće novaca koliko 
treba da se kupi sve boje voća barem jedanput. Ispis je konačna cijena i svi kupljeni 
proizvodi sortirani po količini slova u imenu.*/
