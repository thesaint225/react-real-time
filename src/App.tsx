import { useState } from 'react';
import './App.css';

import TaskList from './components/TaskList';
import { UseTask } from './hooks/UseTask';

function App() {
  const {
    tasks,
    newTaskName,
    setNewTaskName,
    addTask,
    toggleTaskStatus,
    deleteTask,
  } = UseTask();
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

  // Apply filter to tasks
  const filterTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.status === true;
    if (filter === 'pending') return task.status === false;
    return true;
  });

  return (
    <>
      <input
        type='text'
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        placeholder='Enter task name'
      />

      <button onClick={addTask}>+</button>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>pending</button>
      </div>

      <TaskList
        tasks={filterTasks}
        onToggle={toggleTaskStatus}
        onDelete={deleteTask}
      />
    </>
  );
}

export default App;
