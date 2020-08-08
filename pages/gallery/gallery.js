import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";
import styles from "./gallery.module.css";

import ReactPlayer from "react-player";

export default ({}) => {
  const urls = [
    `https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/39.mp4`,
    `https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/29.mp4`,
    `https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/28.mp4`,
    `https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/41.mp4`,
    `https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/42.mp4`,
    `https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/44.mp4`,
    `https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/43.mp4`,
    `https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/45.mp4`,
    `https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/46.mp4`,
    `https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/47.mp4`,
    `https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/48.mp4`,
    `https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/49.mp4`,
    `https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/50.mp4`,
    `https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/51.mp4`,
    `https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/52.mp4`,
    `https://mitrontv.s3.ap-south-1.amazonaws.com/upload/video/53.mp4`,
  ];
  return (
    <>
      {/* <Layout home> */}
      <Head>
        <title>Video Gallery</title>
      </Head>
      <div>
        <div className={styles.wrapper}>
          <h1>Mitron Video gallery</h1>

          <div className={styles.imgArea}>
            {urls.map((url) => {
              return (
                <div>
                  <ReactPlayer
                    className={styles.singleImg}
                    url={url}
                    width={"20vw"}
                    height={"70vh"}
                    controls={true}
                    playing={false}
                    // loop={true}
                    volume={1}
                    //   muted={true}
                    // light={true}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <h2>
          <Link href="/player/responsive-player">
            <a>Back to Video Player</a>
          </Link>
        </h2>
      </div>
      {/* </Layout> */}
    </>
  );
};
