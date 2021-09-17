import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Footer from "../api/components/Footer";
import Navbar from "../api/components/Navbar";
import Navbar2 from "../api/components/Navbar2";
import Allpostby from "./Allpostby";

function thirdpage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Navbar2 />
      </div>
      <div>
        <div className="animal"></div>
      </div>

      <div className="container mx-auto">
        <div>
          <ul>
            <li className="text-gray-400 text-sm font-bold inline">
              <a href="">HOME</a>
            </li>
            <li className="text-gray-400 text-sm font-bold inline ml-3">
              <a href="">AUTHOR</a>
            </li>
            <p className="inline ml-4">
              BY:{" "}
              <span className="text-blue-600 inline">RASALINDA DE WILLIAM</span>{" "}
            </p>
          </ul>
        </div>

        <div>
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <div className="container mx-auto">
                <div class="flex pt-8">
                  <div class="flex-shrink">
                    <div className="iconprofile2"></div>
                  </div>
                  <div class="flex-shrink ">
                    <p className="font-bold pl-2">Rasalina De Willamson</p>
                    <p className="text-gray-400 text-sm inline pl-2">
                      64 Articles Written{" "}
                      <span className="text-gray-400 text-sm inline">
                        2comments
                      </span>{" "}
                    </p>
                    <div className="pl-2">
                      <FaFacebook className="text-blue-600 inline " />
                      <FaTwitter className="text-blue-800 inline ml-3" />{" "}
                      <FaYoutube className="text-red-500 inline ml-3" />
                      <FaInstagram className="text-pink-700 inline ml-3" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div class="flex pt-4 ">
                <div class="flex-shrink  ">
                  <p className="text-sm text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate, assumenda molestias et dolore tempore excepturi
                    sequi! Hic, in voluptates exercitationem, necessitatibus
                    dicta cum amet et, doloremque ratione illum quasi
                    recusandae.
                  </p>
                </div>
                <div class="flex-shrink ">
                  <div className="space"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12 pb-12">
        <div className="border-b-2"></div>
      </div>

      <div className="container mx-auto">
        <p className="font-bold pb-6">All Post By:Rasallina De Willamson</p>

        <div className="grid grid-cols-4">
          <div className="col-span-1 ">
            <Allpostby />
          </div>
          <div className="col-span-1">
            <Allpostby />
          </div>
          <div className="col-span-1">
            <Allpostby />
          </div>
          <div className="col-span-1">
            <Allpostby />
          </div>
        </div>
        <div className="grid grid-cols-4 pt-6">
          <div className="col-span-1 ">
            <Allpostby />
          </div>
          <div className="col-span-1">
            <Allpostby />
          </div>
          <div className="col-span-1">
            <Allpostby />
          </div>
          <div className="col-span-1">
            <Allpostby />
          </div>
        </div>
        <div className="grid grid-cols-4 pt-6">
          <div className="col-span-1 ">
            <Allpostby />
          </div>
          <div className="col-span-1">
            <Allpostby />
          </div>
          <div className="col-span-1">
            <Allpostby />
          </div>
          <div className="col-span-1">
            <Allpostby />
          </div>
        </div>
        
      </div>

      <section className = "mt-8">
      <Footer />
      </section>
      


    </div>
  );
}

export default thirdpage;
