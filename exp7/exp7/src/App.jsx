import "./App.css"
import Student from "./Student";
function App() {
 return (
<div id= "app">
<h1>Student Information</h1>
<div id= "items">
<Student
name = "Aarohi Gupta"
course = "Computer Science"
marks = "95"/>
<Student
name = "Anita Verma"
course = "Information Technology"
marks = "82"/>
<Student
name = "Rohan Gupta"
course = "Electronics"
marks = "78"/>
</div>
</div>
);
}
export default App;