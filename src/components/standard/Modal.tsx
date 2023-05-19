import { ImCross } from 'react-icons/im';
type ModalProps = {
  children: JSX.Element;
};

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="Overlay">
      <div className="Modal">
        <button className="Modal__close">
          <ImCross />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
