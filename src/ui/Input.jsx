export default function Input({
  type = "text",
  value,
  error,
  register,
  placeholder,
  autoComplete,
  additional,
  defaultValue = "",
}) {
  return (
    <>
      <div className="relative w-full">
        {value ? (
          <label className=" absolute top-2 left-6 text-gray text-xsmall">
            {placeholder}
          </label>
        ) : (
          ""
        )}
        <input
          type={type}
          className={`w-full text-small bg-secondary-background rounded-lg h-20 px-6 focus:outline focus:outline-[1px] focus:outline-primary-color focus:outline-offset-2 ${
            value
              ? error?.message
                ? "border border-warning-color"
                : "border  border-success-color"
              : ""
          }`}
          autoComplete={autoComplete}
          placeholder={placeholder}
          defaultValue={defaultValue}
          {...register}
          {...additional}
        />
        {value && (
          <span className=" absolute top-1/2 translate-y-[-50%] right-6">
            {value ? (
              error ? (
                <span className=" text-warning-color">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    height="25px"
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
                  </svg>
                </span>
              ) : (
                <span className=" text-success-color">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="25px"
                    width="25px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              )
            ) : (
              ""
            )}
          </span>
        )}
      </div>
      {error?.message && (
        <p className=" text-xsmall text-warning-color px-4 py-1">
          {error?.message}
        </p>
      )}
    </>
  );
}
