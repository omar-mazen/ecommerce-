import { useState } from "react";
import Filters from "./Filters";
import SortBy from "./SortBy";
import useMobileScreen from "../Hooks/useMobileScreen";
import BottomSheetModal from "./BottomSheetModal";

export default function ControlPanel({ isGrid, setIsGrid }) {
  const isMobile = useMobileScreen();
  return isMobile ? (
    <MobileControlPanel isGrid={isGrid} setIsGrid={setIsGrid} />
  ) : (
    <LargeScreenControlPanel isGrid={isGrid} setIsGrid={setIsGrid} />
  );
}
function MobileControlPanel({ isGrid, setIsGrid }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  return (
    <div className="flex items-center justify-between text-xl row-start-2 row-end-3 col-start-1 col-end-3">
      <div
        className=" cursor-pointer flex items-center gap-2 "
        onClick={() => setIsFilterOpen(true)}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48zm-80 112H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48zm-96 112h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48z"></path>
        </svg>
        <span>Filters</span>
        <BottomSheetModal
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          header="Filters"
        >
          <div className=" container">
            <Filters />
          </div>
        </BottomSheetModal>
      </div>
      <div
        className=" cursor-pointer flex items-center gap-2"
        onClick={() => setIsSortOpen(true)}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 9l4 -4l4 4m-4 -4v14"></path>
          <path d="M21 15l-4 4l-4 -4m4 4v-14"></path>
        </svg>
        <span>Sort by</span>
        <BottomSheetModal
          header="Sort by"
          isOpen={isSortOpen}
          onClose={() => setIsSortOpen(false)}
        >
          <SortBy />
        </BottomSheetModal>
      </div>
      <div className="w-20 text-right" style={{ textAlign: "-webkit-right" }}>
        {isGrid ? (
          <span className="cursor-pointer" onClick={() => setIsGrid(false)}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M149.333 216v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zM125.333 32H24C10.745 32 0 42.745 0 56v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zm80 448H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm-24-424v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24zm24 264H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24z"></path>
            </svg>
          </span>
        ) : (
          <span className="cursor-pointer" onClick={() => setIsGrid(true)}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M204 240H68a36 36 0 0 1-36-36V68a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36zm240 0H308a36 36 0 0 1-36-36V68a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36zM204 480H68a36 36 0 0 1-36-36V308a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36zm240 0H308a36 36 0 0 1-36-36V308a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36z"></path>
            </svg>
          </span>
        )}
      </div>
    </div>
  );
}
function LargeScreenControlPanel() {
  return (
    <aside className=" col-start-1 row-start-2 row-end-4 relative top-0 h-full text-small">
      <div className="sticky top-[8.1rem] overflow-y-scroll overflow-x-hidden h-[calc(100dvh-10.35rem)] rounded-xl bg-secondary-background p-6 ">
        <div className="flex flex-col items-center space-y-10">
          <div className=" cursor-pointer flex flex-col items-center gap-2 w-full">
            <div className="flex items-center gap-2 w-full mb-3 pb-3 border-b border-text/10">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 9l4 -4l4 4m-4 -4v14"></path>
                <path d="M21 15l-4 4l-4 -4m4 4v-14"></path>
              </svg>
              <span>Sort by</span>
            </div>
            <SortBy />
          </div>
          <div className=" cursor-pointer flex flex-col items-center w-full gap-2">
            <div className="flex items-center gap-2 w-full mb-3 pb-3 border-b border-text/10">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48zm-80 112H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48zm-96 112h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48z"></path>
              </svg>
              <span>Filters</span>
            </div>
            <Filters />
          </div>
        </div>
      </div>
    </aside>
  );
}
