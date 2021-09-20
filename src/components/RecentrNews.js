import React from 'react'

function RecentrNews() {
    return (
       
        <div className="flex pt-1">
        <div className="flex-grow ">
          <div className="small relative">
            <div className = "red rounded-full text-white absolute -right-2 top-6">
              <div className = "flex justify-center items-center">
              <p className = "text-center text-sm">01</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-shrink ">
          <p className=" pl-4 inline text-gray-400 text-sm ">RECENT NEWS</p>
          <p className="inline ml-2">
            By: <span className="inline text-blue-500 text-sm">RASALINA</span>
          </p>
          <p className="text-sm pl-4">
            Lorem, ipsum dolor sit amet sectetur adipisicing elit. Temporibus
            dolore, aspernatur.
          </p>
          <p className="text-sm"></p>
        </div>
      </div>
      
    )
}

export default RecentrNews
