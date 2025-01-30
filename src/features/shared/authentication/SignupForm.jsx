import { useForm } from "react-hook-form";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { useState } from "react";
import useSignup from "./useSignup";
export default function SignupForm() {
  const [isShow, setIsShow] = useState(false);
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });

  const { signup, isLoading } = useSignup();
  function onSubmit({ userName, email, password }) {
    const phone = "01095424911";
    signup(
      { userName, email, password, cPassword: password, phone },
      { onSettled: reset }
    );
  }
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <Input
        value={getValues("userName")}
        error={errors.userName}
        placeholder="Full name"
        autoComplete="name"
        register={{
          ...register("userName", {
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
            pattern: {
              value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{7,29}$/gim,
              message:
                "Username must start with a letter or number, can include dots and underscores, and should be 8-30 characters long. Avoid starting or ending with a dot",
            },
          }),
        }}
      />
      <Input
        value={getValues("email")}
        error={errors.email}
        placeholder="Email"
        autoComplete="email"
        register={{
          ...register("email", {
            required: { value: true, message: "Email is required" },
            pattern: {
              value:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
              message: "Please enter a valid email address.",
            },
          }),
        }}
      />
      <Input
        type={isShow ? "text" : "password"}
        value={getValues("password")}
        error={errors.password}
        placeholder="Password"
        register={{
          ...register("password", {
            required: { value: true, message: "Password is required" },
            minLength: {
              value: 8,
              message: "Please enter at least 8 characters for password. ",
            },
            maxLength: {
              value: 30,
              message: "Password must not longer than 30 characters.",
            },
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
              message:
                "must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, Can contain special characters",
            },
          }),
        }}
      />
      <div className="flex items-center gap-2 text-xl mb-3">
        <input
          className=""
          type="checkbox"
          value={isShow}
          onClick={() => setIsShow((status) => !status)}
        />
        <label>Show password</label>
      </div>
      <Button
        size="block"
        type={"submit"}
        disabled={Object.keys(errors).length || isLoading}
      >
        SIGN UP
      </Button>
    </form>
  );
}
