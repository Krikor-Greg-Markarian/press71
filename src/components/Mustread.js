import React from "react";

function Mustread(props) {
  return (
    <div>
      <div className="pt-2 pb-2">
        <p className="text-gray-400 inline text-sm">
          {props.date}
          <span className="text-gray-400 inline text-sm">
            <span className="text-black font-bold text-sm pl-4 ">BY :</span> RASALINA
          </span>
        </p>
        <p className="font-bold text-sm pt-2 pb-2">
          {props.title}
        </p>
        <div className="border-b-2"></div>
      </div>
    </div>
  );
}

export default Mustread;
