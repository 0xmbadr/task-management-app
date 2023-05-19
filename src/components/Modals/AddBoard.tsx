import Button from '../standard/Button';
import Modal from '../standard/Modal';

const AddBoard = () => {
  return (
    <Modal>
      <form className="AddNew">
        <div className="AddNew__heading">
          <h2>Add New Board</h2>
        </div>
        <div className="AddNew__wrapper">
          <p className="AddNew__subtitle">name</p>
          <label className="AddNew__label">
            <input type="text" />
          </label>
        </div>
        <div className="AddNew__wrapper">
          <p className="AddNew__subtitle">Column</p>
          <label className="AddNew__label">
            <input type="text" />
          </label>

          <Button small colorTheme style={{ marginTop: '0.5rem' }}>
            + Add New Column
          </Button>
        </div>
        <div className="AddNew__wrapper">
          <Button small type="submit">
            Create New Board
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddBoard;
