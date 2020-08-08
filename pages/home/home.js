import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import styles from './home.module.css';
import SvgComponent from '../../components/svgComponent';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>My styled page</title>
        <link href="/vendors/css/grid.css" rel="stylesheet" />
      </Head>
      <header>
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
                <Link href="/gallery/gallery">
                  <a>Watch Video Now</a>
                </Link>
              </li>
            </ul>
            {/* <a className="mobile-nav-icon">
              <i className="ion-navicon-round"></i>
            </a> */}
          </div>
        </nav>
      </header>

      <section className={styles[`main-heading`]}>
        <div className="row heading-container">
          <div className={styles[`brand--heading`]}>
            <h1>Make Your Day</h1>
          </div>
          <div className={styles[`brand--subheading`]}>
            <h3>Real People.Real Videos.</h3>
          </div>
        </div>
      </section>
      <section className={styles[`section-videos`]}>
        <ul className={styles[`meals-showcase`]}>
          <li>
            <figure className={styles[`meal-photo`]}>
              <img
                src="/images/img/tiktok3.jpg"
                alt="Korean bibimbap with egg and vegetables"
              />
            </figure>
          </li>
          <li>
            <figure className={styles[`meal-photo`]}>
              <img
                src="/images/img/tiktok4.jpg"
                alt="Simple italian pizza with cherry tomatoes"
              />
            </figure>
          </li>
          <li>
            <figure className={styles[`meal-photo`]}>
              <img
                src="/images/img/tiktok5.jpg"
                alt="Chicken breast steak with vegetables"
              />
            </figure>
          </li>
          <li>
            <figure className={styles[`meal-photo`]}>
              <img src="/images/img/tiktok3.jpg" alt="Autumn pumpkin soup" />
            </figure>
          </li>
        </ul>
      </section>
      <section className={styles[`section-download`]}>
        <div className={styles[`section-download--phonenumber`]}>
          <h3>Text yourself a link to download MitronTV App</h3>
          <input type="number" className={styles.number} />
          <button className={styles.send}>Send</button>
        </div>
        <div className={styles[`section-download--storeLinks`]}>
          <h3>Download Now</h3>
          <div className={styles.btnWrapper}>
            <div style={{ margin: 10 }}>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.mitron.tv"
              >
                <img
                  src="/images/googleStore.png"
                  width="140px"
                  height="50px"
                />
              </a>
            </div>
            <div style={{ margin: 10 }}>
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=com.mitron.tv"
              >
                <img src="/images/appStore.png" width="150px" height="50px" />
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <style jsx>{`
        .heading-container {
        }
      `}</style>
    </>
  );
};

export default Home;
