import { FaBookmark } from "react-icons/fa6";
const Blog = ({ blog, handleAddBookmark, handleReadingTime }) => {
  console.log(blog);
  const {
    author_name,
    author_image,
    title,
    cover_img,
    created_date,
    reading_time,
    categories,
    id,
  } = blog;
  console.log(cover_img);
  return (
    <>
      <div className="w-full mt-[40px]">
        <div>
          <img className="w-full rounded-lg" src={cover_img} alt="" />
        </div>
        <div className="flex justify-between items-center w-full mt-8">
          <div className="flex justify-between items-center gap-6">
            <div>
              <img className="w-[60px]" src={author_image} alt="" />
            </div>
            <div>
              <h1>{author_name}</h1>
              <p>{created_date}</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <h4>Reading Time : {reading_time}</h4>
            <p
              className="cursor-pointer"
              onClick={() => handleAddBookmark(blog)}
            >
              <FaBookmark />
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-[40px] font-bold leading-[160%]">{title}</h1>
          <div className="flex items-center gap-2 mt-4">
            {categories.map((category) => (
              <p>#{category}</p>
            ))}
          </div>
          <h3
            className="font-semibold mt-5 cursor-pointer"
            onClick={() => handleReadingTime(reading_time)}
          >
            Mark As Read
          </h3>
        </div>
      </div>
    </>
  );
};

export default Blog;
