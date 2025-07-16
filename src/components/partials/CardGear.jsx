import React from "react";

const CardGear = ({ svg, title }) => {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow text-center">
        <div className="h-16 mb-2 flex items-center justify-center">{svg}</div>
        <p className="font-medium">{title}</p>
      </div>
    </>
  );
};

export default CardGear;
