import React from 'react'
import FormContentsModal from "./FormContentsModal";

const Modal = ({ id = 'modal', onClose = () => {}, getAllContents })  => {
    
    const handleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }
    return (
        <div id={id} className='modalContent' onClick={handleOutsideClick}>
        <div className="containerContent">
            <button className="closeContent" onClick={onClose}/>
            <div className="contentContent"><FormContentsModal getAllContents={getAllContents} onSuccess={onClose}/></div>
        </div>
    </div>
    )
}

export default Modal;
