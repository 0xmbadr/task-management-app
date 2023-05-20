import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { IBoard, IColumn } from '../../@types/data';
import { nanoid } from '@reduxjs/toolkit';
import { editBoard, setCurrentTab } from '../../app/slices/dataSlice';
import { closeModal } from '../../app/slices/modalSlice';
import Modal from '../standard/Modal';
import { ImCross } from 'react-icons/im';
import Button from '../standard/Button';

const EditBoard = () => {
  // Store
  const dispatch = useAppDispatch();
  const boards = useAppSelector((state) => state.data);
  const currentBoardTab = useAppSelector((state) => state.data.currentTab);
  const modalType = useAppSelector((state) => state.modal);

  // variables
  const currentBoard = boards.data.find(
    (item) => item.name === currentBoardTab,
  );
  const isAddNewColumnModal = modalType?.ModalDetail?.type === 'AddNewColumn';

  // return null if there is no board
  if (!currentBoardTab) return null;

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<IBoard>({
    defaultValues: {
      id: currentBoard?.id,
      name: currentBoard?.name,
      columns: currentBoard?.columns?.map((item: IColumn) => ({
        id: item.id,
        name: item.name,
        tasks: item.tasks,
      })),
    },
  });

  // Handle Dynamic fields
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'columns',
  });

  const watchFieldArrays = watch('columns');

  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArrays?.[index],
    };
  });

  const onSubmit: SubmitHandler<IBoard> = (data) => {
    dispatch(editBoard({ currentBoard: currentBoardTab, newBoard: data }));
    dispatch(setCurrentTab(data.name));
    dispatch(closeModal());
  };

  // util fn
  const hasDuplicates = (
    value = '',
    index: number,
    array: IColumn[] | undefined,
  ) => {
    if (!array) return;
    const arr = array.map((i) => i.name);
    if (arr.indexOf(value) !== index) {
      return false;
    }
    return true;
  };

  const registerOptions = {
    name: {
      required: true,
      validate: (value: string | undefined) =>
        !boardItem.find(
          (item) => item.name?.toLowerCase() == value?.toLowerCase(),
        ) || 'This Board already exists',
    },
  };

  return (
    <Modal>
      <form className="AddNew" onSubmit={handleSubmit(onSubmit)}>
        <div className="AddNew__heading">
          <h2>{isAddNewColumnModal ? 'Add New Column' : 'Edit Board'}</h2>
        </div>

        {/* ======= Form name field ========= */}
        <div className="AddNew__wrapper">
          <p className="AddNew__subtitle">name</p>
          <label
            className={`AddNew__label ${errors.name && 'AddNew__label--err'}`}>
            <input
              defaultValue={currentBoard?.name}
              disabled={isAddNewColumnModal}
              style={isAddNewColumnModal ? { opacity: 0.3 } : {}}
              type="text"
              {...register('name', {
                validate: (value) => {
                  if (currentBoard?.name == value) return true;

                  return !boards.data.find(
                    (item) => item.name?.toLowerCase() == value?.toLowerCase(),
                  );
                },
                required: true,
              })}
            />
            {errors.name?.type == 'validate' && (
              <span className="AddNew__label--errTxt">
                {errors.name.message}
              </span>
            )}
            {errors.name?.type == 'required' && (
              <span className="AddNew__label--errTxt">
                name field is required!
              </span>
            )}
          </label>
        </div>

        {/* ======= Form columns field ========= */}
        <div className="AddNew__wrapper">
          <p className="AddNew__subtitle">Columns</p>

          <ul className="AddNew__list">
            {controlledFields.map((item: IColumn, index: number) => (
              <li className="AddNew__list-item" key={item.id}>
                <label
                  className={`AddNew__label ${
                    errors.columns?.[index]?.name && 'AddNew__label--err'
                  }`}>
                  <input
                    defaultValue={`${item.name}`}
                    {...register(`columns.${index}.name`, {
                      required: true,
                      validate: (value) =>
                        hasDuplicates(value, index, watchFieldArrays) ||
                        'This Column name is already in use',
                    })}
                  />
                  {errors.columns?.[index]?.name?.type == 'validate' && (
                    <span className="AddNew__label--errTxt">
                      {errors.columns[index]?.name?.message}
                    </span>
                  )}

                  {errors.columns?.[index]?.name?.type == 'required' && (
                    <span className="AddNew__label--errTxt">
                      column field is required!
                    </span>
                  )}
                </label>

                {fields.length > 1 && (
                  <button
                    type="button"
                    style={
                      item.tasks!.length < 1
                        ? {}
                        : { opacity: '0.2', pointerEvents: 'none' }
                    }
                    onClick={() => remove(index)}>
                    <ImCross fill={'gray'} />
                  </button>
                )}
              </li>
            ))}
          </ul>

          {fields.length < 6 && (
            <Button
              small
              colorTheme
              style={{ marginTop: '0.5rem' }}
              onClick={() => append({ id: nanoid(), name: '', tasks: [] })}>
              + Add New Column
            </Button>
          )}
        </div>
        <div className="AddNew__wrapper">
          <Button small type="submit">
            save changes
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditBoard;
