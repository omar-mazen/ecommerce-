import StaticRatingStars from "./StaticRatingStars";

export default function FavoriteCard({
  data = {
    title: "Casual T-Shirt",
    price: 19.99,
    rating: {
      count: 120,
      percentage: 0.85,
    },
    color: "Blue",
    size: "L",
    brand: "FashionHub",
    sale: 15.0, // Sale value (if any)
    image: "/../src/images.jpeg",
  },
  direction = "vertical",
}) {
  const { image, title, brand, price, rating, sale } = data;
  return direction == "vertical" ? (
    <div className=" aspect-[9/16] w-[150px]  flex flex-col rounded-xl relative">
      <span className=" absolute top-1 right-1 z-[1] text-gray ">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 20 20"
          aria-hidden="true"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
        </svg>
      </span>
      <div className=" w-full relative rounded-lg">
        <figure>
          <img
            src={image}
            className=" w-full aspect-[4/5] rounded-lg object-top object-cover"
          />
        </figure>
        <span
          style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 5px 2px" }}
          className=" absolute bottom-0 right-0 translate-y-[50%] text-text bg-primary-background p-3 box-content rounded-full"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            ></path>
          </svg>
        </span>
      </div>

      <div className="flex flex-col justify-center mt-2">
        <span className="text-xsmall flex items-center gap-1">
          <StaticRatingStars ratingPercentage={rating.percentage} />
          <span className=" text-gray">{`(${rating.count})`}</span>
        </span>
        <span className="text-gray text-lg font-light">{brand}</span>
        <span className=" text-2xl">{title}</span>
        <div className="text-xsmall flex gap-8">
          <span>
            <span className="text-gray">Color:</span>
            <span> blue</span>
          </span>
          <span>
            <span className="text-gray">Size:</span>
            <span> L</span>
          </span>
        </div>
        <div className="text-xl text-gray">
          <span>
            <span className={`${sale ? "line-through" : ""} mr-2`}>
              {"$" + price}
            </span>
          </span>
          {sale && (
            <span className={`${"text-sale-light  dark:text-sale-color"}`}>
              {"$" + (price - sale).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="max-w-[600px] mx-auto h-48 flex flex-row bg-secondary-background relative rounded-xl mb-10">
      <span className=" absolute top-1 right-1 z-[1] text-gray ">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 20 20"
          aria-hidden="true"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
        </svg>
      </span>
      <figure className=" overflow-hidden rounded-s-xl h-full aspect-square">
        <img src={image} className="  object-center object-cover w-full" />
      </figure>
      <span
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 5px 2px" }}
        className=" absolute bottom-0 right-0 translate-y-[50%] text-text bg-primary-background p-3 box-content rounded-full"
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          ></path>
        </svg>
      </span>

      <div className="flex flex-col justify-center p-3">
        <div className="flex flex-col mb-2">
          <span className="text-gray text-xsmall font-light">{brand}</span>
          <span className=" text-2xl">{title}</span>
        </div>
        <div className="text-xsmall flex gap-8 mb-1">
          <span>
            <span className="text-gray">Color:</span>
            <span> blue</span>
          </span>
          <span>
            <span className="text-gray">Size:</span>
            <span> L</span>
          </span>
        </div>
        <span className=" text-xsmall mb-1 flex items-center gap-3">
          <StaticRatingStars ratingPercentage={rating.percentage} />
          <span className=" text-gray">{`(${rating.count})`}</span>
        </span>
        <div className="text-xl text-gray ">
          <span>
            <span className="line-through mr-2 ">{"$" + price}</span>
          </span>
          <span className={`${"text-sale-color"}`}>
            {"$" + (price - sale).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
/*
    <div className=" w-[14.5rem] flex flex-col rounded-xl relative">
      <span className=" absolute top-1 right-1 z-[1] text-gray ">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 20 20"
          aria-hidden="true"
          height="20px"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
        </svg>
      </span>
      <div className="h-[14.5rem] w-[14.5rem] relative rounded-lg">
        <figure>
          <img
            src={image}
            className=" h-[14.5rem] w-[14.5rem] rounded-lg object-top object-cover"
          />
        </figure>
        <span
          style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 5px 2px" }}
          className=" absolute bottom-0 right-0 translate-y-[50%] text-text bg-primary-background p-3 box-content rounded-full"
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            ></path>
          </svg>
        </span>
      </div>

      <div className="flex flex-col justify-center mt-2">
        <span className="text-xsmall flex items-center gap-1">
          <StaticRatingStars ratingPercentage={rating.percentage} />
          <span className=" text-gray">{`(${rating.count})`}</span>
        </span>
        <span className="text-gray text-lg font-light">{brand}</span>
        <span className=" text-2xl">{title}</span>
        <div className="text-xsmall flex gap-8">
          <span>
            <span className="text-gray">Color:</span>
            <span> blue</span>
          </span>
          <span>
            <span className="text-gray">Size:</span>
            <span> L</span>
          </span>
        </div>
        <div className="text-xl text-gray">
          <span>
            <span className={`${sale ? "line-through" : ""} mr-2`}>
              {"$" + price}
            </span>
          </span>
          {sale && (
            <span className={`${"text-sale-light  dark:text-sale-dark"}`}>
              {"$" + (price - sale).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
*/
