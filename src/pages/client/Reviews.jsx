import Header from "../../ui/Header";
import Button from "../../ui/Button";
import { useState } from "react";
import WriteReview from "../../ui/WriteReview";
import ReviewCard from "../../ui/ReviewCard";
const data = [
  {
    name: "Helene Moore",
    date: "June 5, 2019",
    img: "/default-user.jpg",
    comment: `The dress is great! Very classy and comfortable. It fit perfectly!
              I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too
              long for those who are shorter but could be hemmed. I wouldn't
              recommend it for those big chested as I am smaller chested and it
              fit me perfectly. The underarms were not too wide and the dress
              was made well.`,
  },
  {
    name: "Helene Moore",
    date: "June 5, 2019",
    img: "/default-user.jpg",
    comment: `The dress is great! Very classy and comfortable. It fit perfectly!
              I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too
              long for those who are shorter but could be hemmed. I wouldn't
              recommend it for those big chested as I am smaller chested and it
              fit me perfectly. The underarms were not too wide and the dress
              was made well.`,
  },
  {
    name: "Helene Moore",
    date: "June 5, 2019",
    img: "/default-user.jpg",
    comment: `The dress is great! Very classy and comfortable. It fit perfectly!
              I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too
              long for those who are shorter but could be hemmed. I wouldn't
              recommend it for those big chested as I am smaller chested and it
              fit me perfectly. The underarms were not too wide and the dress
              was made well.`,
  },
  {
    name: "Helene Moore",
    date: "June 5, 2019",
    img: "/default-user.jpg",
    comment: `The dress is great! Very classy and comfortable. It fit perfectly!
              I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too
              long for those who are shorter but could be hemmed. I wouldn't
              recommend it for those big chested as I am smaller chested and it
              fit me perfectly. The underarms were not too wide and the dress
              was made well.`,
  },
  {
    name: "Helene Moore",
    date: "June 5, 2019",
    img: "/default-user.jpg",
    comment: `The dress is great! Very classy and comfortable. It fit perfectly!
              I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too
              long for those who are shorter but could be hemmed. I wouldn't
              recommend it for those big chested as I am smaller chested and it
              fit me perfectly. The underarms were not too wide and the dress
              was made well.`,
  },
  {
    name: "Helene Moore",
    date: "June 5, 2019",
    img: "/default-user.jpg",
    comment: `The dress is great! Very classy and comfortable. It fit perfectly!
              I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too
              long for those who are shorter but could be hemmed. I wouldn't
              recommend it for those big chested as I am smaller chested and it
              fit me perfectly. The underarms were not too wide and the dress
              was made well.`,
  },
  {
    name: "Helene Moore",
    date: "June 5, 2019",
    img: "/default-user.jpg",
    comment: `The dress is great! Very classy and comfortable. It fit perfectly!
              I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too
              long for those who are shorter but could be hemmed. I wouldn't
              recommend it for those big chested as I am smaller chested and it
              fit me perfectly. The underarms were not too wide and the dress
              was made well.`,
  },
  {
    name: "Helene Moore",
    date: "June 5, 2019",
    img: "/default-user.jpg",
    comment: `The dress is great! Very classy and comfortable. It fit perfectly!
              I'm 5'7" and 130 pounds. I am a 34B chest. This dress would be too
              long for those who are shorter but could be hemmed. I wouldn't
              recommend it for those big chested as I am smaller chested and it
              fit me perfectly. The underarms were not too wide and the dress
              was made well.`,
  },
];
export default function Reviews() {
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);

  return (
    <>
      <Header>Reviews</Header>
      <div className="mx-4 mb-8 space-y-8">
        <StarRatingWithPercentage />
        <div>
          <div className="text-4xl mb-10">{data.length} reviews</div>
          <div className="space-y-10">
            {data.map((review, i) => (
              <ReviewCard
                name={review.name}
                img={review.img}
                date={review.date}
                comment={review.comment}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
      <Button
        additionalStyle={`flex gap-2 fixed bottom-3 right-3`}
        onClick={() => setIsWriteReviewOpen(true)}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="15px"
          width="15px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"></path>
        </svg>
        Write review
      </Button>
      <WriteReview
        isWriteReviewOpen={isWriteReviewOpen}
        setIsWriteReviewOpen={setIsWriteReviewOpen}
      />
    </>
  );
}
function StartIcon({ length }) {
  return (
    <div className="flex justify-end">
      {Array.from({ length }, (_, i) => (
        <span className="text-[#FFBA49]" key={i}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="15px"
            width="15px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m12.672.668 3.059 6.197 6.838.993a.75.75 0 0 1 .416 1.28l-4.948 4.823 1.168 6.812a.75.75 0 0 1-1.088.79L12 18.347l-6.116 3.216a.75.75 0 0 1-1.088-.791l1.168-6.811-4.948-4.823a.749.749 0 0 1 .416-1.279l6.838-.994L11.327.668a.75.75 0 0 1 1.345 0Z"></path>
          </svg>
        </span>
      ))}
    </div>
  );
}
function RatingBar({ percentage, height = 10 }) {
  return (
    <div className="bg-darkgray block rounded-full" style={{ height }}>
      <span
        className={`bg-primary-light dark:bg-primary-dark h-full block rounded-full`}
        style={{ maxWidth: `${percentage}%` }}
      ></span>
    </div>
  );
}
function StarRatingWithPercentage() {
  return (
    <div className="flex ">
      <div className="flex flex-col gap-2 items-start justify-center min-w-36">
        <div className=" text-7xl font-semibold">4.3</div>
        <p className=" text-xl tracking-wider text-gray">23 ratings</p>
      </div>
      <div className="grid grid-rows-[repeat(5,1fr)] grid-cols-[1fr,1fr,30px] gap-x-3 items-center w-full">
        <StartIcon length={5} />
        <RatingBar percentage={60} />
        <div className="self-center justify-self-center text-gray">12</div>
        <StartIcon length={4} />
        <RatingBar percentage={30} />
        <div className="self-center justify-self-center text-gray">5</div>
        <StartIcon length={3} />
        <RatingBar percentage={20} />
        <div className="self-center justify-self-center text-gray">4</div>
        <StartIcon length={2} />
        <RatingBar percentage={10} />
        <div className="self-center justify-self-center text-gray">1</div>
        <StartIcon length={1} />
        <RatingBar percentage={10} />
        <div className="self-center justify-self-center text-gray">1</div>
      </div>
    </div>
  );
}
