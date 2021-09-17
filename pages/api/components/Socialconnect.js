import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Mustread from "./Mustread";
import Subscribenwletter from "./Subscribenwletter";
import ADvertisement from "./ADvertisement";

function Socialconnect() {
  return (
    
      <div>
        <div>
          <div className="container mx-auto border-2 p-3 mb-5 ">
            <p className="font-bold">Social Connect</p>
            <div className="pt-2 pb-2">
              <div className="border-2 ">
                <div class="flex justify-center items-center p-1 pt">
                  <div class="flex-shrink w-96 h-92">
                    <div>
                      {" "}
                      <FaFacebook className="text-blue-500" />{" "}
                    </div>
                  </div>
                  <div class="flex-shrink w-96 h-92 ">
                    <p className="pr-6">150980</p>
                  </div>

                  <div class="flex-shrink w-96 h-92 ">
                    <p className="text-gray-500 pr-4">Follower</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-center items-center p-1 border-2 ">
              <div class="flex-shrink w-96 h-92 ">
                <div>
                  {" "}
                  <FaYoutube className="text-red-500" />{" "}
                </div>
              </div>
              <div class="flex-shrink w-96 h-92 ">
                <p className="pr-6">780980</p>
              </div>

              <div class="flex-shrink w-96 h-92 ">
                <p className="text-gray-500 pr-4">Follower</p>
              </div>
            </div>
            <div className="pt-2 pb-2">
              <div className="border-2 ">
                <div class="flex justify-center items-center p-1 pt">
                  <div class="flex-shrink w-96 h-92">
                    <div>
                      {" "}
                      <FaTwitter className="text-blue-500" />{" "}
                    </div>
                  </div>
                  <div class="flex-shrink w-96 h-92 ">
                    <p className="pr-6">650980</p>
                  </div>

                  <div class="flex-shrink w-96 h-92 ">
                    <p className="text-gray-500 pr-4">Follower</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2 pb-2">
              <div className="border-2 ">
                <div class="flex justify-center items-center p-1 pt">
                  <div class="flex-shrink w-96 h-92">
                    <div>
                      {" "}
                      <FaInstagram className="text-pink-500" />{" "}
                    </div>
                  </div>
                  <div class="flex-shrink w-96 h-92 ">
                    <p className="pr-6">870980</p>
                  </div>

                  <div class="flex-shrink w-96 h-92 ">
                    <p className="text-gray-500 pr-4">Follower</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 p-4">
          <div className="container mx-auto">
            <p className="font-bold pt-2 pb-2">Must Read</p>
            <Mustread />
            <Mustread />
            <Mustread />
            <Mustread />
          </div>
        </div>

        <div className="border-2 mt-4">
          <Subscribenwletter />
        </div>

        <div className="border-2 mt-4">
          <ADvertisement />
        </div>
      </div>
    
  );
}

export default Socialconnect;