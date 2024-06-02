import { ToastContainer, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type TAlert = {
  rtl?: boolean;
  autoClose?: number;
  draggable?: boolean;
  newestOnTop?: boolean;
  pauseOnHover?: boolean;
  closeOnClick?: boolean;
  position?: ToastPosition;
  hideProgressBar?: boolean;
  pauseOnFocusLoss?: boolean;
};

export default function Alert({
  rtl = false,
  autoClose = 5000,
  draggable = true,
  newestOnTop = false,
  pauseOnHover = true,
  closeOnClick = true,
  position = "top-right",
  hideProgressBar = false,
  pauseOnFocusLoss = true
}: TAlert) {
  return (
    <ToastContainer
      rtl={rtl}
      position={position}
      autoClose={autoClose}
      draggable={draggable}
      newestOnTop={newestOnTop}
      pauseOnHover={pauseOnHover}
      closeOnClick={closeOnClick}
      hideProgressBar={hideProgressBar}
      pauseOnFocusLoss={pauseOnFocusLoss}
    />
  );
}
