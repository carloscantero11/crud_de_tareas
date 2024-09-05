import {useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { createTask, deleteTask, updateTasks, getTask } from '../api/Task.api'; 
import { useNavigate, useParams} from 'react-router-dom';
import { toast  } from 'react-hot-toast'



// Componente para la página del formulario de tareas
export function TaskFormPage() {

  // Utiliza el hook useForm para manejar el estado y validaciones del formulario
  const {
    register,   // Función para registrar campos del formulario
    handleSubmit,   // Función para manejar el envío del formulario
    formState: { errors },   // Objeto que contiene los errores de validación del formulario
    setValue
  } = useForm();

  const navigate = useNavigate()
  const params = useParams();


  // Función que se ejecuta al enviar el formulario
  const onSubmit = handleSubmit(async data => {
    // Actualizar Tarea
    if(params.id) {
      updateTasks(params.id, data)
      toast.success('Tarea Actualizada :)', {
        position: "top-center",
        style: {
          background: "#080e21",
          color: "white"
        }
      });
    } else{  // Crear Tarea
      await createTask(data);
      toast.success('Tarea Creada :)', {
        position: "top-center",
        style: {
          background: "#080e21",
          color: "white"
        }
      })
    }
    navigate('/tasks');
  });


  // Cargar tareas
  useEffect(() => {
    async function loadTask() {
      if(params.id){
        const {
          data: {title, description}, 
        } = await getTask(params.id);
        setValue("title", title);
        setValue("description", description);
      }
    }
    loadTask()
  }, []);


  return (
    <div className='max-w-xl mx-auto'>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Title"
          {...register("title", { required: true })} // Registra el campo "title" y establece la validación requerida
          className='bg-slate-100 p-3 rounded-xl block w-full mb-5 text-slate-900'
        />
        {errors.title && <span>This field is required</span>} {/* Muestra un mensaje de error si el campo "title" no es válido */}
        
        <textarea 
          rows="3" 
          placeholder="Description"
          {...register("description", { required: true })} // Registra el campo "description" y establece la validación requerida
          className='bg-slate-100 p-3 rounded-xl block w-full mb-5 text-slate-900'
        ></textarea>
        {errors.description && <span>This field is required</span>} {/* Muestra un mensaje de error si el campo "description" no es válido */}

        <button className=' bg-blue-500 p-3 rounded-xl block w-full mb-5'>Save</button> {/* Botón para enviar el formulario */}
      </form>


      {params.id && ( // Se proporciona un id de tarea en los parámetros de la URL, mostramos el botón de eliminación
        <button
          className=' bg-red-600 p-3 rounded-xl block w-full mb-5'
          onClick = {async () => {
            const accepted = window.confirm('Are you sure?'); // Mostramos una confirmación de eliminación al hacer clic en el botón
            if (accepted){ // Si se acepta la confirmación, eliminamos la tarea y navegamos a la página de tareas
              await deleteTask(params.id);
              toast.success('Tarea Eliminada :)', {
                position: "top-center",
                style: {
                  background: "#080e21",
                  color: "white"
                }
              });
              navigate("/tasks");
            }
          }}
        >Delete</button>
      )} 
    </div>

  );
}