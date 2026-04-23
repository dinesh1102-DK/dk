import ApiCall from "./ApiCall";
import StudentDetails from "./StudentDetails";

function App() {
  return (
    <div>
      <ApiCall>
        {(students) => <StudentDetails students={students} />}
      </ApiCall>
    </div>
  );
}

export default App;