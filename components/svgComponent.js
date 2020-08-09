// import * as React from 'react';
// import "./other-actions.module.css";
// import { Link } from "react-router-dom";

function goToPlayStore() {
  console.log('hi there');
}
function SvgComponent(props) {
  // console.log(props);
  return (
    <div>
      <svg
        className="orange"
        viewBox="0 0 1200 1200"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        {...props}
        // width="70px"
        height="0.5in"
      >
        {props.children}
      </svg>
    </div>
  );
}

export default SvgComponent;
