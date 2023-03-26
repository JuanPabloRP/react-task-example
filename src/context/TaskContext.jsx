import React, { createContext, useState, useEffect } from 'react';
import { tasks as data } from '../data/tasks';

export const TaskContext = createContext();

export function TaskContextProvider(props) {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		console.log(data);
		setTasks(data);
	}, []);

	const createTask = (task) => {
		setTasks([
			...tasks,
			{
				title: task.title,
				id: tasks.length,
				description: task.description,
			},
		]);
	};

	const deleteTask = (taskId) => {
		setTasks(tasks.filter((task) => task.id !== taskId));
		console.log(tasks);
	};

	return (
		<TaskContext.Provider
			value={{
				tasks,
				deleteTask,
				createTask,
			}}
		>
			{props.children}
		</TaskContext.Provider>
	);
}
