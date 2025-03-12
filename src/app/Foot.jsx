'use client'
import Footer from "@/component/Footer1";
 //import Footer from "@/components/Footer2";
import Intro from "@/component/info/Intro";
import { useEffect } from "react";
import Lenis from 'lenis';
import { useInView } from 'react-intersection-observer';


export default function Home() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      <Footer />
    </main>
  );
}
