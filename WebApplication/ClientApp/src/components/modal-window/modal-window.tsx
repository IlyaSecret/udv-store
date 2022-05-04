import React from "react";
import "./modal-window.css";



export const ModalWindow = ({active, setActive, children}: any) => {

    const setModalActive = () => {
        setActive(false);
    }

    return (
        <div className={active ? "modal-window active" : "modal-window"} onClick={setModalActive}>
            <div className={active ? "modal-window__content active" : "modal-window__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}