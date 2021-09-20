import React from "react";

function Comments() {
  return (
    <div>
      <div className="flex pt-4">
        <div className="flex-shrink">
          <div className="iconprofile rounded-full "></div>
        </div>
        <div className="flex-grow w-20">
          <p className="font-bold">Rosalina Kelian</p>
          <p className="text-gray-400">24th March 2019</p>
        </div>
        <div className="flex-grow">
          <button className="border-2 px-4 text-gray-400">Reply</button>
        </div>
      </div>
      <p className="text-gray-400 text-sm border-b-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        sapiente.
      </p>
    </div>
  );
}

export default Comments;
