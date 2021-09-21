import React from 'react'

function AdviceViewAll(props) {
    return (
        <div>
             <div className="container mx-auto">
          <div className="flex">
            <div className="flex-shrink">
              <p className="font-bold">{props.left}</p>
            </div>
            <div className="flex-grow flex justify-center items-center">
              <div className="border-double border-2 w-11/12"></div>
            </div>
            <div className="flex-shrink">
              <p className="font-bold text-sm">{props.right}</p>
            </div>
          </div>
        </div>
        </div>
    )
}

export default AdviceViewAll
