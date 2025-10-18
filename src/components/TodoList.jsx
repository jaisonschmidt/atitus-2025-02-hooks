import { useState, useEffect } from "react";

export function TodoList() {
    const [tasks, setTasks] = useState([]);

    useEffect( () => {
        // código disparado quando o componente carrega
        const fetchTasks = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await response.json();

            setTasks(data);
        };
        
        fetchTasks();
    }, []); // onLoad do componente

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Minhas Tarefas</h1>
            <ul className="space-y-3">
                {tasks.map( (task) => 
                    <li 
                        key={task.id} 
                        className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors duration-200 shadow-sm"
                    >
                        <div className="flex items-center space-x-3">
                            <div className={`w-4 h-4 rounded-full border-2 ${task.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                                {task.completed && (
                                    <svg className="w-3 h-3 text-white ml-0.5 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                            <span className={`text-lg ${task.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                                {task.title}
                            </span>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}