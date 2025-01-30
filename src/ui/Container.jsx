export default function Container({ children, style }) {
  return (
    <div className={`pb-8 order-0 overflow-y-scroll ${style}`}>{children}</div>
  );
}
