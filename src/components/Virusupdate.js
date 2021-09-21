import React from "react";

function Virusupdate(props) {
  return (
    <div className="">
      <div className="flex ">
        <div className="flex-grow ">
          <p className="text-gray-400 text-sm pl-6 pb-2">{props.Stories}</p>
          <p className="pl-6 pr-1 pb-2">{props.adviceCorona}</p>
        </div>
        <div className="flex-shrink pt-2 pl-1">
          <div className="small"></div>
        </div>
      </div>
    </div>
  );
}

export default Virusupdate;
