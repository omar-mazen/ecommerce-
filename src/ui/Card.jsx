import StaticRatingStars from "./StaticRatingStars";
import FavoriteIcon from "./FavoriteIcon";
import useLongPress from "../Hooks/useLongPress";
import { useState } from "react";
import BottomSheetModal from "./BottomSheetModal";
import { useNavigate } from "react-router-dom";
import ProductContent from "../features/client/product/ProductContent";
import useMobileScreen from "../Hooks/useMobileScreen";

export default function Card({
  data = {
    title: "Casual T-Shirt",
    price: 19.99,
    rating: {
      count: 120,
      percentage: 0.85,
    },
    brand: "FashionHub",
    sale: 15.0, // Sale value (if any)
    image: "/../src/images.jpeg",
  },
  direction = "vertical",
}) {
  const { onTouchStart, onMouseDown, onMouseLeave, onMouseUp, onTouchEnd } =
    useLongPress(onLongPress, () => {});
  const navigate = useNavigate();
  const [openProduct, setOpenProduct] = useState(false);
  const isMobile = useMobileScreen();
  function onLongPress() {
    if (isMobile) setOpenProduct(true);
  }
  const { image, title, brand, price, rating, sale, id = "1" } = data;
  return (
    <>
      {direction == "vertical" ? (
        <div
          className=" w-[14.5rem] flex flex-col rounded-xl relative select-none cursor-pointer"
          onTouchStart={onTouchStart}
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
          onTouchEnd={onTouchEnd}
          onClick={() => navigate(`/product/${id}`)}
        >
          <div className="h-[14.5rem] w-[14.5rem] relative rounded-lg">
            <img
              src={image}
              className=" h-[14.5rem] w-[14.5rem] rounded-lg object-top object-cover "
              loading="lazy"
            />
            <span className="absolute bottom-0 right-0 translate-y-[50%]">
              <FavoriteIcon />
            </span>
            {sale && (
              <span className="absolute text-white top-2 left-2 bg-sale-color rounded-full w-14 h-7 flex items-center justify-center text-sm font-semibold">
                {"-" + ((sale / price) * 100).toFixed() + "%"}
              </span>
            )}
          </div>

          <div className="flex flex-col justify-center  mt-2">
            <span className="text-base flex items-center gap-1">
              <StaticRatingStars ratingPercentage={rating.percentage} />
              <span className=" text-gray">{`(${rating.count})`}</span>
            </span>
            <span className="text-gray-dark text-lg font-light">{brand}</span>
            <span className=" text-2xl">{title}</span>
            <span className="text-xl flex items-center gap-2 text-gray-light dark:text-gray-dark">
              <span>
                <span className={`${sale ? "line-through" : ""}`}>
                  {"$" + price}
                </span>
              </span>
              {sale && (
                <span className={`${"text-sale-light  dark:text-sale-dark"}`}>
                  {"$" + (price - sale).toFixed(2)}
                </span>
              )}
            </span>
          </div>
        </div>
      ) : (
        <div className="w-full h-44 flex flex-row bg-secondary-background relative rounded-xl mb-10 max-w-[600px] mx-auto">
          <div className=" overflow-hidden rounded-s-xl">
            <figure>
              <img
                src={image}
                loading="lazy"
                className=" h-44 w-44 object-top object-cover"
              />
            </figure>
          </div>
          <span className="absolute bottom-0 right-0 translate-y-[50%]">
            <FavoriteIcon />
          </span>
          <div className="flex flex-col justify-center gap-3 p-3">
            <span className="flex flex-col">
              <span className=" text-2xl">{title}</span>
              <span className="text-gray-dark text-xl font-light">{brand}</span>
            </span>
            <span className="flex items-center gap-2 text-lg">
              <StaticRatingStars ratingPercentage={rating.percentage} />
              <span className=" text-gray">{`(${rating.count})`}</span>
            </span>
            <span className="text-xl text-gray-light dark:text-gray-dark">
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
            </span>
          </div>
        </div>
      )}
      {openProduct ? (
        <BottomSheetModal
          isOpen={openProduct}
          onClose={() => {
            setOpenProduct(false);
          }}
          header={"Short black dress"}
        >
          <div onDoubleClick={() => navigate("/product/123")}>
            <ProductContent modal={true} />
          </div>
        </BottomSheetModal>
      ) : (
        ""
      )}
    </>
  );
}
