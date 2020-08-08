import { useState } from "react";
import "../styles/global.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";

export default function App({ Component, pageProps }) {
  const [count, setCount] = useState(34);
  return <Component {...pageProps} />;
}
