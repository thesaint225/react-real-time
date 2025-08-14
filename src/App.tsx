// Import the global CSS styles for the app.
import './App.css';

// Import the TaskList component, which is responsible for displaying tasks.
import TaskList from './components/TaskList';

// Import the Task type definition (for type checking only, not included in compiled JS).
import type { Task } from './types/types';

function App() {
  // Declare an array of tasks, each with a name (string) and a status (boolean).
  // The Task[] type ensures every object in this array matches the Task type definition.
  const tasks: Task[] = [
    { name: 'Design homepage', status: true }, // Task 1 - completed
    { name: 'Fix login bug', status: false }, // Task 2 - not completed
    { name: 'Write tests', status: false }, // Task 3 - not completed
  ];

  return (
    <>
      {/* Render the TaskList component and pass the tasks array as a prop */}
      <TaskList tasks={tasks} />
    </>
  );
}

// Export the App component so it can be used as the root component in main.tsx.
export default App;
