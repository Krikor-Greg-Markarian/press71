import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";
import Navbar from './Navbar';
import Navbar2 from './api/Navbar2';



export default function Home(props) {
  return (


    <div>
      <section>
      <Navbar />
      </section>
      <section>
        <Navbar2 />
      </section>

      <section className = "container mx-auto pt-12 ">
        <button className = "bg-red-600 text-white text-sm font-bold px-4 py-1 inline">TRADING NOW</button>
        <p className = "inline ml-5 font-bold text-sm text-gray-600">Trump sough to buy vaccine developer exclusively for US, say German officials updates</p>
      </section>


      <section>
        <div className = "container mx-auto pt-8 border-8">
        <div className = "grid grid-cols-3 border-8">
          <div className = "cols-span-1">
              <div className = "coronaveg"></div>
              asd
          </div>
          asd
        
        </div>
        
        </div>
        
      </section>


    </div>
























  )
}

export async function getServerSideProps(context) {
  const response = await axios.get("http://localhost:3000/api/posts");

  return {
    props: {
      posts_data: response.data,
    }, // will be passed to the page component as props
  };
}





