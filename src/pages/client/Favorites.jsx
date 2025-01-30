import Header from "../../ui/Header";
import { useState } from "react";
import StylesList from "../../ui/StylesList";
import FavoriteCard from "../../ui/FavoriteCard";
import ControlPanel from "../../ui/ControlPanel";
import useMobileScreen from "../../Hooks/useMobileScreen";
const styles = ["all", "summer", "T-shirts", "shirts"];
export default function Favorites() {
  const [isGrid, setIsGrid] = useState(false);
  const isMobile = useMobileScreen();
  return (
    <>
      <Header>Favorites</Header>
      <div
        className={` container h-max grid  grid-rows-[5rem,5rem,1fr] gap-x-10 ${
          isMobile
            ? ""
            : "grid-cols-[minmax(220px,305px),minmax(350px,1fr)] gap-y-5"
        }`}
      >
        <StylesList styles={styles} />
        <ControlPanel isGrid={isGrid} setIsGrid={setIsGrid} />
        <div
          className={`${
            isMobile
              ? `col-start-1 col-end-3 row-start-3 row-end-4 ${
                  isGrid
                    ? "grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-10 justify-items-center w-full"
                    : "w-[-webkit-fill-available]"
                }`
              : "grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-10 justify-items-center w-full col-start-2 col-end-3 row-start-2 row-end-4 "
          }`}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <FavoriteCard
              direction={
                isMobile ? (isGrid ? "vertical" : "horizontal") : "vertical"
              }
              key={i}
            />
          ))}
        </div>
      </div>
    </>
  );
}
