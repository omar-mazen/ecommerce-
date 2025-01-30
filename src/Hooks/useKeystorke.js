import { useEffect } from "react";

export default function useKeystroke(key, handler) {
  useEffect(
    function () {
      function handleClick(e) {
        if (e.key === key) handler();
      }
      document.addEventListener("keydown", handleClick);
      return () => document.removeEventListener("keydown", handleClick);
    },
    [handler, key]
  );
}
