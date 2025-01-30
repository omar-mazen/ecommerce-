import StaticRatingStars from "./StaticRatingStars";

export default function ReviewCard({ name, date, img, comment }) {
  return (
    <div className="bg-secondary-background w-full p-8 rounded-3xl">
      <div className="flex justify-between">
        <div className="flex items-center gap-3 w-full">
          <img
            src={img}
            alt={`${name}'s profile picture`}
            className="rounded-full h-16 w-16 object-contain object-center "
          />
          <div className="w-full">
            <p className=" text-medium font-small">{name}</p>
            <div className="flex items-center justify-between">
              <StaticRatingStars ratingPercentage={0.8} />
              <span className="text-xsmall text-gray">{date}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xsmall font-light line-clamp-3 mt-8 hover:line-clamp-none transition-all duration-200 ease-in-out">
        {comment}
      </p>
    </div>
  );
}
