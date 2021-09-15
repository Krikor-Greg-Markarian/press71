import React from 'react'
import {
    FaTwitter,
    FaFacebookF,
    FaYoutube,
    FaGooglePlusG,
    FaInstagram,
    FaFacebook,
  } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-black">
        <div className="p-20">
          <div className="grid grid-cols-4">
            <div className="col-span-1 ">
              <div className="text-center ">
                <p className="inline font-bold text-white">PRESS</p>
                <p className="inline text-red-400 font-bold">71</p>

                <div>
                  <FaTwitter className="text-white inline" />
                  <FaFacebook className="text-white inline ml-3" />
                  <FaYoutube className="text-white inline ml-3" />
                  <FaGooglePlusG className="text-white inline ml-3" />
                  <FaInstagram className="text-white inline ml-3" />
                </div>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="text-center ">
                <p className="text-white">RECENT POSTS</p>

                <div class=" ">
                  <div class="flex-grow w-16 h-16 ">
                    <div className="small2"></div>
                    <p className="text-white text-sm">
                      Health This is What Physical Therapy Can Actually Solve
                    </p>
                    <p className="text-sm text-gray-400">DECEMBER 30-2020</p>
                  </div>
                  <div class="flex-shrink w-64 h-16 ..."></div>
                </div>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="text-center">
                <p className="text-white">POPULAR CATEGORIES</p>

                <p className="text-gray-400 text-sm">
                  Stories{" "}
                  <span className="text-sm text-gray-400 float-right">
                    23
                  </span>{" "}
                </p>
                <p className="text-gray-400 text-sm">
                  Health{" "}
                  <span className="text-sm text-gray-400 float-right">
                    45
                  </span>{" "}
                </p>
                <p className="text-gray-400 text-sm">
                  Local news{" "}
                  <span className="text-sm text-gray-400 float-right">
                    67
                  </span>{" "}
                </p>
                <p className="text-gray-400 text-sm">
                  Video{" "}
                  <span className="text-sm text-gray-400 float-right">
                    98
                  </span>{" "}
                </p>
                <p className="text-gray-400 text-sm">
                  Education{" "}
                  <span className="text-sm text-gray-400 float-right">
                    23
                  </span>{" "}
                </p>
                <p className="text-gray-400 text-sm">
                  Coronavirus{" "}
                  <span className="text-sm text-gray-400 float-right">
                    56
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="col-span-1 ">
              <div className="text-center pl-5">
                <p className="text-white">TWITTER FEEDS</p>
                <p className="text-sm text-gray-400">
                  carsafe-#Gutenbergts,Car Dealer available on @website{" "}
                  <span className="text-white"> https://website.net</span>
                </p>
                <p>june 22,2021</p>
              </div>
              <div className="text-center pl-5">
                <p className="text-white">TWITTER FEEDS</p>
                <p className="text-sm text-gray-400">
                  carsafe-#Gutenbergts,Car Dealer available on @website{" "}
                  <span className="text-white"> https://website.net</span>
                </p>
                <p>june 22,2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center border-t-2 p-6">
          <p className="text-sm text-white">
            News71 &copy; 2021. Allrights reserved
          </p>
        </div>
      </div>
    )
}

export default Footer
