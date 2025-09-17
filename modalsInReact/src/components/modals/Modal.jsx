import { createPortal } from 'react-dom';
import './Modal.css';

const Modal =({onClose, children})=>{
    return createPortal(
    <div className='modal-overlay' onClick={onClose}>
        <div
        className='modal-content'
        onClick={(e)=>e.stopPropagation()}> 
            {children}
            <button className='close-btn' onClick={onClose}>Close</button>
        </div>
    </div>, document.getElementById('modal-root')
    )
}

export default Modal;