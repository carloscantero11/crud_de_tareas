import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { TaskPage } from './pages/TasksPage'    
import { TaskFormPage } from './pages/TaskFormPage'  
import { Navigation } from './components/Navigation'
import { Toaster } from 'react-hot-toast'

// Función principal de la aplicación
function App() {
  return (
  
    <BrowserRouter>   {/* Configuración del enrutador de la aplicación */}
      <div className='container mx-auto'>
      <Navigation/>   {/* Componente de navegación */}
      <Routes>        {/* Definición de las rutas */}
        <Route path='/' element={<Navigate to='/tasks'/>}/>    
        <Route path='/tasks' element={<TaskPage/>}/>
        <Route path='/tasks-create' element={<TaskFormPage/>}/>
        <Route path='/tasks/:id' element={<TaskFormPage/>}/>
      </Routes>
      <Toaster/>
      </div>
    </BrowserRouter>

  )}

  // Exportación del componente App como el componente principal
export default App 