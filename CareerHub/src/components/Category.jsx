const Category = ({ category }) => {
  const { jobsAvailable, categoryName, categoryImage } = category;
  return (
    <div className="bg-gradient-5 rounded-lg py-[40px] pl-[40px]">
      <div className="p-[15px] bg-gradient-10 w-[70px] rounded-lg">
        <img src={categoryImage} alt="" />
      </div>
      <div className="mt-[32px]">
        <h1 className="text-[20px] font-extrabold text-[#474747]">
          {categoryName}
        </h1>
        <h5 className="text-[16px] leading-[26px] font-medium mt-2 text-[#A3A3A3]">
          {jobsAvailable} Jobs Available
        </h5>
      </div>
    </div>
  );
};

export default Category;
