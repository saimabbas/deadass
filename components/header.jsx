import React from "react";
import st from "../styles/components/header.module.css";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Header = (props) => {
  return (
    <div className={st.header}>
      <div className="box">
        <div className={st.headerContent}>
          {props.goToHome ? (
            <Link href="/">
              <img
                className={st.headerLeft}
                src="./assets/logo.png"
                alt="Logo"
              />
            </Link>
          ) : null}
          {props.goToTop ? (
            <img
              className={st.headerLeft}
              onClick={props.moveTo1}
              src="./assets/logo.png"
              alt="Logo"
            />
          ) : null}

          <div className={st.headerRight}>
            {props.showLinks ? (
              <>
                <span onClick={props.moveTo2}>GRID</span>
                <span onClick={props.moveTo3}>RARITY CHART</span>
                <span onClick={props.moveTo4}>ASSMAP</span>
              </>
            ) : null}
            <a
              className={st.headerDiscord}
              href="https://discord.com/invite/BeYDXSjekW"
            >
              <FaDiscord />
            </a>
            <a
              className={st.headerTwitter}
              href="https://twitter.com/deadasssol"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
