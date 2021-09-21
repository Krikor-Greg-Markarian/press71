import React from "react";

function Comments(props) {
  return (
    <div>
      <div className="flex pt-4">
        <div className="flex-shrink">
          <div className="iconprofile rounded-full"></div>
        </div>
        <div className="flex-grow w-20">
          <p className="font-bold pl-2">{props.name}</p>
          <p className="text-gray-400 pl-2">{props.seconddate}</p>
        </div>
        <div className="flex-grow">
          <button className="border-2 px-4 text-gray-400">Reply</button>
        </div>
      </div>
      <p className="text-gray-400 text-sm border-b-2 pl-14">
        {props.articlelorem}
      </p>
    </div>
  );
}

export default Comments;
