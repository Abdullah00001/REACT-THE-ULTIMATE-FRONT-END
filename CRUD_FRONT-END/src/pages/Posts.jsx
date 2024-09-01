import { useLoaderData } from "react-router-dom";
import Post from "../components/Post";
import { useState } from "react";

const Posts = () => {
  const loadedPosts = useLoaderData();
  const [posts, setPosts] = useState(loadedPosts);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/post/remove/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(posts.filter((post) => post._id !== id));
      });
  };

  if (0 < posts.length) {
    return (
      <section>
        <div className="w-[1144px] mx-auto space-y-5">
          <h1 className="text-5xl text-center">Posts</h1>
          <div className="grid grid-cols-4 gap-4 p-4">
            {posts.map((post) => (
              <Post key={post._id} post={post} handleDelete={handleDelete} />
            ))}
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <div className="w-[1144px] mx-auto flex h-[60vh]">
          <h1 className="mt-6 text-5xl">No Posts Found</h1>
        </div>
      </section>
    );
  }
};

export default Posts;
