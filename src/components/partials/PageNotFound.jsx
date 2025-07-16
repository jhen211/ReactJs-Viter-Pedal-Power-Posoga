import React from "react";

const PageNotFound = () => {
  return (
    <>
      <div className="container mx-auto p-10 text-center mt-60 bg-slate-950">
        <div className="bg-red-800 p-10 shadow-2xl">
          <h1 className="text-5xl font-bold text-red-950">
            404 - Page Not Found
          </h1>
          <p className="text-7xl mt-5">💀⚠️</p>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
