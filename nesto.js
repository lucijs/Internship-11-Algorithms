function Pay(j, sum) {
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

const people = [
  { Name: "Lada", LastName: "Tudor", Job: "Profesor", Pay: 1200 },
  { Name: "Jure", LastName: "Cudina", Job: "Profesor", Pay: 1200 },
  { Name: "Tamara", LastName: "Pavlovic", Job: "Profesor", Pay: 1200 },
  { Name: "Ivana", LastName: "F", Job: "Programer", Pay: 1000 },
  { Name: "Mile", LastName: "F", Job: "Programer", Pay: 1400 },
  { Name: "Ana", LastName: "F", Job: "Rukomet", Pay: 200 },
];
const jobs = [];
const sum = people.reduce((acc, value) => value.Pay + acc, 0);
people.forEach((y) => {
  if (!jobs.some((x) => x.Job == y.Job))
    jobs.push({ Job: y.Job, Avg: 0, Employees: [] });
});

jobs.forEach((j) => {
  Pay(j, sum);
});

console.log(jobs);
