import axios from "axios";
import Navbar from "../src/components/Navbar";
import Navbar2 from "../src/components/Navbar2";
import Footer from "../src/components/Footer";
import Table from "../src/components/Table";
import Latestarticle from "../src/components/Latestarticle";
import Fever from "../src/components/Fever";
import Adviceleft from "../src/components/Adviceleft";
import Smalladvice from "../src/components/Smalladvice";
import Virusupdate from "../src/components/Virusupdate";
import Link from "next/link";

import Socialconnect from "../src/components/Socialconnect";
import Mustread from "../src/components/Mustread";
import Subscribenwletter from "../src/components/Subscribenwletter";
import ADvertisement from "../src/components/ADvertisement";
import RecentrNews from "../src/components/RecentrNews";
import AdviceViewAll from "../src/components/AdviceViewAll";

export default function Home(props) {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <Navbar2 />
      </section>

      <section className="container mx-auto pt-12 pb-6 b">
        <button className="bg-red-600 text-white text-sm font-bold px-4 py-1 inline">
          TRADING NOW
        </button>
        <p className="inline ml-5 font-bold text-sm text-gray-600 ">
          Trump sough to buy vaccine developer exclusively for US, say German
          officials updates
        </p>
      </section>

      <section className="container mx-auto">
        <div className="md:grid grid-rows-3 grid-flow-col gap-4">
          <Link rel="stylesheet" href="/details">
            <div className="row-span-3 bg-blue-200 dog md:dog w-full relative">
              <div className="flex justify-center items-center">
                <button className="bg-red-600 px-6 text-white absolute top-6">
                  CORONAVIRUS
                </button>

                <div className="transform translate-y-48 text-2xl">
                  <p className="text-white font-bold underline ">
                    Coronavirus live updates:italy death toll nears 3,000
                  </p>
                  <div className="flex justify-center items center">
                    <p className="text-white font-bold text-sm transform translate-y-10">
                      LIVE{" "}
                      <span className="text-white ml-5">
                        BY:{" "}
                        <span className="text-blue-600 text-sm">RASALINA</span>{" "}
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <div className="col-span-2 row-span-1 book mt-1"></div>
          <div className="row-span-2 col-span-1 book mt-1"></div>
          <div className="row-span-2 col-span-1 book mt-1"></div>
        </div>
      </section>

      <section className="pb-8">
        {/* <AdviceViewAll /> */}
        <div className="container mx-auto">
                  <div className="flex">
                    <div className="flex-shrink">
                      <p className="font-bold">Advice</p>
                    </div>
                    <div className="flex-grow flex justify-center items-center">
                      <div className="border-double border-2 w-11/12"></div>
                    </div>
                    <div className="flex-shrink">
                      <p className="font-bold text-sm">VIEW ALL</p>
                    </div>
                  </div>
                </div>
      </section>

      <section className="pt-4 pb-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-4">
            <div className="col-span-3 ">
              <div className="md:grid grid-cols-2 gap-2">
                <Fever
                  coronabutton={props.coverStory.coronabutton}
                  why={props.coverStory.why}
                  asupermarket={props.coverStory.asupermarket}
                />

                <div className="mr-30 sm:mr-30">
                  {props.posts_data.map((item, idx) => (
                    <RecentrNews
                      key={idx}
                      recentnews={item.recentnews}
                      ibuprofen={item.ibuprofen}
                      exclusive={item.exclusive}
                      trump={item.trump}
                      coronavirus={item.coronavirus}
                    />
                  ))}
                </div>
                

               
                <div className=" pt-8 pb-8 w-screen">
                  <div className="flex justify-start">
                    <div className="gift2 relative">
                      <div className="container mx-auto">
                        <div className="absolute transform translate-y-8 translate-x-6">
                          <p className="text-white font-bold ">
                            PRESS<span className="text-red-600">71</span>{" "}
                          </p>

                          <p className="text-white font-bold text-sm">
                            Blog &amp; MagazineTheme
                          </p>
                          <div>
                            <button className="bg-red-600 text-white text-sm px-3  transform -translate-y-12 translate-x-32">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

              <section className = "pt-8 pb-8">
                <div className="container mx-auto">
                  <div className="flex">
                    <div className="flex-shrink">
                      <p className="font-bold">Local News</p>
                    </div>
                    <div className="flex-grow flex justify-center items-center">
                      <div className="border-double border-2 w-11/12"></div>
                    </div>
                    <div className="flex-shrink">
                      <p className="font-bold text-sm">VIEW ALL</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="md:grid grid-cols-2 ">
                <div className="col-span-1 pt-6">
                  {props.posts_data.map((item, idx) => (
                    <RecentrNews
                      key={idx}
                      recentnews={item.recentnews}
                      ibuprofen={item.ibuprofen}
                      exclusive={item.exclusive}
                      trump={item.trump}
                      coronavirus={item.coronavirus}
                    />
                  ))}
                </div>

                <div className="pt-6">
                  <Fever
                    coronabutton={props.coverStory.coronabutton}
                    why={props.coverStory.why}
                    asupermarket={props.coverStory.asupermarket}
                  />
                </div>
              </div>
            </div>

            <section>
              <Socialconnect />

              <div>
                <div className="border-2 p-2">
                  <p className="font-bold">Must Read</p>
                  <Mustread />
                  <Mustread />
                  <Mustread />
                  <Mustread />
                </div>
              </div>

              <Subscribenwletter />
              <ADvertisement />
            </section>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-6">
        {/* <AdviceViewAll /> */}
        <div className="container mx-auto">
          <div className="flex">
            <div className="flex-shrink">
              <p className="font-bold">Advice</p>
            </div>
            <div className="flex-grow flex justify-center items-center">
              <div className="border-double border-2 w-11/12"></div>
            </div>
            <div className="flex-shrink">
              <p className="font-bold text-sm">VIEW ALL</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div className="md:grid grid-cols-3">
          <div className="col-span-1 sm:mb-10 ">
            {props.leftsection.map((item, idx) => (
              <Smalladvice
                key={idx}
                Stories={item.Stories}
                adviceCorona={item.adviceCorona}
              />
            ))}
          </div>

          <div className="flex justify-center items-center">
            <div className="moon relative">
              <div className="flex justify-center items-center">
                <p className="underline bg-white p-4 absolute w-10/12 -bottom-12 font-bold text-sm text-center">
                  Virus confronts leaders with one of modern history's gravest
                  challenges
                </p>
              </div>
              <div className="flex justify-center items-center w-full">
                <button className="text-white bg-red-600 text-sm px-3 absolute">
                  VIRUS
                </button>
              </div>
            </div>
          </div>

          <div className="sm:mt-20 md:mt-5">
            {props.rightsection.map((item, idx) => (
              <Virusupdate
                key={idx}
                Stories={item.Stories}
                adviceCorona={item.adviceCorona}
              />
            ))}
          </div>
        </div>
      </div>

      <section className="pt-28 pb-24 text-center">
        <div className="container mx-auto flex justify-center items center transform -translate-x-8">
          <p className="text-sm bg-red-600 text-white px-2">
            CORONA19 LIVE DATA
          </p>
        </div>
        <Table />
      </section>

      <section className="pt-6 pb-12">
        {/* <AdviceViewAll 
      //  title2 = {props.sectionAlone.left}
      //  viewall = {props.sectionAlone.right}
       
       /> */}
        <div className="container mx-auto">
          <div className="flex">
            <div className="flex-shrink">
              <p className="font-bold">Latest Articles</p>
            </div>
            <div className="flex-grow flex justify-center items-center">
              <div className="border-double border-2 w-11/12"></div>
            </div>
            <div className="flex-shrink">
              <p className="font-bold text-sm">VIEW ALL</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto ">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {props.latestArticles.map((item, idx) => (
              <Latestarticle
                key={idx}
                forteen={item.forteen}
                asupermarket2={item.asupermarket2}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3000/api/posts");
  return {
    props: {
      posts_data: response.data.stories,
      coverStory: response.data.coverStory,
      leftsection: response.data.advice.leftsection,
      rightsection: response.data.advice.rightsection,
      latestArticles: response.data.latestArticles.box,
      // sectionAlone: response.data.sectionAlone,
    }, // will be passed to the page component as props
  };
}
