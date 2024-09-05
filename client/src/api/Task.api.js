import axios from 'axios';

const tasksApi = axios.create({
    baseURL: 'http://localhost:8000/tasks/api/v1/tasks/'
});

// Función para obtener todas las tareas desde la API:

// Esta función realiza una solicitud GET al endpoint de tareas
export const getAllTask = () => tasksApi.get('/')


// Esta función realiza una solicitud GET al endpoint de una tarea específica 
export const getTask = (id) => tasksApi.get(`/${id}/`)

// Esta función envía una solicitud POST para crear una nueva tarea.
export const createTask = (task) => tasksApi.post('/', task)

// Esta función envía una solicitud DELETE para eliminar una tarea específica.
export const deleteTask = (id) => tasksApi.delete(`/${id}/`)


// Esta función envía una solicitud PUT para actualizar una tarea específica.
export const updateTasks = (id, task) => tasksApi.put(`/${id}/`,task)