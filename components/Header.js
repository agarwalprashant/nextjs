import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import styles from './header.module.css';
// import SvgComponent from '../../components/svgComponent';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>My styled page</title>
        <link href="/vendors/css/grid.css" rel="stylesheet" />
      </Head>
      <header>
        {/* <header onContextMenu={(e) => e.preventDefault()}> */}
        <nav>
          <div className={styles[`nav--header`]}>
            <img
              src="/images/img/brand.png"
              alt="Omnifood logo"
              className={styles.logo}
            />

            <ul className={styles[`main-nav`]}>
              <li>
                <a href="#features">Home</a>
              </li>
              <li>
                <a href="#works">About</a>
              </li>
              <li>
                <a href="#cities">Trending</a>
              </li>
              <li className={styles.watchVideo}>
                {/* <Link href="/home/home"> */}
                <Link href="#">
                  <a target="_blank">Watch Video Now</a>
                </Link>
              </li>
            </ul>
            {/* <a className="mobile-nav-icon">
              <i className="ion-navicon-round"></i>
            </a> */}
          </div>
        </nav>
      </header>

      <style jsx>{`
        .heading-container {
        }
      `}</style>
    </>
  );
};

export default Home;
