// Import only the type 'TaskProps' from the '../types/types' file.
// 'import type' ensures this import exists only in TypeScript for type checking
// and is removed from the compiled JavaScript output.
import type { TaskProps } from '../types/types';

// Export a default React functional component named 'TaskList'.
// This component takes a single prop called 'tasks', whose shape is defined by 'TaskProps'.
export default function TaskList({ tasks }: TaskProps) {
  // Return the JSX to render
  return (
    <div>
      {/* Loop over each task in the tasks array */}
      {tasks.map((task, index) => (
        // Each task is wrapped in a <div> with a 'key' attribute.
        // The 'key' helps React identify which items have changed, been added, or removed.
        <div key={index}>
          {/* Display the task's name */}
          <p>{task.name}</p>

          {/* Display 'Done' if status is true, otherwise display 'pending' */}
          <p>{task.status ? 'Done' : 'pending'}</p>
        </div>
      ))}
    </div>
  );
}
