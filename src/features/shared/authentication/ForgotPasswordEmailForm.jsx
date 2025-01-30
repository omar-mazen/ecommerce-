import { useForm } from "react-hook-form";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import { useNavigate } from "react-router";
import useSendForgotCode from "./useSendForgotCode";
import SmallSpinner from "../../../ui/SmallSpinner";
export default function ForgotPasswordEmailForm() {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const navigate = useNavigate();
  const { isLoading, sendForgotCode } = useSendForgotCode();
  function onSubmit({ email }) {
    sendForgotCode(
      { email },
      { onSuccess: () => navigate("enterNewPassword") }
    );
  }
  return (
    <>
      <p className=" text-xl mb-8">
        {`Please, enter your email address associated with your account. We'll
        send a verification code to that email. Once you receive it, enter the
        code here to set up a new password.`}
      </p>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
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
        </div>
        <Button
          type={"submit"}
          btnType="full"
          disabled={errors?.email || isLoading}
        >
          {isLoading ? <SmallSpinner /> : "SEND"}
        </Button>
      </form>
    </>
  );
}
