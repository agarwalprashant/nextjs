import { Component, Fragment } from 'react';
import styles from './mobile-actions-footer.module.css';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import SvgComponent from './svgComponent';

export default class actions1 extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.footerBox}>
          <img
            src="/images/home.png"
            alt="React Logo"
            width="25"
            height="25"
            style={{ marginTop: '2%' }}
          />

          {/* <SvgComponent>
            <path
              fill="#ff4f00"
              d="M394.18 41.2c-1.15 0-2.3.02-3.44.07-1.15-.05-2.29-.07-3.44-.07v.3a79.434 79.434 0 00-44.74 18.76c-9.29 7.94-18.5 15.41-27.72 23.11C214.19 167.3 113.34 251.3 12.32 335.39a40.215 40.215 0 00-15.28 31.54c0 .5.02 1.01.03 1.5v48.21c0 18.9 5.64 24.3 24.86 23.83H90c10.96 0 12.94 2.07 13.02 13.11l41.92 243.59c0 34.31 20.65 55.04 55.12 54.96 37.73 0 66.13 0 89.06-.01V556.16c0-25.22 20.64-45.86 45.86-45.86h111.53c25.22 0 45.86 20.64 45.86 45.86v195.96c22.93.01 51.33.01 89.06.01 34.47.08 55.12-20.65 55.12-54.96l41.92-243.59c.08-11.04 2.06-13.11 13.02-13.11h68.07c19.22.48 24.86-4.93 24.86-23.83v-48.21a40.185 40.185 0 00-15.25-33.04C668.14 251.31 567.3 167.3 466.65 83.37c-9.22-7.7-18.43-15.17-27.72-23.11a79.434 79.434 0 00-44.74-18.76v-.3z"
            />
          </SvgComponent> */}
          {/* <SvgComponent orange="orange" width="0.3in" height="0.3in">
            <path d="M3149.6 3842.5V157.48C3149.6 70.55 3079.05 0 2992.12 0H1007.88C920.95 0 850.4 70.55 850.4 157.48V3842.5c0 61.1 35.28 116.54 90.71 142.68 55.12 25.51 120.63 17.95 167.56-21.73l902.67-752.44 878.11 751.18c29.29 24.88 65.51 37.8 102.37 37.8 22.36 0 44.72-4.72 65.83-14.48 56.06-25.83 91.96-81.58 91.96-143zM2834.64 314.95v393.7H1165.36v-393.7h1669.28zm-719.37 2570.39c-58.27-49.76-144.25-50.08-203.46-1.26l-746.45 622.05V1023.62h1669.28v2476.53l-719.37-614.8z" />
          </SvgComponent> */}
          <img
            src="/images/Search.png"
            alt="React Logo"
            width="25"
            height="25"
            style={{ marginTop: '2%' }}
            className="svg"
          />

          {/* <SvgComponent viewBox="0 0 8000 8000">
            <path
              fill="white"
              d="M1571.26 571.58v285.69c393.81 0 714.21 320.39 714.21 714.21h285.68c0-551.37-448.52-999.9-999.89-999.9zM2942.4 2336.54c126.99-226.69 200.12-487.38 200.12-765.06C3142.52 705.14 2437.59.22 1571.26.22S0 705.14 0 1571.48c0 866.33 704.93 1571.26 1571.26 1571.26 277.69 0 538.37-73.14 765.06-200.12l932.33 931.04c81.42 81.42 188.84 126.13 302.39 126.13 113.56 0 220.98-44.71 301.83-125.42 81.98-80.99 127.13-188.55 127.13-303.11s-45.14-222.12-126.41-302.4l-931.19-932.33zM285.68 1571.48c0-708.78 576.8-1285.58 1285.58-1285.58s1285.58 576.8 1285.58 1285.58-576.8 1285.57-1285.58 1285.57-1285.58-576.8-1285.58-1285.57zm3385.93 2100.2c-55 54.85-146.13 54.85-200.98 0l-894.62-893.33a1590.202 1590.202 0 00202.12-202.12l894.05 895.33c27.14 26.85 42.14 62.28 42.14 99.85 0 37.57-15 72.85-42.7 100.28z"
            />
          </SvgComponent> */}

          <SvgComponent viewBox="0 0 4000 4000">
            <path
              fill="#ff4f00"
              d="M1937.87 1628.86l-473.69-403.64s-156.73 57.34-156.73 187.31v1399.1c0 298.17-271.41 569.58-638.39 623.09C298.26 3488.24.09 3308.57.09 3010.4c0-298.17 298.17-581.04 665.15-630.74 252.3-34.41 363.16 42.05 363.16 42.05V781.78c0-191.14 152.9-386.09 340.21-439.61l569.26 378.59 824.98-707.42c187.31-53.52 340.22 57.34 344.04 244.65v2289.78c0 298.17-301.99 573.4-668.97 619.27-370.8 45.87-668.97-141.44-668.97-439.61s298.17-573.41 672.79-623.09c248.47-30.59 389.92 49.69 389.92 49.69V1030.17c0-137.61-152.91-87.93-152.91-87.93l-740.89 686.6z"
            />
          </SvgComponent>

          {/* <SvgComponent>
            <path
              fill="white"
              d="M712.85 38.36H68.62c-39.37 0-71.59 32.21-71.59 71.59v451.29c0 39.37 32.21 71.59 71.59 71.59h214.31c6 .83 10.61 4.28 13.83 9.09l44.66 83.76c20.47 39.07 78.16 39.07 98.63 0l44.66-83.76c3.22-4.82 7.83-8.26 13.83-9.09h214.3c39.37 0 71.59-32.21 71.59-71.59V109.95c0-39.37-32.21-71.59-71.59-71.59z"
            />
          </SvgComponent> */}
          <img
            src="/images/chat.png"
            alt="React Logo"
            width="25"
            height="25"
            style={{ marginTop: '2%' }}
            className="svg"
          />

          {/* <SvgComponent>
            <path
              fill="white"
              d="M685.19 564.41L514.34 454.97c-4.72-3.15-10.24-6.3-15.74-8.66-20.47-10.23-22.83-39.37-4.72-52.75 41.72-31.49 69.28-81.88 69.28-138.57v-74.8c.79-93.69-72.43-174-166.12-177.14-98.41-3.15-179.51 75.58-179.51 173.2v78.73c0 56.69 27.56 107.07 69.28 138.57 18.11 14.17 16.53 42.52-4.72 52.75-5.51 2.36-11.02 5.51-15.74 8.66L96.29 564.4c-125.97 79.52-85.82 225.96 101.56 225.96h385.78c187.38 0 227.53-146.44 101.56-225.96z"
            />
          </SvgComponent> */}
          <img
            src="/images/profile.png"
            alt="React Logo"
            width="25"
            height="25"
            style={{ marginTop: '2%' }}
            className="svg"
          />
        </div>
      </Fragment>
    );
  }
}
