import useUpdatePassword from "./useUpdatePassword";
import { useForm } from "react-hook-form";
import Input from "../../../ui/Input";
import Button from "../../../ui/Button";

export default function ChangePassword() {
  const {
    register,
    reset,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm({ mode: "onChange" });
  const { isLoading, updatePassword } = useUpdatePassword();
  function onSubmit({ oldPassword, newPassword, confirmPassword }) {
    updatePassword(
      {
        oldPassword,
        password: newPassword,
        cPassword: confirmPassword,
      },
      { onSuccess: reset }
    );
  }
  return (
    <section className="container">
      <h2 className="text-medium mb-4">Change Password</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        {/* old password */}
        <Input
          type={"password"}
          value={getValues("oldPassword")}
          error={errors.oldPassword}
          placeholder="Old password"
          register={{
            ...register("oldPassword", {
              required: { value: true, message: "Password is required" },
            }),
          }}
        />
        {/* new password */}
        <Input
          type={"password"}
          value={getValues("newPassword")}
          error={errors.newPassword}
          placeholder="New password"
          register={{
            ...register("newPassword", {
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
                value === getValues("newPassword") || "password should match",
            }),
          }}
        />
        <div className="flex justify-end">
          <Button
            size="small"
            type={"submit"}
            disabled={
              isLoading ||
              Object.keys(errors).length ||
              !getValues("oldPassword") ||
              !getValues("newPassword") ||
              !getValues("confirmPassword")
            }
          >
            save
          </Button>
        </div>
      </form>
    </section>
  );
}
