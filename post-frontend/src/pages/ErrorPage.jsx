import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <p className="text-xl text-gray-700 mt-4">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <button
          onClick={handleGoBack}
          className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
