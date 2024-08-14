const Member = ({ employee_name, designation, salary }) => {
  return (
    <div className="w-[300px] p-2 border-2 border-yellow-400 rounded-md">
      <h1>Name : {employee_name}</h1>
      <h1>Designation : {designation}</h1>
      <h1>Salary : {salary}</h1>
    </div>
  );
};

export default Member;
