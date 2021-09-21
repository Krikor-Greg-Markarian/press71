import React from 'react'

function Subscribenwletter() {
    return (
        <div className = "pt-6">
             <div className="container mx-auto p-4 border-2 ">
                    <p className = "font-bold">Subscribe News Letter</p>
                    <p className="text-gray-400 text-sm pt-2 pb-2">
                      Get every weekly update and insight feed{" "}
                    </p>
                    <div className="flex justify-center items-center p-2">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Enter your mail... "
                        className="border-2 p-1"
                      />
                    </div>
                    <div className="flex justify-center items-center ">
                      <button className="bg-black text-white text-sm px-14">
                        SUBSCRIBE NOW
                      </button>
                    </div>
                  </div>
        </div>
    )
}

export default Subscribenwletter
