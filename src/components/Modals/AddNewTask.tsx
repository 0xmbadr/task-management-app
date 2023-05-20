import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { nanoid } from '@reduxjs/toolkit';
import { IBoard, ISubTask, ITask } from '../../@types/data';
import { closeModal } from '../../app/slices/modalSlice';
import { addTask } from '../../app/slices/dataSlice';
import Modal from '../standard/Modal';
import { ImCross } from 'react-icons/im';
import Button from '../standard/Button';

const AddNewTask = () => {
  // Store
  const dispatch = useAppDispatch();
  const boards = useAppSelector((state) => state.data);
  const currentBoardTab = useAppSelector((state) => state.data.currentTab);

  // variables
  const targetBoard = boards.data.find((item) => item.name === currentBoardTab);
  const boardStatus = boards.currentTabStatus;

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm<ITask>({
    defaultValues: {
      id: nanoid(),
      title: '',
      description: '',
      subtasks: [{ title: '', isCompleted: false }],
      status: boardStatus[0],
    },
  });

  // Handle Dynamic fields
  const status = getValues().status;
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'subtasks',
  });

  const onSubmit: SubmitHandler<ITask> = (data) => {
    dispatch(addTask({ currentBoard: currentBoardTab, newTask: data }));
    dispatch(closeModal());
  };

  return (
    <Modal>
      <form className="AddNew" onSubmit={handleSubmit(onSubmit)}>
        <div className="AddNew__heading">
          <h2>Add New Task</h2>
        </div>

        {/* ======= Form title field ========= */}
        <div className="AddNew__wrapper">
          <p className="AddNew__subtitle">name</p>
          <label
            className={`AddNew__label ${errors.title && 'AddNew__label--err'}`}>
            <input
              type="text"
              {...register('title', {
                validate: (value) => {
                  if (!targetBoard?.columns) return;
                  return !targetBoard.columns.find((column) =>
                    column.tasks?.find(
                      (task) =>
                        task.title?.toLowerCase() == value?.toLowerCase(),
                    ),
                  );
                },
              })}
            />
            {errors.title?.type == 'validate' && (
              <span className="AddNew__label--errTxt">
                task title is already in use
              </span>
            )}
            {errors.title?.type == 'required' && (
              <span className="AddNew__label--errTxt">
                title field is required!
              </span>
            )}
          </label>
        </div>

        {/* ======= Form desc field ========= */}

        <div className="AddNew__wrapper">
          <p className="AddNew__subtitle">Description</p>
          <textarea
            className="AddNew__desc"
            rows={4}
            {...register('description')}
          />
        </div>

        {/* ======= Form columns field ========= */}
        <div className="AddNew__wrapper">
          <p className="AddNew__subtitle">Subtasks</p>

          <ul className="AddNew__list">
            {fields.map((item: ISubTask, index: number) => {
              return (
                <li className="AddNew__list-item" key={index}>
                  <label
                    className={`AddNew__label ${
                      errors.subtasks?.[index]?.title && 'AddNew__label--err'
                    }`}>
                    <input
                      type="text"
                      defaultValue={`${item.title}`}
                      {...register(`subtasks.${index}.title`, {
                        required: true,
                      })}
                    />
                    {errors.subtasks?.[index]?.title?.type == 'required' && (
                      <span className="AddNew__label--errTxt">
                        subtak name is Required
                      </span>
                    )}
                  </label>
                  <button
                    type="button"
                    className=""
                    onClick={() => remove(index)}>
                    <ImCross />
                  </button>
                </li>
              );
            })}
          </ul>

          {fields.length < 7 && (
            <Button
              small
              colorTheme
              style={{ marginTop: '0.5rem' }}
              onClick={() => append({ title: '', isCompleted: false })}>
              + Add New Subtask
            </Button>
          )}
        </div>

        <div className="AddNew__wrapper">
          <Button small type="submit">
            Create Task
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddNewTask;
