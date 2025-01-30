import Button from "../../ui/Button";
import Header from "../../ui/Header";

export default function Order() {
  return (
    <>
      <Header>Order Details</Header>
      <div className="container space-y-10 sm:space-y-14">
        <div>
          <div className="flex flex-row justify-between items-center mb-4">
            <span className="text-large">Order {"N1947034"}</span>
            <span className="text-small text-gray">{"05-12-2019"}</span>
          </div>
          <div className="text-small space-x-2 mb-2 flex flex-row justify-between">
            <div className=" ">
              <span className=" text-gray ">Tracking number:</span>{" "}
              <span>{"IW3475453455"}</span>
            </div>
            <span className=" text-success-color">Delivered</span>
          </div>
          <span className="text-small">{3} items</span>
        </div>
        <ul className="my-4 flex flex-col gap-7 max-w-[500px] mx-auto">
          <li className=" h-32 sm:h-40 md:h-44 flex flex-row w-full items-center rounded-xl overflow-hidden bg-secondary-background">
            <img
              src="../src/images.jpeg"
              alt={`${"name"} category image`}
              className="h-full aspect-square object-center object-cover "
            />
            <div className="flex flex-1 flex-col px-4 sm:px-6 py-2 sm:py-4 text-xsmall h-full justify-between">
              <span className="text-small">{"Pullover"}</span>
              <span className=" text-gray">{"Mango"}</span>
              <div className="flex flex-row items-center space-x-5 my-1">
                <div className=" space-x-2">
                  <span className=" text-gray">Color:</span>
                  <span>{"Gray"}</span>
                </div>
                <div className=" space-x-2">
                  <span className=" text-gray">Size:</span>
                  <span>{"L"}</span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className=" space-x-2">
                  <span className=" text-gray">Units:</span>
                  <span>{1}</span>
                </div>
                <span className=" text-small">{"51$"}</span>
              </div>
            </div>
          </li>
          <li className=" h-32 sm:h-40 md:h-44 flex flex-row w-full items-center rounded-xl overflow-hidden bg-secondary-background">
            <img
              src="../src/images.jpeg"
              alt={`${"name"} category image`}
              className="h-full aspect-square object-center object-cover "
            />
            <div className="flex flex-1 flex-col px-4 sm:px-6 py-2 sm:py-4 text-xsmall h-full justify-between">
              <span className="text-small">{"Pullover"}</span>
              <span className=" text-gray">{"Mango"}</span>
              <div className="flex flex-row items-center space-x-5 my-1">
                <div className=" space-x-2">
                  <span className=" text-gray">Color:</span>
                  <span>{"Gray"}</span>
                </div>
                <div className=" space-x-2">
                  <span className=" text-gray">Size:</span>
                  <span>{"L"}</span>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between">
                <div className=" space-x-2">
                  <span className=" text-gray">Units:</span>
                  <span>{1}</span>
                </div>
                <span className=" text-small">{"51$"}</span>
              </div>
            </div>
          </li>
        </ul>
        <div className="text-small">
          <span className="text-medium">order information</span>
          <div className=" mt-4 space-y-3 grid grid-cols-[auto,1fr] gap-x-10 justify-between items-start">
            <span className=" min-w-36 text-gray">Shipping Address:</span>
            <p className="!m-0">
              3 Newbridge Court ,Chino Hills, CA 91709, United States
            </p>
            <span className="w-36 text-gray text-nowrap min-w-full">
              Payment mehtod:
            </span>
            <span>**** **** **** 3947</span>
            <span className="w-36 text-gray text-nowrap min-w-full">
              Delivery method:
            </span>
            <span>FedEx, 3 days, 15$</span>
            <span className="w-36 text-gray text-nowrap min-w-full">
              Discount:
            </span>
            <span>10%, Personal promo code</span>
            <span className="w-36 text-gray text-nowrap min-w-full">
              Total Amount:
            </span>
            <span>133$</span>
          </div>
          <div className="flex justify-between sm:justify-evenly items-center mt-5 sm:mt-8 md:mt-10">
            <Button
              size="large"
              style="outline"
              additionalStyle={"!text-small"}
            >
              Reorder
            </Button>
            <Button size="large" additionalStyle={"text-nowrap !text-small"}>
              Leave Feedback
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
