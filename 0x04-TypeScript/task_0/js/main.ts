interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
};

let student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "New York",
};

let student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    location: "New York",
};

let studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement("table");
table.border = "1";

const thead: HTMLTableSectionElement = table.createTHead();
const headerRow: HTMLTableRowElement = thead.insertRow();
const headercell1: HTMLTableCellElement = headerRow.insertCell();
headercell1.textContent = "First Name";

const headercell2: HTMLTableCellElement = headerRow.insertCell();
headercell2.textContent = "Location";

const tbody: HTMLTableSectionElement = table.createTBody();

studentsList.forEach((student) => {
    const row: HTMLTableRowElement = tbody.insertRow();
    const firstcell: HTMLTableCellElement = row.insertCell();
    firstcell.textContent = student.firstName;
    const secondcell: HTMLTableCellElement = row.insertCell();
    secondcell.textContent = student.location;
});

document.body.appendChild(table);