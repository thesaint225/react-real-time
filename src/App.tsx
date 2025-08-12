import './App.css';
import TaskList from './components/TaskList';
import type { Task } from './types/types';

function App() {
  const tasks: Task[] = [
    { name: 'Design homepage', status: true },
    { name: 'Fix login bug', status: false },
    { name: 'Write tests', status: false },
  ];

  return (
    <>
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
