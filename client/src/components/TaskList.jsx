import { useEffect, useState } from "react"
import { getAllTask } from "../api/Task.api"
import { TaskCard } from "./TaskCard";

// Componente para mostrar la lista de tareas
export function TaskList() {

    const [tasks, setTask] = useState([]);

    // Hook de efecto para cargar las tareas al montar el componente
    useEffect(() =>{
        
        // Función para cargar las tareas desde del API
        async function loadTasks (){
            const res = await getAllTask();
            setTask(res.data)
        }

        loadTasks()

    }, []); // El array vacío asegura que el efecto solo se ejecute
                 // una vez al montar al componente.

    // Aqui se trae el componente TaskCard para que se muestre el título y descripción            
    return <div className="grid grid-cols-3 gap-3">
        {tasks.map(task => (
            <TaskCard key = {task.id} task = {task}/>
        ))}
    </div>;
}