import React from 'react'

function RecentrNews(props) {
    return (
       
        <div className="flex">
        <div className="flex-grow pb-2">
          <div className="small relative">
            <div className = "red rounded-full text-white absolute -right-2 top-7">
              <div className = "flex justify-center items-center">
              <p className = "text-center text-sm">01</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-shrink">
          <p className=" pl-4 inline text-gray-400 text-sm ">{props.recentnews}</p>
          <p className="inline ml-2">
            By: <span className="inline text-blue-500 text-sm">RASALINA</span>
          </p>
          <p className="text-sm pl-4 font-bold pt-2 pb-2">
           {props.ibuprofen}{props.exclusive}{props.trump}{props.coronavirus}
          </p>
        </div>
      </div>
      
    )
}

export default RecentrNews
