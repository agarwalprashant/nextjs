import React, { Component, Fragment } from 'react';
import ReactPlayer from 'react-player';
// import { useRouter } from 'next/router';

import NewMobileComponent from '../components/NewMobileComponent';
import NewDesktopComponent from '../components/NewDesktopComponent';

import axios from 'axios';

const Player = ({ sound, video, user, msg, url }) => {
  // Declare a new state variable with the "useState" Hook
  const [width, setWidth] = React.useState();
  const [height, setHeight] = React.useState();
  //   const [playing, setPlaying] = React.useState(false);
  const breakpoint = 720;

  //state/hook for fetching data
  // const [sound, setSound] = React.useState({});
  // const [user, setUser] = React.useState({});
  // const [video, setVideo] = React.useState({});

  // console.log('hi there', sound);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(
  //       'https://hn.algolia.com/api/v1/search?query=redux'
  //     );

  //     setData(result.data);
  //   };

  //   fetchData();
  // }, []);

  // React.useEffect(async () => {
  //   const fetchData = async () => {
  //     var data = JSON.stringify({
  //       videoId: 'aA62pBM4ATaan1pASa1',
  //       user: true,
  //       sound: true,
  //       video: true,
  //     });

  //     var config = {
  //       method: 'post',
  //       url: 'http://52.66.237.36:8183/v1/fetchMetadata',
  //       headers: {
  //         os: 'desktop',
  //         osVersion: '9.1',
  //         appVersion: '1.2.26',
  //         deviceId: 'testDevice2',
  //         'Content-Type': 'application/json',
  //       },
  //       data: data,
  //     };

  //     const result = await axios(config);

  //     console.log('result', result.data);
  //     console.log('sound', result.data.sound);
  //     // console.log('user', result.user);
  //     // console.log('video', result.video);
  //     setSound(result.data.sound);
  //     setUser(result.data.user);
  //     setVideo(result.data.video);
  //   };

  //   fetchData();
  // }, []);

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  // console.log('inside mobileComponent width', width);
  // console.log('inside mobileComponent height', height);
  return width < breakpoint ? (
    <NewMobileComponent
      width={width}
      height={height}
      sound={sound}
      video={video}
      user={user}
      msg={msg}
      url={url}
    />
  ) : (
    <NewDesktopComponent
      width={width}
      height={height}
      sound={sound}
      video={video}
      user={user}
    />
    // <></>
  );

  // const router = useRouter();
  // const { id } = router.query;
  // return (
  //   <>
  //     {!sound.name && <h1>loading...</h1>}
  //     <ul>
  //       {/* {data.user.map((item) => (
  //       <li key={item.objectID}>
  //         <a href={item.url}>{item.title}</a>
  //       </li>
  //     ))} */}

  //       {sound.name}
  //     </ul>
  //   </>
  // );
};

Player.getInitialProps = async ({ query }) => {
  // console.log('context', query.id);
  var data = JSON.stringify({
    videoId: query.id,
    user: true,
    sound: true,
    video: true,
  });

  var config = {
    method: 'post',
    url: `${process.env.fetchURL}/v1/fetchMetadata`,
    headers: {
      os: 'desktop',
      osVersion: '9.1',
      appVersion: '1.2.26',
      deviceId: 'testDevice2',
      'Content-Type': 'application/json',
    },
    data: data,
  };

  var shareConfig = {
    method: 'post',
    // url: 'http://52.66.237.36:8183/v1/shareUrl',
    url: `${process.env.shareURL}`,
    method: 'post',
    headers: {
      os: 'desktop',
      osVersion: '9.1',
      appVersion: '1.2.26',
      deviceId: 'testDevice1',
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({ type: 'video', id: 'x4zLKXK10s44RWwYirO' }),
  };

  const result = await axios(config);
  const shareResult = await axios(shareConfig);

  console.log('share result', shareResult.data);
  // console.log('sound', result.data.sound);
  // const json = await res.json()
  // return { stars: json.stargazers_count }
  return {
    sound: result.data.sound,
    video: result.data.video,
    user: result.data.user,
    msg: shareResult.data.msg,
    url: shareResult.data.url,
  };
};

export default Player;
