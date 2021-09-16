import axios from "axios";
import Navbar from "./api/components/Navbar";
import Navbar2 from "./api/components/Navbar2";
import Footer from "./api/components/Footer";
import Table from "./api/components/Table";
import Advice from "./api/components/Advice";
import Latestarticle from "./api/components/Latestarticle";
import Adviceright from "./api/components/adviceright";
import Fever from "./api/components/Fever";
import Adviceleft from "./api/components/Adviceleft";
import Smalladvice from "./api/components/Smalladvice";
import Virusupdate from "./api/components/Virusupdate";
import Link from "next/link";

import Socialconnect from "./api/components/Socialconnect";

export default function Home(props) {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <Navbar2 />
      </section>

      <section className="container mx-auto pt-12 ">
        <button className="bg-red-600 text-white text-sm font-bold px-4 py-1 inline">
          TRADING NOW
        </button>
        <p className="inline ml-5 font-bold text-sm text-gray-600">
          Trump sough to buy vaccine developer exclusively for US, say German
          officials updates
        </p>
      </section>

      <section>
        <div className="container mx-auto">
          <div class="grid grid-rows-3 grid-flow-col">
            <Link rel="stylesheet" href="/secondpage">
              <div class="row-span-3 dog">1</div>
            </Link>

           

            <div class="col-span-2 bg-blue-300">2</div>

            <div className="grid grid-cols-2 gap-2">
              <div class="row-span-1 bg-blue-400">3</div>
              <div class="row-span-1 bg-blue-400">3</div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-4 pb-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-4">
            <div className="col-span-3">
              <div className="grid grid-cols-2">
                <Fever />

                <div>
                  <Adviceright />
                  <Adviceright />
                  <Adviceright />
                  <Adviceright />
                </div>

                <div className=" pt-8 pb-8">
                  <div className="flex justify-center items-center">
                    <div className="gift2"></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="col-span-1 pt-6">
                  <Adviceright />
                  <Adviceright />
                  <Adviceright />
                  <Adviceright />
                  <Adviceright />
                </div>
                <div className="pt-6">
                  <Adviceleft />
                </div>
              </div>
            </div>

            <div>
              <Socialconnect />
            </div>
         
            </div>
          </div>
        
      </section>

      <section className="pt-4 pb-4">
        <div className="container mx-auto">
          <div className="font-bold">
            Advice
            <div className="float-right font-normal">VIEW ALL</div>
          </div>
        </div>
      </section>

      <section>
        <Advice />
      </section>

      <section className="pt-4 pb-4">
        <div className="container mx-auto">
          <div className="font-bold">
            Advice
            <div className="float-right font-normal">VIEW ALL</div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <div className="grid grid-cols-3">
          <div className="col-span-1 ">
            <Smalladvice />
            <Smalladvice />
            <Smalladvice />
          </div>
          <div className="flex justify-center items-center">
            <div className="moon relative">
              <div>
                <p className="underline bg-white p-2 absolute -bottom-12 w-9/12 left-16">
                  Virus confronts leaders with one of modern history's gravest
                  challenges
                </p>
              </div>
              <div>
                <button className="text-white bg-red-600 text-sm px-3 absolute left-36 -top-2">
                  VIRUS
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <Virusupdate />
            <Virusupdate />
            <Virusupdate />
            <Virusupdate />
          </div>
        </div>
      </div>

      <section className="pt-6 text-center ">
        <Table />
      </section>

      <section className="pt-4 pb-4">
        <div className="container mx-auto">
          <div className="font-bold">
            Latest Articles
            <div className="float-right font-normal">VIEW ALL</div>
          </div>
        </div>
      </section>

      <section>
        <Latestarticle />
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
      // advice: response.data.advice
    }, // will be passed to the page component as props
  };
}
