import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import useClickOutside from "../Hooks/useClickOutside";
import useKeystroke from "../Hooks/useKeyStorke";

const ModalContext = createContext();

export default function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const open = setOpenName;
  const close = () => setOpenName("");
  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}
function Open({ children, opens: openWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(openWindowName) });
}
function Window({ name, children }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useClickOutside("click", close);
  useKeystroke("Escape", close);
  if (openName != name) return null;
  return createPortal(
    // modal overlay
    <div className="fixed top-0 left-0 min-w-full min-h-full backdrop-blur-sm transition-all duration-[0.5s] z-[999] bg-text/20">
      {/* modal */}
      <div
        ref={ref}
        className="sm:py-16 p-5 sm:px-20 h-full w-full sm:max-w-fit sm:h-fit sm:max-h-[90%] overflow-y-auto flex items-center justify-center bg-primary-background fixed top-1/2 left-1/2 translate-x-[-50%] max-w-full translate-y-[-50%] rounded-lg"
      >
        <button className=" p-2 absolute top-2 right-2" onClick={close}>
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
        </button>
        <div className="min-w-fit w-fit ">
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.Window = Window;
Modal.Open = Open;
