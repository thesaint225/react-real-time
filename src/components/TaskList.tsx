// Import only the type 'TaskProps' from the '../types/types' file.
// 'import type' ensures this import exists only in TypeScript for type checking
// and is removed from the compiled JavaScript output.
import type { TaskProps } from '../types/types';
import TaskItem from './TaskItem';

// Export a default React functional component named 'TaskList'.
// This component takes a single prop called 'tasks', whose shape is defined by 'TaskProps'.
export default function TaskList({ tasks }: TaskProps) {
  // Return the JSX to render
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem key={index} name={task.name} status={task.status} />
      ))}
    </div>
  );
}
