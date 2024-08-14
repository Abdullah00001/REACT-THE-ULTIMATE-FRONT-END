import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="w-[1140px] mx-auto mt-4">
        <div className="bg-img flex justify-center items-center">
          <div>
            <h1 className="font-bold text-[36px] text-white leading-[50px] text-center">
              Discover an exceptional cooking <br /> class tailored for you!
            </h1>
            <h5 className="text-[18px] leading-[30px] text-center text-white mt-6">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding <br /> problems to become an
              exceptionally well world-class Programmer.
            </h5>
            <div className="flex items-center gap-4 mt-10 justify-center">
              <button className="bg-[#0BE58A] px-[32px] py-[18px] rounded-[30px]">
                Explore Now
              </button>
              <button className="px-[32px] py-[18px] rounded-[30px] border-[1px] border-white text-white">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
