const SectionHeadingText = ({ title, subtitle }) => {
  return (
    <>
      <div className="w-[1322px] mx-auto">
        <div className="text-center">
          <h1 className="text-[48px] font-extrabold">{title}</h1>
          <p className="text-[16px] font-medium leading-[26px] mt-4">
            {subtitle}
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionHeadingText;
