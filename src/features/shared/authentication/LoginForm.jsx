import { useForm } from "react-hook-form";
import Button from "../../../ui/Button";
import { Link } from "react-router-dom";
import Input from "../../../ui/Input";
import { useState } from "react";
import useLogin from "./useLogin";
import SmallSpinner from "../../../ui/SmallSpinner";
export default function LoginForm() {
  const [isShow, setIsShow] = useState(false);

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const { login, isLoading } = useLogin();

  function onSubmit({ email, password }) {
    login({ email, password });
  }
  return (
    <form
      className="flex flex-col self-stretch gap-2 mb-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="email"
        value={null}
        error={errors.email}
        placeholder="Email"
        autoComplete={"email"}
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
        value={null}
        error={errors.password}
        placeholder="Password"
        autoComplete={"password"}
        register={{
          ...register("password", {
            required: { value: true, message: "Password is required" },
          }),
        }}
      />
      <div className="flex justify-between text-xl mb-3">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            value={isShow}
            onClick={() => setIsShow((status) => !status)}
          />
          <label>Show password</label>
        </div>
        <Link to={"/forgotpassword"} className=" text-xl tracking-wide">
          {"Forget your Password ? "}
          <span className=" text-primary-light">&rarr;</span>
        </Link>
      </div>

      <Button
        size="block"
        type={"submit"}
        disabled={Object.keys(errors).length || isLoading}
      >
        {isLoading ? <SmallSpinner /> : "login"}
      </Button>
    </form>
  );
}
