import React, { useEffect } from "react";
import Header from "../components/header";
import st from "./../styles/home.module.css";
import Head from "next/head";
import { MdOutlineSouth } from "react-icons/md";

import Marquee from "react-fast-marquee";
import $ from "jquery";
import { Power4, Back } from "gsap/dist/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }, []);
  const moveTo1 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
        offsetY: 85,
      },
      ease: Power4.easeInOut,
      duration: 0.75,
    });
  };
  const moveTo2 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section2",
        offsetY: 85,
      },
      ease: Power4.easeInOut,
      duration: 0.75,
    });
  };
  const moveTo3 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section3",
        offsetY: 85,
      },
      ease: Power4.easeInOut,
      duration: 0.75,
    });
  };
  const moveTo4 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section4",
        offsetY: 85,
      },
      ease: Power4.easeInOut,
      duration: 0.75,
    });
  };

  return (
    <div>
      <Head>
        <title>Deadass | Rarity Chart</title>
      </Head>
      {/* Header */}
      <Header
        moveTo1={moveTo1}
        moveTo2={moveTo2}
        moveTo3={moveTo3}
        moveTo4={moveTo4}
        goToHome={true}
      />
      <div className={st.rarity}>
        <div className="box">
          <div className={st.heroContent}>
            <img src="./assets/rarity.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
