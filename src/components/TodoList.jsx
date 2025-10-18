import { useState } from "react";

export function TodoList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Tarefa 1",
            completed: false,
        },
        {
            id: 2,
            title: "Tarefa 2",
            completed: true,
        },
        {
            id: 3,
            title: "Tarefa 3",
            completed: false,
        },
    ]);

    return (
        <>
            <h1>Minhas tarefas</h1>
            <ul>
                <li>Tarefa 1</li>
                <li>Tarefa 2</li>
                <li>Tarefa 3</li>
                <li>Tarefa 4</li>
            </ul>
        </>
    );
}