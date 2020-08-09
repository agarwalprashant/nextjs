import { Component, Fragment } from 'react';
import styles from './user-details.module.css';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import SvgComponent from './svgComponent';

// import {
//   faSearch,
//   faHome,
//   faComment,
//   faHeart,
//   faRing,
//   faShare,
//   faRetweet,
//   faCompactDisc,
//   faPlusCircle,
// } from "@fortawesome/free-solid-svg-icons";

export default class UserDetails extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.userDetailsWrapper}>
          <h5>
            {this.props.user.firstName} {this.props.user.lastName}
          </h5>
          <marquee behavior="scroll" direction="left" scrollamount="3">
            <p className={styles.soundName}>{this.props.sound.name}</p>
          </marquee>
        </div>
      </Fragment>
    );
  }
}
