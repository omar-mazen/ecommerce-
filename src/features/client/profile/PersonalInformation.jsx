import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from "../../../ui/Input";
import useUser from "../../shared/authentication/useUser";
import Button from "../../../ui/Button";

export default function PersonalInformation() {
  const { user } = useUser();
  const [selectedDate, setSelectedDate] = useState(user?.DOP || "");
  const {
    register,
    formState: { errors },
    getValues,
  } = useForm({ mode: "onChange" });

  return (
    <section className="container">
      <h2 className="text-medium mb-4">Personal Information</h2>
      <div className="mb-4">
        <Input
          autoComplete="name"
          value={getValues("fullName")}
          defaultValue={user?.userName}
          error={errors.fullName}
          placeholder="Full name"
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
              pattern: {
                value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{7,29}$/gim,
                message:
                  "Username must start with a letter or number, can include dots and underscores, and should be 8-30 characters long. Avoid starting or ending with a dot",
              },
            }),
          }}
        />
      </div>
      {/* birhdate */}
      <div className="w-full relative">
        {selectedDate !== "" ? (
          <label className=" absolute top-2 left-6 text-gray-dark text-xsmall z-10">
            Birth date
          </label>
        ) : (
          ""
        )}
        <DatePicker
          className="w-full bg-secondary-background rounded-lg h-20 px-6 text-medium outline-none focus:ring-[1px] focus:ring-primary-color "
          selected={selectedDate}
          onChange={setSelectedDate}
          dateFormat={"dd/MM/YYYY"}
          dateFormatCalendar="dd/MM/YYYY"
          placeholderText="Birth date"
          maxDate={new Date() - 18 * 365.25 * 24 * 60 * 60 * 1000}
          minDate={new Date() - 100 * 365.25 * 24 * 60 * 60 * 1000}
          showYearDropdown
          showMonthDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={100}
        />
      </div>
      <div className=" my-5 flex justify-end">
        <Button
          size="small"
          disabled={
            Object.keys(errors).length > 0 ||
            !getValues("fullName") ||
            !selectedDate
          }
        >
          save
        </Button>
      </div>
    </section>
  );
}
