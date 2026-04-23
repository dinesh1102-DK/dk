import { useEffect, useState } from "react";

function ApiCall({ children }) {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return children(students);
}

export default ApiCall;