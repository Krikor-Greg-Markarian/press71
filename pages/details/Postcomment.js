import React from "react";

function Postcomment() {
  return (
    
      <div className="container mx-auto">
        <div className="bg-white p-6">
          <div className="mt-1 p-3 w-full">
            <textarea
              rows="3"
              className="border p-2 rounded w-full"
              placeholder="Write something..."
            ></textarea>
          </div>
          <div className="mt-1 p-3 w-full">
            <textarea
              rows="1"
              className="border p-2 rounded w-full"
              placeholder="Type Your name..."
            ></textarea>
          </div>
          <div className="mt-1 p-3 w-full">
            <textarea
              rows="1"
              className="border p-2 rounded w-full"
              placeholder="Type Your email..."
            ></textarea>
          </div>
          <div className="mt-1 p-3 w-full">
            <textarea
              rows="1"
              className="border p-2 rounded w-full"
              placeholder="Type Your website..."
            ></textarea>
          </div>
          <div className="mt-1 pl-3 w-full">
          <button className = "bg-black p-3 text-white text-sm">POST COMMENT</button>
          </div>
        </div>
      </div>
    
  );
}

export default Postcomment;
