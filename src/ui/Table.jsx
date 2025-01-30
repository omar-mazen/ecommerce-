export default function Table({ children, footer }) {
  return (
    <div className="">
      <div
        className={`rounded-2xl overflow-x-auto whitespace-nowrap w-full lg:mb-0 mb-[-0.6rem] border-2 border-secondary-background ${
          footer ? "border-b-0 rounded-b-none" : ""
        }`}
      >
        <table className="table text-left w-full text-small">{children}</table>
      </div>
      {footer && (
        <div className=" bg-secondary-background rounded-b-2xl py-4 px-8 text-small w-full">
          {footer}
        </div>
      )}
    </div>
  );
}
function Head({ children }) {
  return (
    <thead className="bg-secondary-background text-nowrap ">{children}</thead>
  );
}
function Cell({ children, head, bold }) {
  if (head)
    return (
      <th className="py-4 px-8 text-ellipsis text-nowrap  ">{children}</th>
    );
  else
    return (
      <th
        className={`py-4 px-8 text-nowrap text-ellipsis  ${
          bold ? "font-semibold" : "font-normal"
        }`}
      >
        {children}
      </th>
    );
}
function Body({ children }) {
  return <tbody>{children}</tbody>;
}
function Row({ children, onClick }) {
  return (
    <tr
      onClick={() => onClick?.()}
      className={`even:border-t odd:border-b last-of-type:border-0 border-secondary-background ${
        onClick ? "cursor-pointer" : ""
      }`}
    >
      {children}
    </tr>
  );
}
function Footer({ children }) {
  return (
    <tfoot className="bg-secondary-background appearance-none w-full ">
      {children}
    </tfoot>
  );
}
Table.Head = Head;
Table.Row = Row;
Table.Cell = Cell;
Table.Body = Body;
Table.Footer = Footer;
