import { Link } from "react-router-dom";
import Button from "../../ui/Button";

export default function Success() {
  return (
    <div className=" fixed overflow-hidden top-0 left-0 w-full min-h-dvh z-[999999999999] bg-background-light dark:bg-background-dark flex flex-col items-center justify-center gap-8">
      <img
        src="/bags.png"
        alt=" bags image"
        className=" aspect-square h-full object-cover object-center"
      />
      <h1 className="text-6xl font-semibold">Success!</h1>
      <p className=" text-2xl text-gray tracking-wide font-light">
        Your order will be delivered soon.
        <br /> Thank you for choosing our app!
      </p>
      <Button additionalStyle={`mt-10  min-w-[230px]`}>
        <Link to={"/home"}>CONTINUE SHOPPING</Link>
      </Button>
    </div>
  );
}
