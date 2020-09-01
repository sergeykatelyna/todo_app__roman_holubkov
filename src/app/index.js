import './assets/styles/main.scss';

const numeral = require('numeral');

// Task 1

const populationCollection = document.querySelectorAll('.list .population');
const totalOutput = document.querySelector('.total-population');
const averageOutput = document.querySelector('.average-population');

const total = [...populationCollection].reduce((totalPopulation, popElement) => {
  const population = popElement.innerText.replaceAll(',', '');

  return totalPopulation + Number(population);
}, 0);

totalOutput.innerText = numeral(total).format('0,0');

const average = total / populationCollection.length;

averageOutput.innerText = numeral(average).format('0,0');

// Task 2

const employeeElements = document.querySelectorAll('li[data-position]');

const dashboard = {
  name: '',
  salary: 0,
  age: 0,
  position: '',
};

const topEmployee = [...employeeElements].reduce((topDashboard, employeeEl) => {
  const { position, salary, age } = employeeEl.dataset;
  const name = employeeEl.innerText;

  const salaryAmount = +salary.replace(/[$,]/g, '');

  if (salaryAmount > topDashboard.salary) {
    return {
      name,
      position,
      salary: salaryAmount,
      age,
    };
  }

  return topDashboard;
}, dashboard);

const honorDesk = {
  name: document.querySelector('.honor-desk #name'),
  position: document.querySelector('.honor-desk #position'),
  salary: document.querySelector('.honor-desk #salary'),
  age: document.querySelector('.honor-desk #age'),
};

honorDesk.name.innerText = `- ${topEmployee.name}`;
honorDesk.position.innerText = `- ${topEmployee.position}`;
honorDesk.salary.innerText = `- ${numeral(topEmployee.salary).format('($0,0)')}`;
honorDesk.age.innerText = `- ${topEmployee.age}`;
