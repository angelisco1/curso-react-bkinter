import { createPortal } from 'react-dom'
import './Modal.css'

export const Modal = ({ children, onClose }) => {
  console.log(children)
  
  return createPortal(
    <div className="backdrop">
      <div className="modal">
        <div className="header">
          <button type="button" onClick={onClose}>X</button>
        </div>
        <div className="body">
          {children}
        </div>
        <div className="footer">
          <button type="button" onClick={onClose}>Aceptar</button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}