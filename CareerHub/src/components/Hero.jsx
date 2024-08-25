import hero from "../assets/hero.png";
const Hero = () => {
  return (
    <>
      <section className="pt-[40px] bg-gradient-10">
        <div className="w-[1322px] mx-auto">
          <div className="flex items-center justify-between w-full">
            <div className="w-[50%]">
              <h1 className="text-[80px] font-extrabold leading-[100px]">
                One Step
                <br />
                Closer To Your
                <br />
                <span className="text-[#7E90FE]">Dream Job</span>
              </h1>
              <p className="mt-[24px] text-[18px] font-medium leading-[30px]">
                Explore thousands of job opportunities with all the
                <br />
                information you need. Its your future. Come find it. Manage all
                <br />
                your job application from start to finish.
              </p>
              <button className="mt-[32px] text-[20px] font-extrabold py-[19px] px-[28px] bg-gradient-to-l from-[#7E90FE] to-[#9873FF] rounded-lg">
                Get Started
              </button>
            </div>
            <div className="w-[50%]">
              <div>
                <img className="w-full" src={hero} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
