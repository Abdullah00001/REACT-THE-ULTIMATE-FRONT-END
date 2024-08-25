import { useLoaderData } from "react-router-dom";
import Post from "../components/Post";

const Posts = () => {
  const posts = useLoaderData();
  console.log(posts);
  return (
    <>
      <section className="mt-[100px]">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-4 gap-4 w-full p-3">
            {posts.map((post) => (
              <Post key={post.id} post={post}></Post>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
