import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Navbar from "./api/components/Navbar";
import Navbar2 from "./api/components/Navbar2";
import Adviceleft from "./api/components/Adviceleft";
import Footer from "./api/components/Footer";
import Table from "./api/components/Table";
import Advice from "./api/components/Advice";

import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaGooglePlusG,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import Latestarticle from "./api/components/Latestarticle";

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
        <div className="container mx-auto pt-8 border-8">
          <div className="grid grid-cols-3 border-8">
            <div className="cols-span-1">
              <div className="coronaveg"></div>
              asdasds
            </div>
            <div className="grid grid-cols-3 border-8">
              <div className="cols-span-2">
                <div className="coronaveg2"></div>
                asdasds
              </div>
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
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <div className="border-8">
                <div className="grid grid-cols-2">asdsad</div>
                asdasdsad
              </div>
              asdasdsadsadsadsadsad
            </div>
            123213123123
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
      posts_data: response.data,
    }, // will be passed to the page component as props
  };
}
