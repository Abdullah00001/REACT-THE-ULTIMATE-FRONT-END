import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const {_id, title, blog_content } = post;
  const navigate = useNavigate();
  const handleReturn = () => {
    navigate(-1);
  };
  return (
    <>
      <section>
        <div className="w-[1140px] mx-auto">
          <div className="flex justify-center items-center h-[70vh] w-full">
            <div className="w-[800px] p-5">
              <h4
                onClick={handleReturn}
                className="text-right text-red-500 text-lg cursor-pointer mb-10"
              >
                Return
              </h4>
              <h1 className="text-5xl font-bold">{title}</h1>
              <p className="mt-3 text-xl">{blog_content}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetails;
