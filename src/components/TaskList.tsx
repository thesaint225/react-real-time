import TaskItem from './TaskItem';
import type { TaskListProps } from '../types/types';

export default function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          name={task.name}
          status={task.status}
          onToggle={() => onToggle(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </div>
  );
}
