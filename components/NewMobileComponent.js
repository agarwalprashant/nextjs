import React, { Component, Fragment } from 'react';
import ReactPlayer from 'react-player';
import styles from './NewMobileComponent.module.css';

import MobileActionsFooter from './MobileActionsFooter';
import MobileActionsSideBar from './MobileActionsSideBar';
import UserDetails from './userDetails';

// import { useSpring, animated } from 'react-spring';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faSearch,
  faHome,
  faPlay,
  faPause,
  faComment,
  faHeart,
  faRing,
  faShare,
  faRetweet,
  faCompactDisc,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';

const isBrowser = () => typeof window !== 'undefined';

export default ({ width, height, video, sound, user }) => {
  // const props = useSpring({
  //   config: { duration: 4000 },
  //   // opacity: 0,
  //   from: { opacity: 1 },
  //   to: { opacity: 0 },
  // });
  const [playing, setPlaying] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(false);

  const playAudio = () => {
    console.log('playAudio function called', playing);
    setPlaying(!playing);
  };

  const videoEnded = () => {
    setPlaying(!playing);
  };

  // console.log('inside mobileComponent width', width);
  // console.log('inside mobileComponent height', height);

  console.log('inside mobile component video', video);
  return (
    <>
      {/* <animated.div style={props}>
        <div className={styles.splash}>
          <div className={styles.typewriter}>
            <h1>Mitron TV</h1>
          </div>
        </div>
      </animated.div> */}
      <div
        onContextMenu={(e) => e.preventDefault()}
        className={styles.playerWrapper}
        style={{ height: height }}
      >
        <ReactPlayer
          className={styles.reactPlayer}
          url={video.videoUrl}
          // url={
          //   'https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/39.mp4'
          // }
          width="100%"
          height="100%"
          style={{ objectFit: 'none' }}
          playing={playing}
          position="absolute"
          onEnded={videoEnded}
          // light={true}
        />
        <UserDetails user={user} sound={sound} />
        <MobileActionsFooter />
        <MobileActionsSideBar
          playAudio={playAudio}
          playing={playing}
          video={video}
          user={user}
        />
      </div>
    </>
  );
};
