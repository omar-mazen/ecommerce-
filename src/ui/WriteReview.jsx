import { useState } from "react";
import BottomSheetModal from "./BottomSheetModal";
import Button from "./Button";
import Rating from "./Rating";

export default function WriteReview({
  isWriteReviewOpen,
  setIsWriteReviewOpen,
}) {
  const [imgs, setImgs] = useState([]);
  // ⚠️ in case ther is a previous rate set it as current rating
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  return (
    <BottomSheetModal
      isOpen={isWriteReviewOpen}
      onClose={() => setIsWriteReviewOpen(false)}
      header="What Is Your Rate"
    >
      {<Rating size={30} rating={rating} setRating={setRating} />}
      <p className="my-5 text-xl text-center">
        Please share your opinion about the product
      </p>
      <textarea
        placeholder="Your review (at least 50 character)"
        className="bg-darkgray w-full h-52 px-8 py-6 rounded-lg resize-none outline-none mb-5"
        defaultValue={review}
        onChange={(e) => setReview(e.target.value)}
        minLength={50}
      />
      <div
        style={{ gridTemplateColumns: `repeat(${imgs.length + 1},100px)` }}
        className="grid grid-rows-[100px] overflow-x-scroll gap-5 overflow-y-hidden pb-5 "
      >
        <div
          className="  relative overflow-hiddencursor-pointer bg-darkgray rounded-lg py-6 px-4 w-[100px] h-[100px] cursor-pointer"
          disabled={imgs.length >= 5}
          style={{ opacity: `${imgs.length >= 5 ? "50%" : "100%"}` }}
        >
          <div className="flex flex-col gap-2 items-center justify-evenly h-full">
            <span className="bg-primary-light dark:bg-primary-dark w-16 h-16  flex items-center justify-center rounded-full">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="18px"
                width="18px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"></path>
              </svg>
            </span>
            <span className=" text-base">Add your photos</span>
          </div>
          <input
            type="file"
            accept="image/*"
            multiple
            style={{ opacity: "0" }}
            className=" opacity-0 absolute top-0 left-0 overflow-hidden h-[100px] w-[100px] cursor-pointer"
            title=""
            disabled={imgs.length >= 5}
            onChange={(e) => {
              const files = e.target.files;
              for (const file of files) {
                if (imgs.length >= 5) return;
                setImgs((imgs) => {
                  if (imgs?.length < 5)
                    return [...imgs, URL.createObjectURL(file)];
                  else return imgs;
                });
              }
            }}
          />
        </div>
        {imgs?.map((img, i) => (
          <div key={i} className="relative">
            <img
              src={img}
              className=" object-cover w-[100px] h-[100px] rounded-xl"
            />
            <span
              className=" absolute top-1 right-1 cursor-pointer text-white bg-[rgb(0,0,0,0.5)] rounded-full"
              onClick={() => {
                setImgs(imgs.filter((x) => x != img));
              }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="15px"
                width="15px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
        ))}
      </div>
      {review.length > 0 && review.length < 50 ? (
        <p className=" drak:text-Error-dark text-Error-light mt-5 text-center">
          Please enter at least 50 characters for your review
        </p>
      ) : rating == 0 ? (
        <p className=" drak:text-Error-dark text-Error-light mt-5 text-center">
          {`Please note that it's mandatory to provide a rating of at least 1`}
        </p>
      ) : (
        ""
      )}
      <Button
        type="full"
        additionalStyle={`my-10`}
        disabled={review.length < 50 || rating == 0}
      >
        SEND REVIEW
      </Button>
    </BottomSheetModal>
  );
}
