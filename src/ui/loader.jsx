import { useTheme } from "../context/Theme";

export default function Loader() {
  const { theme } = useTheme();
  return (
    <div className="fixed top-1/2 right-1/2 translate-x-[50%] translate-y-[-50%]  h-dvh w-full bg-primary-background z-[999]">
      <div
        className={`rays ${
          theme == "dark"
            ? 'before:bg-[url("../public/versace-logo-white.svg")]'
            : 'before:bg-[url("../public/versace-logo-black.svg")]'
        }`}
      ></div>
    </div>
  );
}
