import Header from "../../ui/Header";
import Toggle from "../../ui/Toggle";

export default function Notifications() {
  return (
    <>
      <Header>Notifications</Header>
      <ul className=" container flex flex-col">
        <li className="flex flex-col justify-between">
          <Toggle>Sales</Toggle>
        </li>
        <li className="flex flex-col justify-between">
          <Toggle>New arrivals</Toggle>
        </li>
        <li className="flex flex-col justify-between">
          <Toggle>Delivery status changes</Toggle>
        </li>
      </ul>
    </>
  );
}
