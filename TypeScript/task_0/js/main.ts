// sa cest linterface qui defini un etudiant avec ses infos de base
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// on cree le premier etudiant Alice qui habite a Paris
const student1: Student = {
  firstName: 'Alice',
  lastName: 'Martin',
  age: 20,
  location: 'Paris',
};

// deuxieme etudiant Bob lui il est a Lyon
const student2: Student = {
  firstName: 'Bob',
  lastName: 'Dupont',
  age: 22,
  location: 'Lyon',
};

// on met les deux etudiants dans un tableau pour pouvoir les parcourir
const studentsList: Student[] = [student1, student2];

// on cree le tableau html qui va aparaitre dans le navigateur
const table: HTMLTableElement = document.createElement('table');
// le tbody cest le corp du tableau ou on va inserer les lignes
const tbody: HTMLTableSectionElement = document.createElement('tbody');

// pour chaque etudiant on lui cree une ligne dans le tableau
studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = tbody.insertRow();
  // premiere case cest le prenom de letudiant
  const cellName: HTMLTableCellElement = row.insertCell(0);
  // deuxieme case cest la ville ou il habite
  const cellLocation: HTMLTableCellElement = row.insertCell(1);
  cellName.textContent = student.firstName;
  cellLocation.textContent = student.location;
});

// on colle le corp dans le tableau puis on met le tableau sur la page
table.appendChild(tbody);
document.body.appendChild(table);
