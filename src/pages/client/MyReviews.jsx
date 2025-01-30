import { Link } from "react-router-dom";
import Header from "../../ui/Header";
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
export default function MyReviews() {
  return (
    <>
      <Header>My reviews</Header>
      <section className="container space-y-4">
        {data.map((review, i) => (
          <Link key={i} to={`/product/123`} className="inline-block">
            <ReviewCard
              name={review.name}
              img={review.img}
              date={review.date}
              comment={review.comment}
            />
          </Link>
        ))}
      </section>
    </>
  );
}
