import { useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const {
    id,
    post_title,
    post_description,
    post_categorys,
    publish_date,
    author_name,
  } = post;
  const navigate = useNavigate();
  const handleReadMore = () => {
    navigate(`/Posts/${id}`);
  };
  return (
    <div className="w-full p-3 shadow-xl rounded-lg">
      <h1 className="text-xl font-extrabold">{post_title}</h1>
      <h5 className="text-lg font-bold leading-7">By {author_name}</h5>
      <div className="flex items-center justify-start gap-2 mt-2 flex-wrap">
        {post_categorys.map((category) => (
          <p className=" text-[16px] font-medium underline">{category}</p>
        ))}
      </div>
      <p className="text-[16px] leading-6">{publish_date}</p>
      <button
        onClick={handleReadMore}
        className="px-3 py-2 bg-orange-400 rounded-xl font-extrabold text-md"
      >
        Read More
      </button>
    </div>
  );
};

export default Post;
