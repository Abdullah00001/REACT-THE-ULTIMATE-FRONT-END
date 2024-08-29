import React from "react";

const CreatePost = () => {
  const handleCeatePost = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const blog_content = form.blog_content.value;
    const credential = { title, blog_content };
    console.log(credential);
    fetch("http://localhost:5000/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credential),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <section>
      <div className="w-[1144px] mx-auto">
        <div className="flex justify-center items-center h-[80vh] w-full">
          <div className="w-[500px] p-5">
            <h1 className="text-4xl text-center mb-9">
              Lorem ipsum dolor sit.
            </h1>
            <form onSubmit={handleCeatePost} className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="title"
                >
                  Blog Title
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter your blog title"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="content"
                >
                  Blog Content
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="content"
                  name="blog_content"
                  rows="10"
                  placeholder="Write your blog content here"
                />
              </div>

              <button
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
