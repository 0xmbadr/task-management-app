interface DropDownItemProps {
  item: string;
  handleSetCurrentStatus: (item: string) => void;
}

const DropDownItem = ({ item, handleSetCurrentStatus }: DropDownItemProps) => {
  return (
    <button
      type="button"
      className="SelectDropDown__btn"
      onClick={() => handleSetCurrentStatus(item)}
      title={item}>
      <span className="SelectDropDown__btn-text">{item}</span>
    </button>
  );
};

export default DropDownItem;
