import { IColumn } from '../../@types/data';
import { useAppDispatch } from '../../app/hooks';
import { openModal } from '../../app/slices/modalSlice';
import Card from './Card';

interface ColumnsProps {
  columnData: IColumn | undefined;
  ballColor: number;
}
const Column = ({ columnData, ballColor }: ColumnsProps) => {
  const dispatch = useAppDispatch();
  if (!columnData) {
    return (
      <div className="Column">
        <div className="Column__title">&nbsp;</div>
        <button
          className="Column__addNew"
          onClick={() =>
            dispatch(
              openModal({
                ModalType: 'EditBoard',
                ModalDetail: { type: 'AddNewColumn' },
              }),
            )
          }>
          + New Column
        </button>
      </div>
    );
  }

  return (
    <div className="Column">
      <div className="Column__title">
        <span
          className={`Column__title-ball Column__title-ball--${ballColor}`}></span>
        <span className="Column__title-text" title={columnData.name}>
          {columnData.name}({columnData.tasks?.length})
        </span>
      </div>

      <div
        className={`Column__container ${
          columnData.tasks?.length ? '' : 'Column__container--empty'
        }`}>
        {columnData.tasks?.map((card, index) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
};

export default Column;
