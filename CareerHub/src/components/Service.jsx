import { FaLocationDot, FaDollarSign } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Service = ({ service }) => {
  const {
    id,
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
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`Services/${id}`);
  };
  return (
    <div className="shadow-xl py-10 pl-10 rounded-2xl">
      <div className="w-[10%]">
        <img src={company_logo} alt="" />
      </div>
      <div className="mt-8">
        <h1 className="text-[24px] font-extrabold">{job_title}</h1>
        <h3 className="text-[20px] font-semibold mt-2">{company_name}</h3>
        <div className="flex items-center gap-4 mt-4">
          <div className="py-[9px] px-[19px] rounded-[4px] border-2 border-[#7E90FE] text-[#7E90FE] font-extrabold text-[16px]">
            {job_type}
          </div>
          <div className="py-[9px] px-[19px] rounded-[4px] border-2 border-[#7E90FE] text-[#7E90FE] font-extrabold text-[16px]">
            {work_type}
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <div className="flex items-center gap-2 text-[20px] font-semibold">
            <FaLocationDot />
            <p>{location}</p>
          </div>
          <div className="flex items-center gap-2 text-[20px] font-semibold">
            <FaDollarSign />
            <p>{salary_range}</p>
          </div>
        </div>
        <button
          onClick={handleDetails}
          className="mt-6 py-[11px] px-[18px] bg-gradient-to-l from-[#7E90FE] to-[#9873FF] text-white text-[20px] font-extrabold rounded"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Service;
