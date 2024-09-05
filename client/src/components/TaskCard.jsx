import { useNavigate } from "react-router-dom"
import PropTypes from "prop-types";


// Definición de las PropTypes para el componente TaskCard
TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    // Se puede agregar más validaciones según la estructura del objeto 'task'
  }).isRequired,
};

// Este componente muestra una tarjeta con el título y la descripción de una tarea
export function TaskCard({ task }) {

  const navigate = useNavigate() // Hook de navegación de react-router-dom

  return (
    <div  className="bg-gray-900 p-5 hover:bg-my-dark-blue hover:cursor-pointer rounded-2xl m-4"
    
    onClick = { () => {   // Manejador de eventos onClick que navega a la página de detalles de la tarea
      navigate(`/tasks/${task.id}`)
    }}
    >
        <h1 className="font-bold text-cyan-300 uppercase text-xl">{task.title}</h1>
        <hr className="my-1"/>
        <p className="text-white mt-3">{task.description}</p>
    </div>
  );
}