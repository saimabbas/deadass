import React, { useEffect } from "react";
import Header from "../components/header";
import st from "./../styles/home.module.css";
import Head from "next/head";
import Link from "next/link";
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

  const showGif1 = () => {
    $(".gif").removeClass("activeGIF");
    $(".gif1").addClass("activeGIF");
    $(".CHB").removeClass("activeCHB");
    $(".CHB1").addClass("activeCHB");
  };
  const showGif2 = () => {
    $(".gif").removeClass("activeGIF");
    $(".gif2").addClass("activeGIF");
    $(".CHB").removeClass("activeCHB");
    $(".CHB2").addClass("activeCHB");
  };
  const showGif3 = () => {
    $(".gif").removeClass("activeGIF");
    $(".gif3").addClass("activeGIF");
    $(".CHB").removeClass("activeCHB");
    $(".CHB3").addClass("activeCHB");
  };
  const showGif4 = () => {
    $(".gif").removeClass("activeGIF");
    $(".gif4").addClass("activeGIF");
    $(".CHB").removeClass("activeCHB");
    $(".CHB4").addClass("activeCHB");
  };
  const showGif5 = () => {
    $(".gif").removeClass("activeGIF");
    $(".gif5").addClass("activeGIF");
    $(".CHB").removeClass("activeCHB");
    $(".CHB5").addClass("activeCHB");
  };
  const showGif6 = () => {
    $(".gif").removeClass("activeGIF");
    $(".gif6").addClass("activeGIF");
    $(".CHB").removeClass("activeCHB");
    $(".CHB6").addClass("activeCHB");
  };
  const showGif7 = () => {
    $(".gif").removeClass("activeGIF");
    $(".gif7").addClass("activeGIF");
    $(".CHB").removeClass("activeCHB");
    $(".CHB7").addClass("activeCHB");
  };
  const showGif8 = () => {
    $(".gif").removeClass("activeGIF");
    $(".gif8").addClass("activeGIF");
    $(".CHB").removeClass("activeCHB");
    $(".CHB8").addClass("activeCHB");
  };
  const showGif9 = () => {
    $(".gif").removeClass("activeGIF");
    $(".gif9").addClass("activeGIF");
    $(".CHB").removeClass("activeCHB");
    $(".CHB9").addClass("activeCHB");
  };
  const showGif10 = () => {
    $(".gif").removeClass("activeGIF");
    $(".gif10").addClass("activeGIF");
    $(".CHB").removeClass("activeCHB");
    $(".CHB10").addClass("activeCHB");
  };
  const showGif11 = () => {
    $(".gif").removeClass("activeGIF");
    $(".gif11").addClass("activeGIF");
    $(".CHB").removeClass("activeCHB");
    $(".CHB11").addClass("activeCHB");
  };
  const showGif12 = () => {
    $(".gif").removeClass("activeGIF");
    $(".gif12").addClass("activeGIF");
    $(".CHB").removeClass("activeCHB");
    $(".CHB12").addClass("activeCHB");
  };

  return (
    <div>
      <Head>
        <title>Deadass | Home</title>
      </Head>
      {/* Header */}
      <Header
        moveTo1={moveTo1}
        moveTo2={moveTo2}
        moveTo3={moveTo3}
        moveTo4={moveTo4}
        showLinks={true}
        goToTop={true}
      />
      {/* Hero Section */}
      <div className={st.hero} id="section1">
        <img className={st.heroImg} src="./assets/hero.png" alt="" />
        <img className={st.corner3} src="./assets/corner3.png" alt="" />
        <img className={st.corner4} src="./assets/corner4.png" alt="" />
        <div className={st.explore} onClick={moveTo2}>
          <p>Explore Asses Below</p>
          <span>
            <MdOutlineSouth />
          </span>
        </div>
        <div className="box">
          <div className={st.heroContent}>
            <h2>The original Auto Generated Ass NFTs Project</h2>
            <h3>6969 Unique Asses in total</h3>
            <Link href="/mint">
              <button className="button">MINT NOW!</button>
            </Link>
          </div>
        </div>
      </div>
      {/* Pictures Grid Section */}
      <div className={st.grid} id="section2">
        <div className={st.gridContent}>
          <div className={st.gridLeft}>
            <img
              onClick={showGif1}
              className="gif gif1 activeGIF"
              src="./assets/gif1.gif"
              alt=""
            />
            <img
              onClick={showGif2}
              className="gif gif2"
              src="./assets/gif2.gif"
              alt=""
            />
            <img
              onClick={showGif3}
              className="gif gif3"
              src="./assets/gif3.gif"
              alt=""
            />
            <img
              onClick={showGif4}
              className="gif gif4"
              src="./assets/gif4.gif"
              alt=""
            />
            <img
              onClick={showGif5}
              className="gif gif5"
              src="./assets/gif5.gif"
              alt=""
            />
            <img
              onClick={showGif6}
              className="gif gif6"
              src="./assets/gif6.gif"
              alt=""
            />
            <img
              onClick={showGif7}
              className="gif gif7"
              src="./assets/gif7.gif"
              alt=""
            />
            <img
              onClick={showGif8}
              className="gif gif8"
              src="./assets/gif8.gif"
              alt=""
            />
            <img
              onClick={showGif9}
              className="gif gif9"
              src="./assets/gif9.gif"
              alt=""
            />
            <img
              onClick={showGif10}
              className="gif gif10"
              src="./assets/gif10.gif"
              alt=""
            />
            <img
              onClick={showGif11}
              className="gif gif11"
              src="./assets/gif11.gif"
              alt=""
            />
            <img
              onClick={showGif12}
              className="gif gif12"
              src="./assets/gif12.gif"
              alt=""
            />
          </div>
          <div className={st.gridRight}>
            <div className="CHB CHB1 activeCHB">
              <h2>BBL Ass</h2>
              <img src="./assets/gif1.gif" alt="" />
            </div>
            <div className="CHB CHB2">
              <h2>Bubble Ass</h2>
              <img src="./assets/gif2.gif" alt="" />
            </div>
            <div className="CHB CHB3">
              <h2>Flat Ass</h2>
              <img src="./assets/gif3.gif" alt="" />
            </div>
            <div className="CHB CHB4">
              <h2>Mens Ass</h2>
              <img src="./assets/gif4.gif" alt="" />
            </div>
            <div className="CHB CHB5">
              <h2>Flat Mens Ass</h2>
              <img src="./assets/gif5.gif" alt="" />
            </div>
            <div className="CHB CHB6">
              <h2>Muscle Ass</h2>
              <img src="./assets/gif6.gif" alt="" />
            </div>
            <div className="CHB CHB7">
              <h2>Thick Ass</h2>
              <img src="./assets/gif7.gif" alt="" />
            </div>
            <div className="CHB CHB8">
              <h2>Piggy Ass</h2>
              <img src="./assets/gif8.gif" alt="" />
            </div>
            <div className="CHB CHB9">
              <h2>Ape Ass</h2>
              <img src="./assets/gif9.gif" alt="" />
            </div>
            <div className="CHB CHB10">
              <h2>Flat Zombie Ass</h2>
              <img src="./assets/gif10.gif" alt="" />
            </div>
            <div className="CHB CHB11">
              <h2>BBL Zombie Ass</h2>
              <img src="./assets/gif11.gif" alt="" />
            </div>
            <div className="CHB CHB12">
              <h2>Custom 1/1 Ass</h2>
              <img src="./assets/gif12.gif" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Banner */}
      <div className={st.banner} id="section3">
        <img className={st.roadmapHero} src="./assets/hero.png" alt="" />
        <div className="box">
          <div className={st.bannerContent}>
            <h2>Our ASSES are composed by: </h2>
            <h3>
              10+ body types, and 200+ attributes which could create over 2
              Million Variations 6969 have been generated and deployed on chain.
              Click the button below to check some of them.
            </h3>
            <Link href="/rarity">
              <button className="button">Rarity Chart</button>
            </Link>
          </div>
        </div>
      </div>
      {/* Roadmap */}
      <div className={st.roadmap} id="section4">
        <img className={st.bannerCorner1} src="./assets/corner1.png" alt="" />
        <img className={st.bannerCorner2} src="./assets/corner2.png" alt="" />
        <div className="box">
          <div className={st.roadmapContent}>
            <div className={st.roadmapHead}>
              <h2>ASSMAP</h2>
              <img src="./assets/hero.png" alt="" />
            </div>
            <div className={st.roadmapBox}>
              <img
                className={st.roadmapImg1}
                src="./assets/corner1.png"
                alt=""
              />
              <h3>Phase 1</h3>
              <ul>
                <li>Build team and get to work</li>
              </ul>
            </div>
            <div className={st.roadmapBox}>
              <img
                className={st.roadmapImg1}
                src="./assets/corner1.png"
                alt=""
              />
              <h3>Phase 2</h3>
              <ul>
                <li>Complete and deploy 6969 assets on Solana Mainnet</li>
              </ul>
            </div>
            <div className={st.roadmapBox}>
              <img
                className={st.roadmapImg1}
                src="./assets/corner1.png"
                alt=""
              />
              <h3>Phase 3</h3>
              <ul>
                <li>Build a collective of fun and humorous people.</li>
                <li>
                  Arrange interactive community contests, rewards, and
                  entertainment.
                </li>
                <li>
                  10% of all royalties go towards community wallet, utilization
                  determined by community.
                </li>
              </ul>
            </div>
            <div className={st.roadmapBox}>
              <img
                className={st.roadmapImg1}
                src="./assets/corner1.png"
                alt=""
              />
              <h3>Phase 4: Develop the DeadAss Brand</h3>
              <ul>
                <li>Create IRL physical DeadAss underwear.</li>
                <li>Create a mixtape with songs from relevant artists.</li>
                <li>
                  DeadAss short film, featuring some of our favourite asses.
                </li>
                <li>Collaborations with other artists and entertainers.</li>
                <li>Partnerships with other awesome SOL projects.</li>
                <li>Orchestrate/Participate in Charitable ventures.</li>
              </ul>
            </div>
            <div className={st.roadmapBox}>
              <img
                className={st.roadmapImg1}
                src="./assets/corner1.png"
                alt=""
              />
              <h3>Phase 5: Deadass who Knows?!</h3>
              <ul>
                <li>Let's make some magic happen.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={st.banner + " " + st.breadz} id="section3">
        <img className={st.roadmapHero} src="./assets/breadz.jpeg" alt="" />
        <div className="box">
          <div className={st.bannerContent}>
            <h2>Bread Boyz Coming Soon!</h2>
            {/* <h3>
              10+ body types, and 200+ attributes which could create over 2
              Million Variations 6969 have been generated and deployed on chain.
              Click the button below to check some of them.
            </h3> */}
            <a href="https://www.breadz.io/Home">
              <button className="button">Visit Breadz.io</button>
            </a>
          </div>
        </div>
      </div>
      {/* Marquee */}
      <div className={st.marquee}>
        <div className="box">
          <div className={st.marqueeContent}>
            <Marquee
              gradientColor={[52, 211, 153]}
              gradient={false}
              loop={0}
              speed={100}
              gradientWidth={50}
            >
              <img src="./assets/sp1.png" alt="" />
              <img src="./assets/sp2.png" alt="" />
              <img src="./assets/sp3.png" alt="" />
              <img src="./assets/sp4.png" alt="" />
              <img src="./assets/sp5.png" alt="" />
              <img src="./assets/sp6.png" alt="" />
              <img src="./assets/sp7.png" alt="" />
              <img src="./assets/sp8.png" alt="" />
              <img src="./assets/sp9.png" alt="" />
              <img src="./assets/sp10.png" alt="" />
            </Marquee>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className={st.footer}>
        <div className="box">
          <p>Copyright © 2021 Deadass. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
