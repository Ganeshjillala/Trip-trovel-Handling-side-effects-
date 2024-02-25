import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

// when we use useEffect ,making Modal component declarative rather than imperative,so using state
function Modal({ children, open, onClose }) {
  //onclose is used to close dialog box on ESC click
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal"),
  );
}

export default Modal;
