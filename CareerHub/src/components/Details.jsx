const Details = ({ service }) => {
  const {
    company_logo,
    job_title,
    company_name,
    job_type,
    work_type,
    location,
    address,
    salary_range,
    phone,
    email,
    job_description,
    job_responsibility,
    educational_requirement,
    experience,
  } = service;
  return (
    <div className="w-full flex gap-6">
      <div className="w-[60%]">
        <p className="text-[16px] font-medium leading-8">
          <span className="font-extrabold">Job Description:</span>
          {job_description}
        </p>
        <p className="text-[16px] font-medium leading-8 mt-6">
          <span className="font-extrabold">Job Responsibility:</span>
          {job_responsibility}
        </p>
        <h4 className="text-[16px] font-extrabold leading-8 mt-6">
          Educational Requirements:
        </h4>
        <p className="text-[16px] font-medium leading-8">
          {educational_requirement}
        </p>
        <h4 className="text-[16px] font-extrabold leading-8 mt-6">
          Experiences:
        </h4>
        <p className="text-[16px] font-medium leading-8">{experience}</p>
      </div>
      <div className="w-[40%]">
        <div className="bg-gradient-10 py-[30px] pl-[30px] rounded-lg">
          <div>
            <h1>Job Details</h1>
            <hr />
            <h4>Salary:{salary_range} Per Month</h4>
            <h4>Job Title:{job_title}</h4>
          </div>
          <div>
            <h1>Contact Information</h1>
            <hr />
            <h4>Phone:{phone}</h4>
            <h4>Email:{email}</h4>
            <h4>Address:{address}</h4>
          </div>
        </div>
        <button className="w-full bg bg-gradient-to-l from-[#7E90FE] to-[#9873FF] py-[19px] rounded-lg text-[20px] font-extrabold text-white mt-6">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Details;
