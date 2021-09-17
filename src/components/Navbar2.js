import React from 'react'
import { FaGripLines,FaSearch } from "react-icons/fa";


function Navbar2() {
    return (
        <div>
            <div className = "border-t-2 pt-4 border-b-2">
                <div className = "pb-4">
                <div className = "container mx-auto">
            <div className = "flex justify-start items-center">
            <FaGripLines className = ""/>
            <div className = "">
                <ul className = "inline-block ml-5">
                    <li className = "inline text-sm font-bold"><a href="">HOME</a></li>
                    <li className = "inline text-sm font-bold ml-3"><a href="">NEWS+</a></li>
                    <li className = "inline text-sm font-bold ml-3"><a href="">CORONAVIRUS+</a></li>
                    <li className = "inline text-sm font-bold ml-3"><a href="">VIDEO</a></li>
                    <li className = "inline text-sm font-bold ml-3"><a href="">HEALTH</a></li>
                    <li className = "inline text-sm font-bold ml-3"><a href="">STORIES</a></li>
                    <li className = "inline text-sm font-bold ml-3"><a href="">LOCAL NEWS</a></li>
                    <li className = "inline text-sm font-bold ml-3"><a href="">MORE NEWS+</a></li>
                    <div className = "float-right ml-40">
                    <li className = "inline text-sm font-bold ml-12"><a href="">PREMIUM CONTENT</a></li>
                   <FaSearch className = "inline ml-12"/>
                   </div>
                </ul>
            </div>
            </div>
            </div>
            </div>





            </div>
        </div>
    )
}

export default Navbar2
