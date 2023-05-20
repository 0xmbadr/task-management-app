import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import Button from '../standard/Button';
import Modal from '../standard/Modal';
import { IBoard, IColumn } from '../../@types/data';
import { nanoid } from '@reduxjs/toolkit';
import { ImCross } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { addBoard, setCurrentTab } from '../../app/slices/dataSlice';
import { useAppSelector } from '../../app/hooks';
import { closeModal } from './../../app/slices/modalSlice';

const AddBoard = () => {
  // Store
  const dispatch = useDispatch();
  const boardItem = useAppSelector((state) => state.data.data);

  const {
    register,
    handleSubmit,
    control,
    watch,
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
    dispatch(addBoard(data));
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
          <h2>Add New Board</h2>
        </div>

        {/* ======= Form name field ========= */}
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
            {errors.name?.type == 'required' && (
              <span className="AddNew__label--errTxt">
                name field is required!
              </span>
            )}
          </label>
        </div>

        {/* ======= Form columns field ========= */}
        <div className="AddNew__wrapper">
          <p className="AddNew__subtitle">Column</p>

          <ul className="AddNew__list">
            {controlledFields.map((item: IColumn, index: number) => (
              <li className="AddNew__list-item" key={item.id}>
                <label
                  className={`AddNew__label ${
                    errors.columns?.[index]?.name && 'AddNew__label--err'
                  }`}>
                  <input
                    {...register(`columns.${index}.name`, {
                      required: true,
                      validate: (value) =>
                        hasDuplicates(value, index, watchFieldArrays) ||
                        'This Column named is already in use',
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
                  <button type="button" onClick={() => remove(index)}>
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
            Create New Board
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default AddBoard;
