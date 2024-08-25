import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const post = useLoaderData();
  const {
    post_title,
    post_description,
    post_categorys,
    publish_date,
    author_name,
  } = post;
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="max-w-screen-lg mx-auto p-6 mt-10">
      {/* Post Title */}
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post_title}</h1>

      {/* Post Metadata */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-gray-500 mb-8">
        <div>
          <span className="block md:inline">
            Published on:{" "}
            <span className="text-gray-800">
              {new Date(publish_date).toLocaleDateString()}
            </span>
          </span>
          <span className="hidden md:inline mx-2">|</span>
          <span className="block md:inline">
            Author: <span className="text-gray-800">{author_name}</span>
          </span>
        </div>
        <div className="mt-3 md:mt-0 flex items-center gap-2 justify-start">
          {post_categorys.map((category) => (
            <span className="bg-blue-200 text-blue-700 py-1 px-3 rounded-full text-sm">
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Post Description */}
      <div className="prose prose-lg text-gray-700 mb-8">
        <p>{post_description}</p>
      </div>

      {/* Back Button */}
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={handleGoBack}
        >
          Back to Posts
        </button>
      </div>
    </div>
  );
};

export default PostDetail;
