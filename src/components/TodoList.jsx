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
        <>
            <h1>Minhas tarefas</h1>
            <ul>
                {tasks.map( (task) => <li key={task.id}>{task.title}</li> )}
            </ul>
        </>
    );
}