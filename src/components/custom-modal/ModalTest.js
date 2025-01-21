import React, {useState} from 'react';
import Modal from './Modal';

const ModalTest = () => {
    const [showModalPopup, setShowModalPopup] = useState(false);

    const handleToggle = () => {
        setShowModalPopup(!showModalPopup)
    }
  return (
    <div>
        <button onClick={handleToggle}>Open Modal Popup</button>
        {
            showModalPopup && <Modal />
        }
    </div>
  )
}

export default ModalTest