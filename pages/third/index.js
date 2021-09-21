import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Footer from "../../src/components/Footer";
import Navbar2 from "../../src/components/Navbar2";
import Navbar from "../details/Navbar";
import Allpostby from "./Allpostby";
import axios from "axios";
import Latestarticle from "../../src/components/Latestarticle";

export default function thirdpage(props) {
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
              <a href="">HOME   </a>
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
                <div className="flex pt-8">
                  <div className="flex-shrink">
                    <div className="iconprofile2"></div>
                  </div>
                  <div className="flex-shrink ">
                    <p className="font-bold pl-2">{props.rasalina.name}</p>
                    <p className="text-gray-400 text-sm inline pl-2">
                      {props.rasalina.articles}
                      <span className="text-gray-400 text-sm inline"></span>
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
              <div className="flex pt-4 items-center ">
                <div className="flex-shrink  ">
                  <p className="text-sm text-gray-400">{props.text.lorem}</p>
                </div>
                <div className="flex-shrink ">
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
        <div className="grid sm:grid-cols-4 gap-4">
          {props.allPost.map((item, idx) => (
            <Latestarticle
              key={idx}
              title={item.title}
              subtitle={item.subtitle}
              button = {item.button}
              button1 = {item.button1}
              button2 = {item.button2}
              button3 = {item.button3}
              button4 = {item.button4}
              button5 = {item.button5}
              button6 = {item.button6}
              button7 = {item.button7}
              button8 = {item.button8}
              button9 = {item.button9}
              button10 = {item.button10}
              button11 = {item.button11}
            />
          ))}
        </div>
      </div>

      <section className="mt-8">
        <Footer />
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3000/api/detaillPosts");
  return {
    props: {
      rasalina: response.data.rasalina,
      text: response.data.text,
      allPost: response.data.allPost.box,

      // sectionAlone: response.data.sectionAlone,
    }, // will be passed to the page component as props
  };
}
