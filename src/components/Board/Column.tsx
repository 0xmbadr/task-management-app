import { IColumn } from '../../@types/data';

interface ColumnsProps {
  columnData: IColumn | undefined;
}
const Column = ({ columnData }: ColumnsProps) => {
  return (
    <div className="Column">
      <div className="Column__title">&nbsp;</div>
      <button className="Column__addNew" onClick={() => {}}>
        + New Column
      </button>
    </div>
  );
};

export default Column;
