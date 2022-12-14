import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image"
import computa from '../../public/computa.jpg'
import Cards from '../components/Cards'
import Webring from "../components/Webring";
import Projects from "../components/Projects";
import About from "../components/About";

const Home: NextPage = () => {
  // eslint-disable-next-line prefer-const
  let [age, setAge] = useState('')

  setInterval(() => {
    const time = (new Date().getTime() - new Date(1206835200000).getTime()) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
    setAge(age = time.toString().substring(0, 11))
	}, 100);
  return (
    <>
      <Head>
        <title>patato</title>
        <meta name="description" content="Patato's personal portfolio website made with NextJS & TailwindCSS" />
        <link rel="icon" href="/potatocolor.png" />
      </Head>
      <Webring />

      <div className="fullflex bg-gradient-to-t from-orange-200 to-orange-300">
        <Image className="image" src={computa} alt="computer image" width={300} height={300} />
        <h1 className="title text-6xl mt-2 animate-bounce">Patato</h1>
        <h1 className="mb-4 poppins text-orange-900 text-2xl sm:text-3xl select-none">I&apos;m {age} years old</h1>
        
        < Cards />
      </div>

      <About  />
      <Projects />
      <h1 className="flex fixed bottom-0 left-0 right-0 text-center title justify-center items-center text-orange-900">Copyright ©️ 2022 Patato | All Rights Reserved</h1>

    </>
  );
};

export default Home;
