export default function User({ size = 64 }) {
  return (
    <div className=" flex items-center justify-center text-primary-background bg-gray w-full h-full rounded-full p-[8px] aspect-square">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 20 20"
        aria-hidden="true"
        height={`${size}px`}
        width={`${size}px`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"></path>
      </svg>
    </div>
  );
}
