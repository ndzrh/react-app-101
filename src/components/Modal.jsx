import { createPortal } from "react-dom";

export default function Modal() {
    //outside div id=root
    return createPortal(
            <div>
                Modal
            </div>,document.getElementById('modal')
        );
}