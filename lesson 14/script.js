axios.get("https://649c26020480757192378cd2.mockapi.io/api/v1/Students")
.then(response => {
    let studentContainer = document.querySelector('section')
    studentContainer.classList.add('student-card')
    response.data.forEach(student => {
        let studentDiv = document.createElement('div')
        studentDiv.innerHTML = `
        <img src='${student.image}'>
        <div>
        <input value='${student.id}'></input>
        <p class='name'>${student.name}</p>
        <p class='age'>${student.age}</p>
        <p class='grade'>${student.grade}</p>
        <button onclick='del(this)'>Delete</button>
        </div>
        ` ;
        studentContainer.append(studentDiv)
    });

}).catch(error => {
    console.log(error)
})
function AddStudent(){
    // let StudentNameValue = document.querySelector('#student_name')
    const NewStudents = {
        name: document.getElementById('student_name').value,
        age: document.getElementById('student_age').value,
        grade: document.getElementById('student_grade').value

    }
    axios.post("https://649c26020480757192378cd2.mockapi.io/api/v1/Students",NewStudents).
    then(response => {
        alert('student aded')
        console.log(NewStudents.name)
    })
    .catch(error => {
        console.log(error)
    })
}
function del(btn){
    axios.delete(`https://649c26020480757192378cd2.mockapi.io/api/v1/Students/${btn.parentElement.children[0].value}`)
    .then(response => {
        alert('delete')
    })
    .catch(error => {
        alert(error)
    })
    btn.parentElement.parentElement.style.display = 'none'
}