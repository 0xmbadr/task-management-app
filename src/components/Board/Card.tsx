import { ITask } from '../../@types/data';
import { useAppDispatch } from '../../app/hooks';
import { openModal } from '../../app/slices/modalSlice';

interface CardProps {
  card: ITask;
}
const Card = ({ card }: CardProps) => {
  const dispatch = useAppDispatch();
  const countCompleted = card.subtasks?.filter(
    (item) => item.isCompleted === true,
  );

  return (
    <div
      className="Card"
      onClick={() =>
        dispatch(openModal({ ModalType: 'ViewTask', ModalDetail: card }))
      }>
      <div className="Card__title">{card.title}</div>
      <div className="Card__count">
        {countCompleted?.length} of {card.subtasks?.length} subtasks
      </div>
    </div>
  );
};

export default Card;
