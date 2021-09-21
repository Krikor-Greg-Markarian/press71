import React from 'react'

function ImgText(props) {
    return (
        <div className = "border-2">
            <div className = "apple"></div>
            <div className = "p-4 bg-white">
                <p className = "text-gray-400 text-sm">
                    {props.date}
                </p>
                <p className = "font-bold pt-2 text-sm">{props.datetext}</p>
                <p className = "text-gray-400 text-sm pt-2">{props.dateinfo}</p>
            </div>
        </div>
    )
}

export default ImgText
