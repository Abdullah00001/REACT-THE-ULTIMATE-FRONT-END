const Sidebar = ({ bookmarks, readingTime }) => {
  return (
    <>
      <div className="w-full p-2 flex flex-col gap-3 bg-slate-300">
        <div className="text-center py-[21px] px-[48px] bg-[#6047EC] w-full">
          Spent time on read : {readingTime} min
        </div>
        <div className="w-full">
          <h1>Bookmarked Blogs : {bookmarks.length}</h1>
          {bookmarks.map((bookmark) => (
            <div className="w-full p-3">
              <h3>{bookmark.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
