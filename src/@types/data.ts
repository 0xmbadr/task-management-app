export interface ISubTask {
  title: string;
  isCompleted: boolean;
}

export interface ITask {
  id: string;
  title?: string;
  description?: string;
  status?: string;
  subtasks?: ISubTask[];
}

export interface IColumn {
  id: string;
  name?: string;
  tasks?: ITask[];
}

export interface IBoard {
  id: string;
  name?: string;
  columns?: IColumn[];
}
