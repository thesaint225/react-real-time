// Task List

export type Task = {
  id: string;
  name: string;
  status: boolean;
};

export type TaskProps = {
  tasks: Task[];
};

// props for a single TaskItem component

export type TaskItemProps = {
  name: string;
  status: boolean;
  onToggle: () => void; //function to toggle the task status
  onDelete: () => void;
};

// Props for TaskList component
export type TaskListProps = {
  tasks: Task[]; // array of tasks
  onToggle: (id: string) => void; // function to toggle a task by its ID
  onDelete: (id: string) => void; // added delete  handler
};
