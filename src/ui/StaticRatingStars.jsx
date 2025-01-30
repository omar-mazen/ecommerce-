import Star from "./Star";
const STARS_NUMBER = 5;
export default function StaticRatingStars({ ratingPercentage = 0 }) {
  return (
    <ul className="flex justify-center w-fit">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          fill={i + 1 <= Math.round(ratingPercentage * STARS_NUMBER)}
        />
      ))}
    </ul>
  );
}
