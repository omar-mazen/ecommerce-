import { useContext, useState } from "react";
import { createContext } from "react";
import useClickOutside from "../Hooks/useClickOutside";
import { createPortal } from "react-dom";

const MenuContext = createContext();

export default function Menu({ children }) {
  const [openName, setOpenName] = useState(false);
  const [position, setPosition] = useState({});
  const open = setOpenName;
  const close = () => setOpenName("");
  return (
    <MenuContext.Provider
      value={{
        open,
        close,
        position,
        openName,
        setPosition,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function Toggle({ children, name }) {
  const { close, open, setPosition, openName } = useMenu();
  console.log(name);
  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.right,
      y: rect.height + rect.y + 8,
    });
    name == openName ? close() : open(name);
  }
  return (
    <button className="text-gray" onClick={handleClick}>
      {children}
    </button>
  );
}
function List({ children, name }) {
  const { close, position, openName } = useMenu();
  const ref = useClickOutside("click", close, false);
  if (name != openName) return null;
  return createPortal(
    <ul
      ref={ref}
      style={{
        top: `${position.y}px`,
        right: `${position.x}px`,
      }}
      className={`border border-text/20 rounded-lg w-fit divide-y divide-text/20 absolute drop-shadow-md`}
    >
      {children}
    </ul>,
    document.body
  );
}
function Item({ children, icon, onClick }) {
  const { close } = useMenu();
  return (
    <li
      onClick={() => {
        onClick?.();
        close();
      }}
      className="grid grid-cols-[25px,1fr] items-center text-small px-6 py-4 bg-secondary-background hover:brightness-[0.9] transition-all duration-100 ease-in-out text-gray cursor-pointer opacity"
    >
      <span className=" self-center justify-self-start">{icon}</span>
      <span>{children}</span>
    </li>
  );
}
Menu.Toggle = Toggle;
Menu.List = List;
Menu.Item = Item;

function useMenu() {
  const { open, close, position, setPosition, openName } =
    useContext(MenuContext);
  return { open, close, position, setPosition, openName };
}
