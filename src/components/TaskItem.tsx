// Import only the "type" named Task from the shared types file.
// This ensures we use it purely for type checking and it won't appear in the compiled JavaScript.
import type { Task } from '../types/types';

// Define and export the Task component.
// The component receives its props by destructuring `name` and `status` from the Task type.
// This means we expect an object with a `name` string and a `status` boolean.
export default function TaskItem({ name, status }: Task) {
  // The JSX returned will render a container <div>
  // Inside, it displays:
  // 1. The name of the task.
  // 2. The status of the task as text: 'Done' if true, 'Pending' if false.
  return (
    <div>
      {/* Display the name of the task */}
      <p>{name}</p>

      {/* Conditional rendering:
          If `status` is true → show "Done"
          If `status` is false → show "Pending" */}
      <p>{status ? 'Done' : 'Pending'}</p>
    </div>
  );
}
