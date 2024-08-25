import { useLoaderData } from "react-router-dom";
import Details from "../components/Details";

const ServiceDetail = () => {
  const service = useLoaderData();

  console.log(service);
  return (
    <>
      <section className="flex justify-center items-center h-[300px] bg-gradient-10">
        <h1 className="text-[32px] font-extrabold">Job Details</h1>
      </section>
      <section className="my-[130px]">
        <div className="w-[1320px] mx-auto">
          <Details service={service}></Details>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
