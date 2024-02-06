//Izaberi broj zadatka
const n = +prompt("Unesi broj zadatka:");
switch (n) {
  case 1:
    Zadatak1();
    break;
  case 2:
    Zadatak2();
    break;
  case 3:
    Zadatak3();
    break;
  case 4:
    Zadatak4();
    break;
  case 5:
    Zadatak5();
    break;
  case 6:
    Zadatak6();
    break;
  case 7:
    Zadatak7();
    break;
  case 8:
    Zadatak8();
    break;
  case 9:
    Zadatak9();
    break;
  case 10:
    Zadatak10();
    break;
  default:
    break;
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

  console.log(p);
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

  console.log(jobs);
}

/*
ZADATAK 3
Isti unos kao u drugom zadatku. Treba izračunati zbroj svih plaća zajedno i ispisati 
objekt u kojem se nalazi ime zanimanja, postotak koliko to zanimanje pridonosi 
ukupnoj plaći, i nizu objekata koji se sastoje od imena osobe i postotak koliko ta 
osoba pridonosi ukupnoj plaći zanimanja
*/
function Pay(j) {
  let array = people.filter((x) => x.Job === j.Job);
  let num = array.reduce((acc, value) => value.Pay + acc, 0);
  j.Avg = ((num / sum) * 100).toFixed(2);
  Employees(j, array);
}

function Employees(j, array) {
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

  jobs.forEach((j) => {
    Pay(j, sum);
  });

  console.log(jobs);
}
