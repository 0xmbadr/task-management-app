import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import Button from '../standard/Button';
import Modal from '../standard/Modal';
import { IBoard, IColumn } from '../../@types/data';
import { nanoid } from '@reduxjs/toolkit';

const AddBoard = () => {
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
    console.log(data);
  };

  const registerOptions = {
    name: {
      required: true,
      validate: (value: string | undefined) =>
        !value?.includes('o') || 'name must not include o',
    },
    columns: {
      required: true,
      validate: (value: string | undefined) =>
        !value?.includes('o') || 'column name must not include o',
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

          <ul>
            {controlledFields.map((item: IColumn, index: number) => (
              <li className="" key={item.id}>
                <label
                  className={`AddNew__label ${
                    errors.columns?.[index]?.name && 'AddNew__label--err'
                  }`}>
                  <input
                    {...register(
                      `columns.${index}.name`,
                      registerOptions.columns,
                    )}
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
              </li>
            ))}
          </ul>

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
