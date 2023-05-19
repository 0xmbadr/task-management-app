import { ImCross } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../app/slices/modalSlice';
type ModalProps = {
  children: JSX.Element;
};

const Modal = ({ children }: ModalProps) => {
  const dispatch = useDispatch();

  return (
    <div className="Overlay" onClick={() => dispatch(closeModal())}>
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
