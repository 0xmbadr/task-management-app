import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../standard/Button';
import Modal from '../standard/Modal';
import { IBoard } from '../../@types/data';
import { nanoid } from '@reduxjs/toolkit';

const AddBoard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IBoard>({
    defaultValues: {
      name: '',
      id: nanoid(),
      columns: [
        {
          id: nanoid(),
          name: '',
          tasks: [],
        },
      ],
    },
  });

  const onSubmit: SubmitHandler<IBoard> = (data) => {
    console.log(data);
  };

  const registerOptions = {
    name: {
      required: 'name field is required!',
      validate: (value: string | undefined) =>
        !value?.includes('o') || 'name must not include o',
    },
  };

  return (
    <Modal>
      <form className="AddNew" onSubmit={handleSubmit(onSubmit)}>
        <div className="AddNew__heading">
          <h2>Add New Board</h2>
        </div>
        <div className="AddNew__wrapper">
          <p className="AddNew__subtitle">name</p>
          <label
            className={`AddNew__label ${errors.name && 'AddNew__label--err'}`}>
            <input type="text" {...register('name', registerOptions.name)} />
            {errors.name?.type == 'validate' && (
              <span className="AddNew__label--errTxt">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div className="AddNew__wrapper">
          <p className="AddNew__subtitle">Column</p>
          <label className="AddNew__label">
            <input
              type="text"
              {...register('columns.0.name', { required: true })}
            />
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
