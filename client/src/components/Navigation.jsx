import {Link} from 'react-router-dom'

// Componente de Navegación principal
export function Navigation() {
  return (
    <div className='flex justify-between py-3'>

      {/* Enlace para ir a la pagina de tareas */}
      <Link to="/tasks">
        <h1 className='font-bold text-3xl mb-5'>Task App</h1>
      </Link>

      <button className='bg-blue-500 px-5 py-3 rounded-2xl'>
        {/* Enlace para crear una nueva tarea */}
        <Link to="/tasks-create">Create Task</Link>
      </button>
    </div>
  )
}