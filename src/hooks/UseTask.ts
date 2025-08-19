import { useEffect, useState } from 'react';
import type { Task } from '../types/types';
import { v4 as uuidv4 } from 'uuid';

export function UseTask() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('tasks');
    if (saved) {
      try {
        return JSON.parse(saved) as Task[];
      } catch (error) {
        console.error('invalid tasks in localStorage', error);
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  const [newTaskName, setNewTaskName] = useState('');

  // Add a task
  const addTask = () => {
    if (newTaskName.trim() === '') return; //prevent adding empty tasks

    // Create a new task object
    const newTask: Task = {
      id: uuidv4(),
      name: newTaskName,
      status: false, //default to incomplete
    };
    // update the state with a new task
    setTasks((prev) => [...prev, newTask]);
    // clear the input
    setNewTaskName('');
  };

  // Toggle task completion by id

  const toggleTaskStatus = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: !task.status } : task
      )
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== taskId));
  };

  return {
    tasks,
    newTaskName,
    setNewTaskName,
    addTask,
    toggleTaskStatus,
    deleteTask,
  };
}
