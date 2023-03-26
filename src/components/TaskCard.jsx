import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskCard({ task }) {
	const { deleteTask } = useContext(TaskContext);

	return (
		<div className="bg-gray-800 text-white p-4 rounded-md min-w-full sm:min-w-max ">
			<h1 className="text-xl font-bold capitalize">{task.title}</h1>
			<p className="text-gray-400 text-sm">{task.description}</p>
			<button
				className="bg-red-500 px-2 py-1 my-4 rounded-md hover:bg-red-400"
				onClick={() => deleteTask(task.id)}
			>
				Eliminar tarea
			</button>
		</div>
	);
}

export default TaskCard;
