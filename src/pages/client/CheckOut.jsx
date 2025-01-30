import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Header from "../../ui/Header";
import { getCardType } from "../../util/helper";

export default function CheckOut() {
  const cardNumber = "5338 1349 6262 9118";
  const { icon } = getCardType(cardNumber.split(" ").join(""));
  return (
    <>
      <Header>Checkout</Header>
      <div className="mx-4 space-y-10">
        {/* shipping address */}
        <section className=" space-y-6">
          <h2 className=" text-2xl font-semibold">Shipping address</h2>
          <div className="  bg-darkgray rounded-xl space-y-4 px-10 py-6">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-semibold">Jane Doe</span>
              <Link
                className=" text-xl text-primary-light dark:text-primary-dark"
                to="/profile/shippingAddresses"
              >
                Change
              </Link>
            </div>
            <p className=" text-xl font-light">
              3 Newbridge Court <br />
              Chino Hills, CA 91709, United States
            </p>
          </div>
        </section>
        {/* payment */}
        <section>
          <div className="space-y-6 pr-10">
            <div className="flex justify-between items-center">
              <h2 className=" text-2xl font-semibold">Payment</h2>
              <Link
                className=" text-xl text-primary-light dark:text-primary-dark"
                to="/profile/paymentMethod"
              >
                Change
              </Link>
            </div>
            <div className="flex items-center gap-8">
              <img src={icon} className="w-16 rounded-xl font-medium" />
              <p className=" text-2xl font-light">
                {cardNumber.replace(/\d{4}(?= \d{4})/g, "****")}
              </p>
            </div>
          </div>
        </section>
        {/* delivery method */}
        <section className=" space-y-4">
          <div className="space-y-4 pr-6">
            <h2 className=" text-2xl font-semibold">Delivery method</h2>
            <ul className="flex gap-8">
              <li className=" aspect-[5/4] h-24 bg-white rounded-xl overflow-hidden grid grid-rows-[1fr,20px]">
                <img
                  src="/delivery/aramex.png"
                  alt="aramex logo"
                  className=" object-cover object-center w-[90%] self-center justify-self-center"
                />
                <span className=" text-gray-500 font-medium text-lg text-nowrap self-center justify-self-center">
                  1-3 days
                </span>
              </li>
              <li className=" aspect-[5/4] h-24 bg-white rounded-xl overflow-hidden relative  grid grid-rows-[1fr,20px]">
                <img
                  src="/delivery/DHL.png"
                  alt="aramex logo"
                  className=" object-cover object-center w-[90%] self-center justify-self-center"
                />
                <span className=" text-gray-500 font-medium text-lg self-center justify-self-center text-nowrap">
                  1-3 days
                </span>
              </li>
              <li className=" aspect-[5/4] h-24 bg-white rounded-xl overflow-hidden relative  grid grid-rows-[1fr,20px]">
                <img
                  src="/delivery/FedEx.png"
                  alt="aramex logo"
                  className=" object-cover object-center w-[90%] self-center justify-self-center"
                />
                <span className=" text-gray-500 font-medium text-lg self-center justify-self-center text-nowrap">
                  1-3 days
                </span>
              </li>
            </ul>
          </div>
        </section>
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray text-xl font-medium">Order:</span>
            <span>112$</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray text-xl font-medium">Delivery:</span>
            <span>+ 15$</span>
          </div>
          <div className="flex items-center justify-between text-2xl font-bold">
            <span className="text-gray ">Summary:</span>
            <span>127$</span>
          </div>
        </section>
        <Button type="submit" btnType="full">
          SUBMIT ORDER
        </Button>
      </div>
    </>
  );
}
