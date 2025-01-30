export default function Star({
  fill,
  onClick,
  onHoverIn,
  onHoverOut,
  size = 15,
  color = "[#FFBA49]",
}) {
  return (
    <li
      onClick={onClick}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      className={`cursor-pointer text-${color}`}
    >
      {fill ? (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height={`${size || 15}px`}
          width={`${size || 15}px`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m12.672.668 3.059 6.197 6.838.993a.75.75 0 0 1 .416 1.28l-4.948 4.823 1.168 6.812a.75.75 0 0 1-1.088.79L12 18.347l-6.116 3.216a.75.75 0 0 1-1.088-.791l1.168-6.811-4.948-4.823a.749.749 0 0 1 .416-1.279l6.838-.994L11.327.668a.75.75 0 0 1 1.345 0Z"></path>
        </svg>
      ) : (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height={`${size || 15}px`}
          width={`${size || 15}px`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 .25a.75.75 0 0 1 .673.418l3.058 6.197 6.839.994a.75.75 0 0 1 .415 1.279l-4.948 4.823 1.168 6.811a.751.751 0 0 1-1.088.791L12 18.347l-6.117 3.216a.75.75 0 0 1-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 0 1 .416-1.28l6.838-.993L11.328.668A.75.75 0 0 1 12 .25Zm0 2.445L9.44 7.882a.75.75 0 0 1-.565.41l-5.725.832 4.143 4.038a.748.748 0 0 1 .215.664l-.978 5.702 5.121-2.692a.75.75 0 0 1 .698 0l5.12 2.692-.977-5.702a.748.748 0 0 1 .215-.664l4.143-4.038-5.725-.831a.75.75 0 0 1-.565-.41L12 2.694Z"></path>
        </svg>
      )}
    </li>
  );
}
