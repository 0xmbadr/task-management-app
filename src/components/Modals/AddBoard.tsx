import Modal from '../standard/Modal';

const AddBoard = () => {
  return (
    <Modal>
      <form>
        <div>
          <h2>Add New Board</h2>
        </div>
        <div>
          <p>name</p>
          <label>
            <input />
          </label>
        </div>
        <div>
          <p>Column</p>
          <label>
            <input />
          </label>
        </div>
        <button>Create New Board</button>
      </form>
    </Modal>
  );
};

export default AddBoard;
