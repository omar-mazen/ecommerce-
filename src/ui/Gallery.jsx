import { useEffect, useState } from "react";
import useSwipe from "../Hooks/useSwipe";

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe({
    onSwipeToLeft,
    onSwipeToRight,
  });
  // when color changed set current image to first image
  useEffect(() => setSelectedImage(images[0]), [images]);
  // when swipe show current image at first of scroll bar
  useEffect(() => {
    const selectedImage = document.querySelector("[aria-selected='true']");
    if (selectedImage) {
      // 40 for arrows width each of them 20
      if (window.innerWidth < 768)
        document.querySelector("#slider").scrollLeft =
          selectedImage.offsetLeft - 40;
      else
        document.querySelector("#slider").scrollTop =
          selectedImage.offsetTop - 40 - selectedImage.clientHeight;
    }
  }, [selectedImage]);

  const currentImgIndex = images.indexOf(selectedImage);

  function onSwipeToRight() {
    if (currentImgIndex > 0) {
      setSelectedImage(images.at(currentImgIndex - 1));
    } else setSelectedImage(images.at(images.length - 1));
  }
  function onSwipeToLeft() {
    if (currentImgIndex < images.length - 1) {
      setSelectedImage(images.at(currentImgIndex + 1));
    } else setSelectedImage(images.at(0));
  }
  function onClickLeft() {
    if (currentImgIndex > 0) {
      setSelectedImage(images.at(currentImgIndex - 1));
    } else setSelectedImage(images.at(images.length - 1));
  }
  function onSClickRight() {
    if (currentImgIndex < images.length - 1) {
      setSelectedImage(images.at(currentImgIndex + 1));
    } else setSelectedImage(images.at(0));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-[150px,300px] lg:grid-cols-[150px,500px] gap-5">
      <div
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="touch-pan-y flex items-center justify-between w-full px-4 pointer-events-none select-none col-start-1 col-end-3 md:col-start-2 md:col-end-3 "
      >
        <span
          className="text-gray cursor-pointer pointer-events-auto"
          onClick={onClickLeft}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="30px"
            width="30px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <img
          src={selectedImage}
          className=" h-[300px] lg:h-[500px] object-contain"
        />
        <span
          className="text-gray cursor-pointer pointer-events-auto"
          onClick={onSClickRight}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="30px"
            width="30px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <div className="flex md:flex-col w-full gap-2 h-[120px] md:h-[300px] lg:h-[500px] px-4 select-none col-start-1 col-end-3 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3">
        <span
          className={` ${
            window.innerWidth >=
            120 * (images.length - 1) + (8 * images.length - 2) + 16
              ? "hidden"
              : "flex"
          } md:!flex  items-center justify-center top-0 left-0 h-full md:h-10 md:w-full w-10 bg-black/35 cursor-pointer pointer-events-auto text-white opacity-50 hover:opacity-100`}
          onClick={onClickLeft}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="30px"
            width="30px"
            xmlns="http://www.w3.org/2000/svg"
            className=" md:rotate-90"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <ul
          id="slider"
          className="flex flex-row items-center gap-2 overflow-x-scroll md:overflow-y-scroll md:overflow-x-hidden overflow-y-hidden h-[120px] md:h-full md:flex-col md:snap-y w-full snap-x"
        >
          {images.map((img, i) => (
            <li
              aria-selected={selectedImage == img}
              key={i}
              className={`min-h-[100px] min-w-[100px] flex items-center justify-center cursor-pointer snap-start ${
                selectedImage == img ? " border-white border" : ""
              }`}
              onClick={() => {
                setSelectedImage(img);
              }}
            >
              <img src={img} className="h-[100px] pointer-events-none" />
            </li>
          ))}
        </ul>
        <span
          className={`${
            window.innerWidth >=
            120 * (images.length - 1) + (8 * images.length - 2) + 16
              ? "hidden"
              : "flex"
          } md:!flex items-center justify-center top-0 md:bottom-0 rigth-[100%] md:left-0 h-full md:h-10 w-10 md:w-full bg-black/35 cursor-pointer pointer-events-auto text-white opacity-50 hover:opacity-100`}
          onClick={onSClickRight}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="30px"
            width="30px"
            xmlns="http://www.w3.org/2000/svg"
            className="md:rotate-90"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  );
}
