import Member from './Member';

const Members = () => {
  const softwareEngineers = [
    {
      name: 'Alice Johnson',
      designation: 'Junior Software Engineer',
      salary: 55000,
    },
    {
      name: 'Bob Smith',
      designation: 'Software Engineer',
      salary: 70000,
    },
    {
      name: 'Charlie Brown',
      designation: 'Senior Software Engineer',
      salary: 90000,
    },
    {
      name: 'Dana White',
      designation: 'Lead Software Engineer',
      salary: 110000,
    },
    {
      name: 'Eli Green',
      designation: 'Principal Software Engineer',
      salary: 130000,
    },
  ];
  return (
    <>
      <div className="w-[1000px] mx-auto flex flex-wrap gap-1 mt-7  p-3">
        {softwareEngineers.map((employee) => (
          <Member
            employee_name={employee.name}
            designation={employee.designation}
            salary={employee.salary}
          ></Member>
        ))}
      </div>
    </>
  );
};

export default Members;
