import React from 'react'

function Latestarticle(props) {
    return (
       
       
          <div className = "sm:mb-4 ">
            <div className="design2 w-full relative">
              <button className = "text-white bg-red-600 px-2 text-sm absolute bottom-0">DOCTOR</button>
            </div>
            <p className = "font-bold text-sm pt-4">{props.forteen}</p>
            <p className = "text-sm text-gray-400 pt-4 pb-4">
              {props.asupermarket2}
            </p>
            <p className="inline font-bold text-sm">By: <span className = "text-blue-500 text-sm inline font-bold">RASALINA</span> </p>
            <p className="inline text-gray-400 text-sm">| 23 comments</p>
          </div>
        
      
    )
}

export default Latestarticle
