import Header from "../../ui/Header";
import { useEffect, useState } from "react";
import BottomSheetModal from "../../ui/BottomSheetModal";
import PromoCodesList from "../../ui/PromoCodesList";
import Button from "../../ui/Button";
import { Link, useSearchParams } from "react-router-dom";

export default function Cart() {
  const [searchParams] = useSearchParams();
  const [isOpen, setIsOen] = useState(false);
  const [promoCode, setPromoCode] = useState(searchParams.get("promoCode"));
  const promoCodeURL = searchParams.get("promoCode");
  useEffect(() => setPromoCode(promoCodeURL), [promoCodeURL]);
  return (
    <>
      <Header>Cart</Header>
      <section className="container">
        <ul>
          {Array.from({ length: 3 }, (_, i) => (
            <CartCard key={i} />
          ))}
        </ul>
        <div className=" relative ">
          <CouponInput
            promoCode={promoCode || ""}
            setPromoCode={setPromoCode}
          />
          <span
            className=" absolute right-0 top-1/2 translate-y-[-50%] bg-gray text-darkgray rounded-full aspect-square h-full flex items-center justify-center cursor-pointer"
            onClick={() => setIsOen(true)}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="20px"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </div>
        <div className="flex justify-between items-center my-10">
          <span className="text-gray text-2xl">Total amount:</span>
          <span className="font-semibold">124$</span>
        </div>
        <Button btnType="full" additionalStyle={"mb-5"}>
          <Link to="checkout" className="w-full h-full inline-block">
            CHECK OUT
          </Link>
        </Button>
      </section>
      <PromoCodeModal
        isOpen={isOpen}
        onClose={() => setIsOen(false)}
        promoCode={promoCode}
        setPromoCode={setPromoCode}
      />
    </>
  );
}
function CartCard() {
  return (
    <li className="w-full h-40 flex flex-row bg-darkgray relative rounded-xl mb-10 ">
      <div className=" overflow-hidden rounded-s-xl w-40">
        <img
          src={"/../src/images.jpeg"}
          className=" w-full aspect-square object-center object-cover"
        />
      </div>
      <div className="flex flex-col justify-between p-4 flex-1">
        <div>
          <span className=" text-2xl">{"Pullover"}</span>
          <div className="text-base flex gap-8 mb-1">
            <span>
              <span className="text-gray">Color:</span>
              <span> blue</span>
            </span>
            <span>
              <span className="text-gray">Size:</span>
              <span> L</span>
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-5">
            <div
              style={{ filter: "drop-shadow(0px 0px 4px rgb(0,0,0,0.25))" }}
              className="bg-darkgray w-8 h-8 rounded-full flex items-center justify-center text-gray cursor-pointer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1"
                viewBox="0 0 20 20"
                aria-hidden="true"
                height="15px"
                width="15px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <span className=" text-3xl">{1}</span>
            <div
              style={{ filter: "drop-shadow(0px 0px 4px rgb(0,0,0,0.25))" }}
              className="bg-darkgray w-8 h-8 rounded-full flex items-center justify-center text-gray cursor-pointer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1"
                viewBox="0 0 20 20"
                aria-hidden="true"
                height="15px"
                width="15px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
              </svg>
            </div>
          </div>
          <span className=" font-semibold text-xl">{"$" + 51}</span>
        </div>
      </div>
    </li>
  );
}
function PromoCodeModal({ isOpen, onClose, promoCode, setPromoCode }) {
  return (
    <BottomSheetModal isOpen={isOpen} onClose={onClose}>
      <div className=" relative my-10">
        <CouponInput promoCode={promoCode} setPromoCode={setPromoCode} />
        <span className=" absolute right-0 top-1/2 translate-y-[-50%] bg-gray text-darkgray rounded-full aspect-square h-full flex items-center justify-center cursor-pointer">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="1"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="20px"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <h2 className="my-10 text-3xl font-semibold">Your Promo Codes</h2>
      <PromoCodesList />
    </BottomSheetModal>
  );
}
function CouponInput({ promoCode, setPromoCode }) {
  return (
    <input
      type="text"
      placeholder="Enter your promo code"
      className=" bg-darkgray w-full py-4 px-6 rounded-full outline-none"
      value={promoCode}
      onChange={(e) => setPromoCode(e.target.value)}
    />
  );
}
