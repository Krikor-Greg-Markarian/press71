import React from 'react'

function Smalladvice(props) {
    return (
        
            <div>
                <p className = "text-gray-500 text-sm pt-4">{props.Stories}</p>
                <p className = "text-sm pt-2">{props.adviceCorona}</p>
                <p className = "text-gray-500 text-sm pt-2">34 MINUTES AGO </p>
                <p className = "text-black text-sm inline">By: <span className = "text-blue-600 text-sm inline">RASALINA</span> </p>  
                
            </div>
    
    )
}

export default Smalladvice
