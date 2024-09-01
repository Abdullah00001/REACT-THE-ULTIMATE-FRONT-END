import { useNavigate } from "react-router-dom";

const Post = ({ post, handleDelete }) => {
  const { _id, title, blog_content } = post;
  const navigate = useNavigate();
  const handleShowMore = () => {
    navigate(`/posts/${_id}`);
  };
  const handleEdit = () => {
    console.log(_id);
    navigate(`/posts/Edit/${_id}`)
  };

  return (
    <div className="w-full border-2 rounded-lg border-blue-300 p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{blog_content.slice(0, 100)}...</p>
      <button
        onClick={handleShowMore}
        className="text-blue-500 hover:underline"
      >
        Show More
      </button>
      <button onClick={() => handleDelete(_id)}>Delete</button>
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default Post;
