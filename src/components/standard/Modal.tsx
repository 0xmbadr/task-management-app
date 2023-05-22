import { ImCross } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../app/slices/modalSlice';
import { useEffect } from 'react';
type ModalProps = {
  children: JSX.Element;
};

const Modal = ({ children }: ModalProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleCloseModal = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        dispatch(closeModal());

        // remove focus from clicked button (that triggered Modal)
        (document.activeElement as HTMLElement).blur();
      }
    };
    document.addEventListener('keydown', handleCloseModal);
    // remove event listener, no point of tracking the clicks after closing the modal
    return () => document.removeEventListener('keydown', handleCloseModal);
  }, [dispatch]);

  return (
    <div className="Overlay" onClick={() => dispatch(closeModal())}>
      <div className="Modal" onClick={(e) => e.stopPropagation()}>
        <button className="Modal__close" onClick={() => dispatch(closeModal())}>
          <ImCross />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
