import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = ({ handleAddBookmark, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/9f4e251c-1317-4fbb-b827-71b50a4f5733")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <div className="w-full p-2 flex flex-col gap-2">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddBookmark={handleAddBookmark}
            handleReadingTime={handleReadingTime}
          ></Blog>
        ))}
      </div>
    </>
  );
};

export default Blogs;
