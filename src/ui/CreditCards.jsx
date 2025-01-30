import Cards from "react-credit-cards-2";
import { getCardType } from "../util/helper";
import { useState } from "react";

const cardNumber = "5338 1349 6262 9118";
const { type: cardType } = getCardType(cardNumber.split(" ").join(""));

export default function CreditCards() {
  const [defaultCard, setDefaultCard] = useState(false);
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-10">
      <div className="flex flex-col gap-5 items-center">
        <Cards
          number={cardNumber.replace(/\d{4}(?= \d{4})/g, "****")}
          issuer={"Diners-club"}
          preview={true}
          expiry={"09/25"}
          name="omar mazen"
        />
        <div className=" flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            id="setDefault"
            value={defaultCard}
            onChange={() => setDefaultCard((status) => !status)}
          />
          <label htmlFor="setDefault">Set as default payment method</label>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <Cards
          number={cardNumber.replace(/\d{4}(?= \d{4})/g, "****")}
          issuer={cardType}
          preview={true}
          expiry={"09/25"}
          name="omar mazen"
        />
        <div className=" flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            id="setDefault"
            value={defaultCard}
            onChange={() => setDefaultCard((status) => !status)}
          />
          <label htmlFor="setDefault">Set as default payment method</label>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <Cards
          number={cardNumber.replace(/\d{4}(?= \d{4})/g, "****")}
          issuer={cardType}
          preview={true}
          expiry={"09/25"}
          name="omar mazen"
        />
        <div className=" flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            id="setDefault"
            value={defaultCard}
            onChange={() => setDefaultCard((status) => !status)}
          />
          <label htmlFor="setDefault">Set as default payment method</label>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <Cards
          number={cardNumber.replace(/\d{4}(?= \d{4})/g, "****")}
          issuer={cardType}
          preview={true}
          expiry={"09/25"}
          name="omar mazen"
        />
        <div className=" flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            id="setDefault"
            value={defaultCard}
            onChange={() => setDefaultCard((status) => !status)}
          />
          <label htmlFor="setDefault">Set as default payment method</label>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <Cards
          number={cardNumber.replace(/\d{4}(?= \d{4})/g, "****")}
          issuer={cardType}
          preview={true}
          expiry={"09/25"}
          name="omar mazen"
        />
        <div className=" flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            id="setDefault"
            value={defaultCard}
            onChange={() => setDefaultCard((status) => !status)}
          />
          <label htmlFor="setDefault">Set as default payment method</label>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <Cards
          number={cardNumber.replace(/\d{4}(?= \d{4})/g, "****")}
          issuer={cardType}
          preview={true}
          expiry={"09/25"}
          name="omar mazen"
        />
        <div className=" flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            id="setDefault"
            value={defaultCard}
            onChange={() => setDefaultCard((status) => !status)}
          />
          <label htmlFor="setDefault">Set as default payment method</label>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <Cards
          number={cardNumber.replace(/\d{4}(?= \d{4})/g, "****")}
          issuer={cardType}
          preview={true}
          expiry={"09/25"}
          name="omar mazen"
        />
        <div className=" flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            id="setDefault"
            value={defaultCard}
            onChange={() => setDefaultCard((status) => !status)}
          />
          <label htmlFor="setDefault">Set as default payment method</label>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <Cards
          number={cardNumber.replace(/\d{4}(?= \d{4})/g, "****")}
          issuer={cardType}
          preview={true}
          expiry={"09/25"}
          name="omar mazen"
        />
        <div className=" flex items-center gap-4 cursor-pointer">
          <input
            type="checkbox"
            id="setDefault"
            value={defaultCard}
            onChange={() => setDefaultCard((status) => !status)}
          />
          <label htmlFor="setDefault">Set as default payment method</label>
        </div>
      </div>
    </div>
  );
}
