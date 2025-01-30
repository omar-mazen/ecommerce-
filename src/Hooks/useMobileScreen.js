import { useEffect, useState } from "react";
const mobiles = [
  /Android/i,
  /webOS/i,
  /iPhone/i,
  /iPad/i,
  /iPod/i,
  /BlackBerry/i,
  /Windows Phone/i,
];

export default function useMobileScreen() {
  const [isMobile, setIsMobile] = useState(navigator.userAgent.match(mobiles));
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(
        window.innerWidth <= 640 || navigator.userAgent.match(mobiles)
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}
