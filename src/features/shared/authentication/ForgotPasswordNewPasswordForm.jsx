import { useForm } from "react-hook-form";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";
import useForgotPassword from "./useForgotPassword";
import { useNavigate } from "react-router";
import SmallSpinner from "../../../ui/SmallSpinner";

export default function ForgotPasswordNewPasswordForm() {
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const { isLoading, forgotPassword } = useForgotPassword();
  function onSubmit({ email, code, password, confirmPassword }) {
    forgotPassword(
      { email, code: Number(code), password, cPassword: confirmPassword },
      { onSuccess: () => navigate("/login", { replace: true }) }
    );
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <Input
          type="number"
          placeholder="code"
          register={{
            ...register("code", {
              required: { value: true, message: "Code is required" },
            }),
          }}
        />
        <Input
          type="email"
          autoComplete={"email"}
          value={getValues("email")}
          error={errors.email}
          placeholder="Email"
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
        {/* new password */}
        <Input
          type={"password"}
          value={getValues("password")}
          error={errors.password}
          placeholder="New password"
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
        {/* confirm password */}
        <Input
          type={"password"}
          value={getValues("confirmPassword")}
          error={errors.confirmPassword}
          placeholder="Confirm password"
          register={{
            ...register("confirmPassword", {
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
              validate: (value) =>
                value === getValues("password") || "password should match",
            }),
          }}
        />
        <Button
          btnType="full"
          type={"submit"}
          disabled={isLoading || Object.keys(errors).length}
        >
          {isLoading ? <SmallSpinner /> : "SAVE PASSWORD"}
        </Button>
      </form>
    </div>
  );
}
