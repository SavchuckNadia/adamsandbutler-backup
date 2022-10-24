import { toast } from "react-toastify";

export const toastNotification = (type, text) => {
    return toast[type](text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});
} 
 