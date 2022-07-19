import './App.css';
import React from 'react';

function App() {
  const [students, setStudents] = React.useState([]);
  const [editingStudentId, setEditingStudentId] = React.useState(-1);
  const [newStudentName, setNewStudentName] = React.useState("");
  const [editingName, setEditingName] = React.useState("");

  const addStudent = (newStudentName) => {
    let newStudentsData = [...students, newStudentName];
    setStudents(newStudentsData);
    setNewStudentName("");
  }

  const deleteStudent = (studentId) => {
    let studentsCopy = [...students]
    studentsCopy.splice(parseInt(studentId), 1);
    setStudents(studentsCopy);
  }

  const editStudentName = (studentId, studentName) => {
    let newStudentsData = students;
    newStudentsData[studentId] = studentName;
    setStudents(newStudentsData);
    setEditingStudentId(-1);
    setEditingName("");
  }


  return (
    <div className="App">
      <header className="App-header">
        <input value={newStudentName} onChange={(e) => setNewStudentName(e.target.value)} />
        <button onClick={(e) => addStudent(newStudentName)}>Add</button>
        {students.map((student, index) => 
          <div key={`student_${index}`}>
            <span>{index + 1}</span>
            {editingStudentId == index ? <input onChange={(e) => setEditingName(e.target.value)} /> : <span>{student}</span>}
            {editingStudentId == index ? <button onClick={() => editStudentName(index, editingName)}>Save</button> : <button id={index} onClick={(e) => setEditingStudentId(e.target.id)}>Edit</button>}
            <button id={index} onClick={(e) => deleteStudent(e.target.id)}>Delete</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
