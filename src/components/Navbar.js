import React from "react";

function Navbar() {
  return (
    <div className="mt-8 mb-8">
      <div className="container mx-auto ">
        <div className="flex justify-start items-start">
          <p className="inline text-2xl font-bold ">PRESS</p>
          <p className="inline text-2xl text-red-600 font-bold">71</p>
          <div className="inline ml-12 pt-1">
            <ul className="inline-block ">
              <li className="text-sm text-gray-400 inline font-bold ">
                <a href="">NEWYORK</a>
              </li>
              <li className="text-sm text-gray-400 inline ml-2 font-bold">
                <a href="">30DEGREE</a>
              </li>
              <li className="text-sm text-gray-400 inline ml-2 font-bold">
                <a href="">SATERDAY</a>
              </li>
              <li className="text-sm text-gray-400 inline ml-2 font-bold">
                <a href="">ACCOUNT</a>
                
              </li>
              
            </ul>
           
          </div>
        </div>
       
      </div>
      
    </div>
  );
}

export default Navbar;
