import React from "react";
import {
  FaFacebook,
  FaGooglePlusG,
  FaHeart,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import axios from "axios";
import Navbar2 from "../../src/components/Navbar2";
import ImgText from "./imgtext";
import Comments from "./Comments";
import Postcomment from "./Postcomment";
import Footer from "../../src/components/Footer";
import Socialconnect from "./Socialconnect";
import Link from "next/link";
import Navbar from "./Navbar";
import Mustread from "./Mustread";
import Subscribenwletter from "./Subscribenwletter";
import ADvertisement from "./ADvertisement";

export default function Secondpage(props) {
  return (
    // page 2
    <div>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <div>
        <Navbar2 />
      </div>
      <div>
        <Link href="/third">
          <div className="sea"></div>
        </Link>
      </div>

      <div>
        <div className="container mx-auto">
          <ul>
            <li className="text-sm text-gray-500 font-bold inline">
              <a href="#">HOME /</a>
            </li>
            <li className="text-sm text-gray-500 font-bold ml-2 inline">
              <a href="#">NEWS /</a>
            </li>
            <li className="text-sm text-gray-500 font-bold ml-2 inline">
              <a href="#">CARONA /</a>
            </li>
            <li className="text-sm text-gray-500 font-bold ml-2 inline">
              <a href="#">TIPS :</a>
            </li>
            <p className="text-red-600 underline inline ml-5">
              Global research and innovation forum: toward a reasearch rodmap
            </p>
          </ul>
          <p className="font-bold text-2xl pt-4 pb-4">
            Global research and innovation forum: towards <br></br> a research
            roadmap
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 container mx-auto">
        <div className="col-span-1 ">
          <div>
            <div className="pt-4 pb-4">
              <p className="text-black inline">
                BY:{" "}
                <span className="text-blue-600 font-bold text-sm inline ml-2">
                  RASALINA
                </span>{" "}
              </p>
              <p className="text-gray-400 text-sm font-bold inline ml-3">
                Health Tips
              </p>
              <p className="text-gray-400 text-sm font-bold inline ml-3 ">
                30 Commnets
              </p>
              <p className="text-gray-400 text-sm font-bold inline ml-3">
                04thMarch2021
              </p>
            </div>
            <p className="text-sm text-gray-400 pt-2 pb-2">
              {props.paragraph.title}
            </p>
            <p className="text-sm text-gray-400 pt-2 pb-2">
              {props.paragraph.subtitle}
            </p>
            <p className="text-sm text-gray-400 pt-2">
              {props.paragraph.subsubtitle}
            </p>
          </div>
          <p className="font-bold pt-4 text-lg">Here come the moms in space</p>
          <p className="text-sm text-gray-400 pt-2 pb-2">
            {props.hereCome.asupermarket}
          </p>

          <p className="text-sm text-gray-400 pt-2 pb-2">
            {props.hereCome.aneyewitness}
          </p>

          <section className="pb-2">
            <div className=" pt-3 pb-8 w-screen">
              <div className="flex justify-start">
                <div className="gift3 relative">
                  <div className="container mx-auto">
                    <div className="absolute transform translate-y-8 translate-x-6">
                      <p className="text-white font-bold ">
                        PRESS<span className="text-red-600">71</span>{" "}
                      </p>

                      <p className="text-white font-bold text-sm">
                        Blog &amp; MagazineTheme
                      </p>
                      <div>
                        <button className="bg-red-600 text-white text-sm px-3  transform -translate-y-12 translate-x-32 rounded-full">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <p className="font-bold text-lg">
            wrapped up in making sure everybody
          </p>
          <p className="text-sm text-gray-400 pt-2 pb-2">
            {props.wrapped.article}
          </p>
          <p className="text-sm text-gray-400 pt-2 pb-2">
            {props.wrapped.subarticle}
          </p>
          <p className="text-sm text-gray-400 pt-2 pb-2">
            {props.wrapped.subsubarticle}
          </p>
          <p className="font-bold pt-4 pb-2 text-lg">Unordered list style ?</p>
          <p className="text-sm text-gray-400 pt-2 pb-2">
            {props.unordered.unorderedtitle}
          </p>
          <p className="text-sm text-gray-400 pt-2 pb-2">
            {props.unordered.unorderedsubtittle}
          </p>
          <p className="text-sm text-gray-400 pt-2">
            {props.unordered.unorderedsusubtitle}
          </p>

          <div className="container mx-auto pt-6 pb-6">
            <p className="font-bold pt-4 pb-4">
              RelatedTags{" "}
              <span className="font-bold  float-right">SocialShare</span>{" "}
            </p>

            <div className="pt-2 pb-2">
              <div className="pt-2 pb-12">
                <p className="border-2 px-4 py-1 inline text-gray-400">
                  popular
                </p>
                <p className="border-2 px-4 py-1 inline text-gray-400 bg-black ml-2">
                  Design
                </p>
                <p className="border-2 py-1 inline text-gray-400 ml-2 px-4">
                  UX
                </p>
                <div className="float-right">
                  <FaFacebook className="inline text-gray-500" />
                  <FaTwitter className="inline text-gray-500 ml-2" />
                  <FaGooglePlusG className="inline text-gray-500" />
                  <FaHeart className="inline text-gray-500 ml-2" />
                  <FaInstagram className="inline text-gray-500 ml-2" />
                </div>
              </div>

              <div className="border-b-2 border-t-2 pt-6 pb-6">
                <p className="text-gray-400 text-sm">
                  PrevPost{" "}
                  <span className="text-gray-400 float-right">NextPost</span>{" "}
                </p>
                <p className="font-bold">
                  Tips On Minimalist{" "}
                  <span className="font-bold float-right">Less is More</span>{" "}
                </p>
              </div>
            </div>

            <div className="container mx-auto pt-6 pb-6">
              <p className="font-bold">Related Post</p>
              <div className="md:grid grid-cols-2">
                <div className="col-span-1 pt-6 pb-6">
                  {props.relatedpost.map((item, idx) => (
                    <ImgText
                      key={idx}
                      date={item.date}
                      datetext={item.datetext}
                      dateinfo={item.dateinfo}
                    />
                  ))}
                </div>
                <div className="col-span-1 pt-6 pb-6">
                  {props.relatedpost.map((item, idx) => (
                    <ImgText
                      key={idx}
                      date={item.date}
                      datetext={item.datetext}
                      dateinfo={item.dateinfo}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="container mx-auto pb-6 pt-6">
              <div className="bg-white p-3">
                <div className="flex">
                  <div className="flex-shrink pt-6 pr-4">
                    <div className="small3 mt-4"></div>
                  </div>
                  <div className="flex-shrink">
                    <p className="text-sm text-gray-400 pt-2 ">
                      {props.writtenby.bigtitle}
                    </p>
                    <p className="text-2xl font-bold pt-1">
                      {props.writtenby.bigsub}
                    </p>
                    <p className="text-sm text-gray-400 pt-1">
                      {props.writtenby.bigtext}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="container mx-auto">
                <p className="font-bold text-2xl">03 Comments</p>
                {props.comment.map((item, idx) => (
                  <Comments
                    key={idx}
                    name={item.name}
                    seconddate={item.seconddate}
                    articlelorem={item.articlelorem}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="font-bold pt-6 pb-6">PostComment</p>
              <Postcomment />
            </div>
          </div>
        </div>

        <section className="pl-10">
          <div className="pl-28 w-10/12">
            <div>
              <Socialconnect />
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

            <div className="pt-6">
              <div className="border-2">
                <div className="p-4">
                  <p className="font-bold">Popular Tag</p>
                </div>
                <div className="p-4">
                  <div class="flex gap-2">
                    <div class="flex-grow">
                      <p className="text-center border-2 p-1 text-sm text-gray-400">
                        Design
                      </p>
                    </div>
                    <div class="flex-grow ">
                      <p className="text-center border-2 p-1 text-sm text-gray-400">
                        Magazine
                      </p>
                    </div>
                    <div class="flex-shrink">
                      <p className="text-center border-2 p-1 text-sm text-gray-400">
                        Blog
                      </p>
                    </div>
                  </div>
                  <div class="flex gap-2 pt-2">
                    <div class="flex-grow">
                      <p className="text-center border-2 p-1 text-sm text-gray-400">
                        Ui/Ux
                      </p>
                    </div>
                    <div class="flex-shrink ">
                      <p className="text-center border-2 p-1 text-sm text-gray-400">
                        NNC
                      </p>
                    </div>
                    <div class="flex-grow">
                      <p className="text-center border-2 p-1 text-sm text-gray-400">
                        Construction
                      </p>
                    </div>
                  </div>
                  <div class="flex gap-2 pt-2">
                    <div class="flex-grow">
                      <p className="text-center border-2 p-1 text-sm text-gray-400">
                        Design
                      </p>
                    </div>
                    <div class="flex-grow ">
                      <p className="text-center border-2 p-1 text-sm text-gray-400">
                        Magazine
                      </p>
                    </div>
                    <div class="flex-shrink">
                      <p className="text-center border-2 p-1 text-sm text-gray-400">
                        Blog
                      </p>
                    </div>
                  </div>
                  <div class="flex gap-2 pt-2">
                    <div class="flex-grow">
                      <p className="text-center border-2 p-1 text-sm text-gray-400">
                        Ui/Ux
                      </p>
                    </div>
                    <div class="flex-shrink ">
                      <p className="text-center border-2 p-1 text-sm text-gray-400">
                        NNC
                      </p>
                    </div>
                    <div class="flex-grow">
                      <p className="text-center border-2 p-1 text-sm text-gray-400">
                        Construction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3000/api/detailPosts");
  return {
    props: {
      paragraph: response.data.paragraph,
      hereCome: response.data.hereCome,
      wrapped: response.data.wrapped,
      unordered: response.data.unordered,
      relatedpost: response.data.relatedpost.imagetext,
      writtenby: response.data.writtenby,
      comment: response.data.comment.littleBox,

      // sectionAlone: response.data.sectionAlone,
    }, // will be passed to the page component as props
  };
}
