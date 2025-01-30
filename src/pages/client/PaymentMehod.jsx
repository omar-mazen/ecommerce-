import "react-credit-cards-2/dist/es/styles-compiled.css";
import Cards from "react-credit-cards-2";

import { useState } from "react";

import Button from "../../ui/Button";
import Header from "../../ui/Header";
import BottomSheetModal from "../../ui/BottomSheetModal";
import CreditCards from "../../ui/CreditCards";

export default function PaymentMehod() {
  const [isOpen, setIsOpen] = useState();
  return (
    <>
      <Header>Payment methods</Header>
      <section className="container">
        <CreditCards />
      </section>
      <div
        onClick={() => setIsOpen(true)}
        style={{ filter: "drop-shadow(0px 0px 5px black)" }}
        className=" fixed bottom-28 right-8 rounded-full bg-text aspect-square h-12 flex items-center justify-center text-secondary-background cursor-pointer"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 20 20"
          aria-hidden="true"
          height="25px"
          width="25px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
        </svg>
      </div>
      <AddCardMoadl isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
function AddCardMoadl({ isOpen, onClose }) {
  const [nameOfCard, setNameOfCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState();
  const [expDate, setExpDate] = useState("");
  const [defaultCard, setDefaultCard] = useState(false);
  return (
    <BottomSheetModal isOpen={isOpen} onClose={onClose} header={"Add new card"}>
      <div className="container">
        <Cards number={cardNumber} expiry={expDate} name={nameOfCard} />
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5 mt-10 mb-5"
        >
          <div className=" relative">
            {nameOfCard ? (
              <label className=" absolute top-2 left-6 text-gray-dark text-xsmall">
                {"Name of card"}
              </label>
            ) : (
              ""
            )}
            <input
              className={`w-full text-small bg-secondary-background outline-none rounded-lg h-20 px-6 `}
              placeholder="Name on card"
              type="text"
              value={nameOfCard}
              onChange={(e) => setNameOfCard(e.target.value)}
            />
          </div>
          <div className=" relative">
            {cardNumber ? (
              <label className=" absolute top-2 left-6 text-gray-dark text-xsmall">
                {"Card number"}
              </label>
            ) : (
              ""
            )}
            <input
              className={`w-full text-small bg-secondary-background outline-none rounded-lg h-20 px-6 `}
              placeholder="Card number"
              type="text"
              value={cardNumber}
              maxLength={16}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className=" relative">
            {expDate ? (
              <label className=" absolute top-2 left-6 text-gray-dark text-xsmall">
                {"Expire Date"}
              </label>
            ) : (
              ""
            )}
            <input
              className={`w-full text-small bg-secondary-background outline-none rounded-lg h-20 px-6 `}
              placeholder="Expire Date"
              value={expDate}
              onChange={(e) => setExpDate(e.target.value)}
            />
          </div>
          <div className=" relative">
            {cvv ? (
              <label className=" absolute top-2 left-6 text-gray-dark text-xsmall">
                {"cvv"}
              </label>
            ) : (
              ""
            )}
            <input
              className={`w-full text-small bg-secondary-background outline-none rounded-lg h-20 px-6 `}
              placeholder="CVV"
              type="number"
              value={cvv}
              maxLength={4}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          <div className=" flex items-center gap-4 cursor-pointer">
            <input
              type="checkbox"
              id="setDefault"
              value={defaultCard}
              onChange={() => setDefaultCard((status) => !status)}
            />
            <label htmlFor="setDefault">Set as default payment method</label>
          </div>
          <Button type="submit" size="block">
            ADD CARD
          </Button>
        </form>
      </div>
    </BottomSheetModal>
  );
}
