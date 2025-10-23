const API_URL = "http://localhost:3000/api/students";

let students = [];

async function fetchStudents() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        data.forEach(student => {
            students.push(student);
        })

    } catch (error) {
        console.error(error);
    }
}

const studentsElement = document.getElementById("students");
studentsElement.innerHTML = ``;

function renderStudents() {
  students.forEach(student => {
    studentsElement.innerHTML += `
    <div class="student">
      <p>Student Name: ${student.name}</p>
      <p>Student Age: ${student.age}</p>
      <p>Student Grade: ${student.grade}</p>
      <p>Student Email: ${student.email}</p>
    </div>
    `;
  })
}



fetchStudents()
  .then(() => {
    console.log(students);
  })
  .then(() => {
    renderStudents();
  })
  .catch(error => {
    console.error(error);
});