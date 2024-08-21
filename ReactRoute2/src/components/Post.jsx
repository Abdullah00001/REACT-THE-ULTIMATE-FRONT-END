import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  return (
    <>
      <div className="w-full p-2 border-2 border-black rounded-md">
        <h1 className="text-4xl">{title.slice(0,15)}</h1>
        <Link to={`/Posts/${id}`}>Details</Link>
      </div>
    </>
  );
};

export default Post;
