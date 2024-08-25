import { useEffect, useState } from "react";
import SectionHeadingText from "./SectionHeadingText";
import axios from "axios";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [data, setData] = useState(4);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/Services/")
      .then((response) => setServices(response.data));
  }, []);
  console.log(services);
  const title = "Featured Jobs";
  const subTitle =
    "Explore thousands of job opportunities with all the information you need. Its your future";
  return (
    <section className="mt-[130px]">
      <SectionHeadingText
        title={title}
        subtitle={subTitle}
      ></SectionHeadingText>
      <div className="w-[1320px] mx-auto mt-8">
        <div className="grid grid-cols-2 gap-6 ">
          {services.slice(0, data).map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
        <div
          className={`mt-6 flex justify-center items-center ${
            data === services.length && "hidden"
          }`}
        >
          <button
            onClick={() => setData(services.length)}
            className="text-[20px] font-extrabold py-[19px] px-[28px] bg-gradient-to-l from-[#7E90FE] to-[#9873FF] rounded-lg"
          >
            Show All Data
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
