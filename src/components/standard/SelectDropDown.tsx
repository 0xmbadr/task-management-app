import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import DropDownItem from './DropDownItem';
import { BsChevronDown } from 'react-icons/bs';

interface SelectDropDownProps {
  status: string[];
  currentStatus: string | '';
  onSetCurrentStatus: (status: string) => void;
}

const SelectDropDown = ({
  status,
  currentStatus,
  onSetCurrentStatus,
}: SelectDropDownProps) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const selectDropDownRef = useRef(null);

  const handleOpenDropDown = () => {
    setOpenDropDown((prev) => !prev);
  };

  const handleSetCurrentStatus = (status: string) => {
    onSetCurrentStatus(status);
    setOpenDropDown(false);
  };

  const handleClickOutside = () => {
    setOpenDropDown(false);
  };

  useOnClickOutside(selectDropDownRef, handleClickOutside);

  return (
    <div className="SelectDropDown" ref={selectDropDownRef}>
      <button
        type="button"
        className="SelectDropDown__trigger"
        onClick={handleOpenDropDown}
        title={currentStatus}>
        <span className="SelectDropDown__trigger-text">{currentStatus}</span>
        <span
          className="SelectDropDown__trigger-icon"
          style={openDropDown ? { transform: 'rotate(180deg)' } : {}}>
          <BsChevronDown />
        </span>
      </button>
      {openDropDown && (
        <div className="SelectDropDown__wrapper">
          {status.map((item: string, index: number) => (
            <DropDownItem
              key={index}
              item={item}
              handleSetCurrentStatus={handleSetCurrentStatus}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropDown;
