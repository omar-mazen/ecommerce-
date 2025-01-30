import { useState } from "react";
import Header from "../../ui/Header";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import BottomSheetModal from "../../ui/BottomSheetModal";

export default function ShippingAddresses() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header>Shipping Addresses</Header>
      <section className=" container space-y-6 max-w-[500px]">
        <div className="  bg-secondary-background rounded-xl space-y-4 px-10 py-6">
          <div className="flex justify-between items-center">
            <span className="text-medium font-semibold">Jane Doe</span>
            <span
              className=" text-small text-primary-light dark:text-primary-dark cursor-pointer"
              to="/profile/shippingAddresses"
            >
              Edit
            </span>
          </div>
          <p className=" text-small font-light">
            3 Newbridge Court <br />
            Chino Hills, CA 91709, United States
          </p>
          <div className=" flex items-center gap-4 cursor-pointer text-small">
            <input type="checkbox" id="setDefault" />
            <label htmlFor="setDefault">Use as the shipping address</label>
          </div>
        </div>
      </section>
      <div
        onClick={() => setIsOpen(true)}
        style={{ filter: "drop-shadow(0px 0px 5px black)" }}
        className="  fixed bottom-28 right-8 rounded-full bg-text aspect-square h-12 flex items-center justify-center text-primary-background cursor-pointer"
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
      <AddShippingAddressModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
function AddShippingAddressForm() {
  const {
    register,
    formState: { errors },
    getValues,
  } = useForm({ mode: "onChange" });
  return (
    <div className=" container">
      <form className=" space-y-2 my-5 w-full max-w-[500px] mx-auto">
        <Input
          placeholder="Full name"
          value={getValues("fullName")}
          error={errors?.fullName}
          register={{
            ...register("fullName", {
              required: { value: true, message: "Name is required" },
              minLength: {
                value: 8,
                message:
                  "Please enter at least 8 characters for your full name. ",
              },
              maxLength: {
                value: 30,
                message: "Please keep your username under 30 characters.",
              },
            }),
          }}
        />
        <Input
          placeholder="Address"
          value={getValues("address")}
          error={errors?.address}
          register={{
            ...register("address", {
              required: { value: true, message: "Address is required" },
            }),
          }}
        />
        <Input
          placeholder="city"
          value={getValues("city")}
          error={errors?.city}
          register={{
            ...register("city", {
              required: { value: true, message: "City is required" },
            }),
          }}
        />
        <Input
          placeholder="State/Province/Region"
          value={getValues("state")}
          error={errors?.state}
          register={{
            ...register("state", {
              required: { value: true, message: "State is required" },
            }),
          }}
        />
        <Input
          placeholder="Country"
          value={getValues("country")}
          error={errors?.country}
          register={{
            ...register("country", {
              required: { value: true, message: "Country is required" },
            }),
          }}
        />

        <Button size="block">SAVE ADDRESS</Button>
      </form>
    </div>
  );
}
function AddShippingAddressModal({ isOpen, onClose }) {
  return (
    <BottomSheetModal
      isOpen={isOpen}
      onClose={onClose}
      header={"Add shipping address"}
      containerAdditionalStyle={`flex items-center`}
    >
      <AddShippingAddressForm />
    </BottomSheetModal>
  );
}
