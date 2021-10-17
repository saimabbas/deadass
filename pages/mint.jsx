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
        <title>Deadass | Mint</title>
      </Head>
      {/* Header */}
      <Header
        moveTo1={moveTo1}
        moveTo2={moveTo2}
        moveTo3={moveTo3}
        moveTo4={moveTo4}
        goToHome={true}
      />
      <div className={st.mint}>
        <img className={st.heroImg} src="./assets/hero.png" alt="" />
        <img className={st.corner3} src="./assets/corner3.png" alt="" />
        <img className={st.corner4} src="./assets/corner4.png" alt="" />
        <div className="box">
          <div className={st.heroContent}>
            <h4>HOLD ON TIGHT TO THE GOOD THINGS IN LIFE</h4>
            <h4>ONLY Solana. NO Ass, Gas or Cash.</h4>
            <main>
              <h5>The price per mint is 0.69</h5>
              <h5>Asses remaining = 2245</h5>
            </main>
            <button className="button">Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
