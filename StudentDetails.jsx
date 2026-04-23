function StudentDetails({ students }) {
  return (
    <div>
      <h2>Student Details</h2>

      {students.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} - {student.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StudentDetails;