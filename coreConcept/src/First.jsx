const First = (props) => {
  const { device, brand, model, serise } = props;
  return (
    <>
      <div className="w-[400px] border-2 border-red-500 p-5 rounded-md">
        <h1>Device:{device}</h1>
        <h1>Model:{model}</h1>
        <h1>Brand:{brand}</h1>
        <h1>Serise:{serise}</h1>
      </div>
    </>
  );
};

export default First;
