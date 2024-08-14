import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Sidebar from "./components/Blogs/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const [time, setTime] = useState(0);
  const handleAddBookmark = (blog) => {
    const isExist = bookmarks.some((bookmark) => bookmark.id === blog.id);
    if (!isExist) {
      setBookmark([...bookmarks, blog]);
    } else {
      alert("Alredy In Bookmark");
    }
  };
  const handleReadingTime = (timeCount) => {
    setTime(time+parseInt(timeCount));
  };

  console.log(bookmarks.length);
  console.log(time);
  return (
    <>
      <Navbar></Navbar>
      <section>
        <div className="w-[1144px] mx-auto mt-4">
          <div className="flex justify-center items-center gap-3">
            <div className="w-[70%]">
              <Blogs
                handleAddBookmark={handleAddBookmark}
                handleReadingTime={handleReadingTime}
              ></Blogs>
            </div>
            <div className="w-[30%]">
              <Sidebar bookmarks={bookmarks} readingTime={time}></Sidebar>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
