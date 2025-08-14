import { useState } from 'react';
import type { Task } from '../types/types';

export default function UseTask() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState('');

  // Add a task
  const addTask = () => {
    if (newTaskName.trim() === '') return; //prevent adding empty tasks

    // Create a new task object
    const newTask: Task = {
      name: newTaskName,
      status: false, //default to incomplete
    };
    // update the state with a new task
    setTasks((prev) => [...prev, newTask]);
    // clear the input
    setNewTaskName('');
  };
  return {
    tasks,
    newTaskName,
    setNewTaskName,
    addTask,
  };
}
