import React from "react";

function Fever(props) {
  return (
    
      <div className = "">
        <div className="design w-full"></div>
        <div className = "pt-2">
        <button className="bg-red-600 text-white px-6 ">{props.coronabutton}</button>
        </div>
        <p className = "font-bold pt-2 pb-2">{props.why}</p>
        <p className = "text-gray-400 text-sm sm:mb-4">{props.asupermarket}</p>
      </div>
    
  );
}

export default Fever;
