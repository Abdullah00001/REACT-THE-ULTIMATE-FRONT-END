import { useLoaderData } from "react-router-dom";
import Post from "../components/Post";

const Product = ({ page }) => {
  const loader = useLoaderData();
  console.log(loader);
  return (
    <>
      <h1 className="text-6xl">Its {page} Page</h1>
      <h1>Comments : {loader.length}</h1>
      <div className="w-[1140px] mx-auto grid grid-cols-4 gap-3">
        {loader.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </>
  );
};

export default Product;
