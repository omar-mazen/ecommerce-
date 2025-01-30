export default function Toggle({ children, value, toggle }) {
  return (
    <div className="flex flex-row items-center justify-between">
      <span className="text-medium font-medium ">{children}</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={value}
          onChange={toggle}
          className="sr-only peer"
        />
        <div
          className={`w-[40px] h-[20px] after:start-[10px] after:h-[13px] after:w-[13px] after:top-[50%] after:translate-y-[-50%] after:translate-x-[-50%] bg-gray rounded-full peer-checked:after:translate-x-[100%] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-text after:content-[''] after:absolute after:bg-white  after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-green-500`}
        ></div>
      </label>
    </div>
  );
}
