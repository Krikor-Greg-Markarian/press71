import React from 'react'

function Latestarticle(props) {
    return (
       
       
          <div className = "sm:mb-4 ">
            <div className="design2 w-full relative">
              <button className = "text-white bg-red-600 px-2 text-sm absolute bottom-0">{props.button}{props.button1}{props.button2}{props.button3}{props.button4}{props.button5}{props.button6}{props.button7}{props.button8}{props.button9}{props.button10}{props.button11}</button>
            </div>
            <p className = "font-bold text-sm pt-4">{props.forteen}{props.title}</p>
            <p className = "text-sm text-gray-400 pt-4 pb-4">
              {props.asupermarket2}{props.subtitle}
            </p>
            <p className="inline font-bold text-sm">By: <span className = "text-blue-500 text-sm inline font-bold">RASALINA</span> </p>
            <p className="inline text-gray-400 text-sm">| 23 comments</p>
          </div>
        
      
    )
}

export default Latestarticle
