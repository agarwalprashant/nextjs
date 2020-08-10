import { Component, Fragment } from 'react';
import ReactPlayer from 'react-player';
import styles from './mobile-actions-sidebar.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// import homeLogo from "./icons/home.svg";
// import { ReactComponent as ReactLogo } from './flash.svg';
// import searchLogo from "./icons/Search.svg";
// import brandLogo from "./icons/M.svg";
// import comments from "./icons/comments.svg";
// import profile from "./icons/profile.svg";
// import share from "./icons/share.svg";
// import chat from "./icons/chat.svg";
// import heart from "./icons/heart.svg";

import ReactModalBox from './react-modal-box';

import SvgComponent from './svgComponent';

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

export default class OtherActions2 extends Component {
  triggerChildModalOpen = () => {
    console.log(' share button Click');
    this.refs.childModal.handleOpenModal();
  };
  render() {
    return (
      <Fragment>
        <div className={styles.sideBox}>
          {/* <FontAwesomeIcon icon={faPlusCircle} size="2x" color="orange" /> */}

          {/* <SvgComponent orange="orange" width="2in" height="2in">
            <path d="M350.35 219.47c0-22.3 18.09-40.38 40.38-40.38 22.3 0 40.38 18.08 40.38 40.38v136.8h136.81c22.3 0 40.38 18.09 40.38 40.38 0 22.3-18.08 40.38-40.38 40.38H431.11v136.81c0 22.3-18.09 40.38-40.38 40.38-22.3 0-40.38-18.08-40.38-40.38V437.03h-136.8c-22.3 0-40.38-18.09-40.38-40.38 0-22.3 18.08-40.38 40.38-40.38h136.8v-136.8z" />
          </SvgComponent> */}

          {/* <SvgComponent viewBox="0 0 900 900">
            <path
              fill="#ff4f00"
              d="M409.45 715.48a32.792 32.792 0 01-7.82 3.88c-3.41 1.2-6.96 1.81-10.47 1.81-3.52 0-7.07-.61-10.48-1.78-2.76-.94-5.43-2.28-7.91-3.98-74.39-44.48-170.7-110.11-243.03-189.51C54.16 442.93 4.43 344.95 29.66 239.15l.06.02c9.96-44.05 29.79-79.51 56.02-106.15 25.27-25.65 56.36-42.98 90.22-51.84 33.38-8.73 69.42-9.16 105.11-1.14 37.28 8.38 74.22 25.99 107.34 52.97 18.25-19.19 42.37-33.81 68.56-43.77 39-14.83 83.41-19.49 119.39-13.44 43.22 7.23 79.29 23.88 108.28 49.22 29.3 25.61 50.89 59.81 64.83 101.83l.47 1.23c30.18 111.07-17.88 210.65-93.61 294.56C583.81 603 485.81 668.7 409.46 715.48zM165.57 493.29C232 566.2 320.67 627.41 391.06 669.95c72.38-44.69 162.81-106.13 229.24-179.74 65.67-72.77 107.75-157.66 82.81-249.43l.06-.01c-11.18-33.1-27.95-59.75-50.38-79.35-22.12-19.33-50.23-32.14-84.4-37.85-28.04-4.71-63.12-.9-94.36 10.98-26.29 10-49.24 25.55-61.5 46.17l-15.81 26.61-22.01-21.68c-31.25-30.79-67.67-50.18-104.25-58.4-28.15-6.33-56.39-6.04-82.36.75-25.5 6.67-48.88 19.7-67.85 38.95-20.19 20.5-35.54 48.23-43.38 83.1v.28c-20.76 87.07 22.91 170.74 88.7 242.96z"
            />
          </SvgComponent> */}
          <div
            className={styles.profilePicWrapper}
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                'https://play.google.com/store/apps/details?id=com.mitron.tv&hl=en_IN';
            }}
          >
            <img
              src={this.props.user.profilePic}
              alt="React Logo"
              className={styles.profilepic}
            />
            <div
              onClick={(e) => {
                e.preventDefault();
                window.location.href =
                  'https://play.google.com/store/apps/details?id=com.mitron.tv&hl=en_IN';
              }}
            >
              <img
                src="/images/follow.png"
                alt="React Logo"
                width="20"
                height="20"
                className={styles.followBtn}
              />
            </div>
          </div>

          <div
            style={{ textAlign: 'center' }}
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                'https://play.google.com/store/apps/details?id=com.mitron.tv&hl=en_IN';
            }}
          >
            <img
              src="/images/heart.png"
              alt="React Logo"
              width="30"
              height="30"
              className="svg"
            />
            <span className={styles.likesCount}>
              {this.props.video.likeCount}
            </span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img
              src="/images/comments.png"
              alt="React Logo"
              width="30"
              height="30"
              className="svg"
            />
            <span className={styles.likesCount}>
              {this.props.video.commentCount}
            </span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img
              src="/images/share.png"
              alt="React Logo"
              width="30"
              height="30"
              className="svg"
              onClick={this.triggerChildModalOpen}
            />
            <span className={styles.likesCount}>
              {this.props.video.shareCount}
            </span>
          </div>

          {/* <SvgComponent viewBox="0 0 900 900">
            <path
              fill="#ff4f00"
              d="M33.65 193.3c0-37.87 15.36-72.21 40.2-97.09 24.89-24.93 59.2-40.35 97.07-40.35h439.61c37.84 0 72.17 15.43 97.07 40.37 24.84 24.88 40.21 59.21 40.21 97.08v473.15c0 17.03-3.13 31.29-8.7 42.34-5.97 11.82-14.66 20.17-25.55 24.8-10.9 4.65-22.92 5.11-35.54 1.19h-.11c-11.63-3.62-23.96-11.28-36.25-23.19l-90.16-87.39H171.42c-37.95 0-72.36-15.39-97.31-40.26-24.99-24.93-40.46-59.3-40.46-97.19V193.3zm79.48-58.03c-14.78 14.8-23.92 35.32-23.92 58.03v293.46c0 22.68 9.16 43.15 23.96 57.91 14.85 14.81 35.45 23.98 58.25 23.98h391.22l19.31 7.92 98.33 95.31c4.05 3.92 7.6 6.7 10.62 8.4.87-3.37 1.34-7.98 1.34-13.83V193.3c0-22.7-9.15-43.21-23.93-58.02-14.72-14.75-35.15-23.87-57.79-23.87H170.91c-22.65 0-43.08 9.12-57.8 23.86z"
            />
          </SvgComponent> */}
          <div>
            {/* <button
            onClick={() => this.setState({ playing: !this.state.playing })}
          > */}
            {this.props.playing ? (
              <FontAwesomeIcon
                icon={faPause}
                // size="1.5x"
                color="#ff4f00"
                style={{ marginTop: '2%' }}
                // onClick={() => this.setState({ playing: !this.state.playing })}
                onClick={this.props.playAudio}
                className={styles.playIcon}
                //   spin
              />
            ) : (
              <FontAwesomeIcon
                icon={faPlay}
                // size="1.5x"
                color="#ff4f00"
                style={{ marginTop: '2%' }}
                //   spin
                // onClick={() => this.setState({ playing: !this.state.playing })}
                onClick={this.props.playAudio}
                className={styles.playIcon}
              />
            )}
            {/* </button> */}
          </div>
          <ReactModalBox ref="childModal" videoId={this.props.video.id} />
        </div>
      </Fragment>
    );
  }
}
