import React, { Component, Fragment, useState } from 'react';
import ReactPlayer from 'react-player';
import styles from './NewDesktopComponent.module.css';
import SvgComponent from './svgComponent';
import Link from 'next/link';
import Head from 'next/head';
import Header from './Header';
import UserDetails from './userDetails';

// import { useSpring, animated } from 'react-spring';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  EffectCoverflow,
} from 'swiper';

import DesktopActionsFooter from './DesktopActionsFooter';
import DesktopActionsSidebar from './DesktopActionsSidebar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faMusic,
  faSmile,
  faSmileWink,
} from '@fortawesome/free-solid-svg-icons';

const isBrowser = () => typeof window !== 'undefined';

// SwiperCore.use([EffectCoverflow, Navigation, Pagination, Controller, Thumbs]);

export default ({ width, sound, video, user }) => {
  // const props = useSpring({
  //   config: { duration: 5000 },
  //   opacity: 0,
  //   from: { opacity: 1 },
  // });

  const [height, setHeight] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);

  React.useEffect(() => {
    setHeight(window.innerHeight);
  });

  const playAudio = () => {
    // console.log('playAudio function called', playing);
    setPlaying(!playing);
  };

  const videoEnded = () => {
    setPlaying(!playing);
  };

  // console.log('inside desktopComponent width', width);
  // console.log('inside desktopComponent height', height);
  // console.log('video', video, `${video.videoUrl}`);

  return (
    <>
      <Head>
        <title>MitronTV Video Player</title>
      </Head>
      {/* <animated.div style={props}>
        <div className={styles.splash}>Welcome to MitronTV</div>
      </animated.div> */}
      {/* <div className={styles.typewriter}>
        <h1>Mitron TV</h1>
      </div> */}
      <Header />

      <div
        onContextMenu={(e) => e.preventDefault()}
        className={styles.playerWrapper}
        style={{ width: width, height: height }}
      >
        <div className={styles.wrapper}>
          <div className={styles.onlyPlayerWrapper}>
            {/* <div className={styles.brand}>
              <SvgComponent viewBox="0 0 4000 4000">
                <path
                  fill="#ff4f00"
                  d="M1937.87 1628.86l-473.69-403.64s-156.73 57.34-156.73 187.31v1399.1c0 298.17-271.41 569.58-638.39 623.09C298.26 3488.24.09 3308.57.09 3010.4c0-298.17 298.17-581.04 665.15-630.74 252.3-34.41 363.16 42.05 363.16 42.05V781.78c0-191.14 152.9-386.09 340.21-439.61l569.26 378.59 824.98-707.42c187.31-53.52 340.22 57.34 344.04 244.65v2289.78c0 298.17-301.99 573.4-668.97 619.27-370.8 45.87-668.97-141.44-668.97-439.61s298.17-573.41 672.79-623.09c248.47-30.59 389.92 49.69 389.92 49.69V1030.17c0-137.61-152.91-87.93-152.91-87.93l-740.89 686.6z"
                />
              </SvgComponent>
            </div> */}
            <ReactPlayer
              className={styles.reactPlayer}
              // ref="player"
              url={video.videoUrl}
              width="100%"
              height="100%"
              playing={playing}
              onEnded={videoEnded}

              // loop={true}
              // volume={1}
              //   controls={true}
              //   muted={true}
              //   light={true}
            />
            <UserDetails user={user} sound={sound} />
            <DesktopActionsFooter />
            <DesktopActionsSidebar
              playAudio={playAudio}
              playing={playing}
              video={video}
              user={user}
            />
          </div>

          <div className={styles.sideBar}>
            <header className={styles.header}>
              <img src={user.profilePic} className={styles.profileImg} />
              <div>
                <div className={styles.name}>
                  <div>
                    {user.firstName} {user.lastName}
                  </div>
                </div>
                <div className={styles.handle}>
                  <div>
                    {`@`}
                    {user.username}
                  </div>
                </div>
                <div className={styles.musicLabel}>
                  <div>
                    {' '}
                    <FontAwesomeIcon
                      icon={faMusic}
                      size="2x"
                      color="#ff"
                    />{' '}
                    {sound.name}
                  </div>
                </div>
              </div>

              {/* <button>...</button> */}
            </header>
            <main className={styles.commentBox}>
              <div className={styles.hashTags}>
                {`#Dance #Mitron #feelIt #Bloopers `}
                <FontAwesomeIcon
                  icon={faSmileWink}
                  size="1x"
                  color="orange"
                />{' '}
                <FontAwesomeIcon icon={faSmile} size="1x" color="orange" />{' '}
                <FontAwesomeIcon icon={faSmile} size="1x" color="orange" />{' '}
              </div>
              {/* <div className={styles.comments}>
                <Link href="/gallery/gallery">
                  <a>Go to Video Gallery</a>
                </Link>
              </div> */}
            </main>
            <div style={{ marginBottom: '15px' }}>
              {user.videoLikeCount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
              Likes
            </div>
            <footer>
              <header className={styles.scanQR}>
                Scan the QR code to download and watch more videos on MitronTV
              </header>
              <main className={styles.socialWrapper}>
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
                      <img
                        src="/images/appStore.png"
                        width="150px"
                        height="50px"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <img src="/images/QR2.jpg" width="100px" height="100px" />
                </div>
              </main>
            </footer>
          </div>
        </div>
      </div>
      {/* <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={(swiper) => console.log("Swiper initialized!", swiper)}
        onSlideChange={(swiper) => {
          console.log("Slide index changed to: ", swiper.activeIndex);
        }}
        onReachEnd={() => console.log("Swiper end reached")}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          shadowOffset: 1,
          shadowScale: 0.15,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="2"
      >
        {slides}
      </Swiper> */}
    </>
  );
};
