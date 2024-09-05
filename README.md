# crud-django-react

Este proyecto, llamado **crud-django-react**, es una aplicación web que permite crear, actualizar y eliminar tareas.

## Descripción

La aplicación proporciona una interfaz sencilla e intuitiva para gestionar tareas. Los usuarios pueden:

- Crear nuevas tareas con un título y una descripción.
- Ver la lista de tareas existentes.
- Actualizar las tareas existentes.
- Eliminar las tareas que ya no sean necesarias.

## Tecnologías utilizadas

- **Django**: Framework de desarrollo web para construir el backend, gestionar la base de datos y manejar la lógica del servidor.
- **React**: Biblioteca de JavaScript utilizada para construir la interfaz de usuario (frontend) de la aplicación.
- **TailwindCSS**: Framework de CSS utilizado para diseñar la interfaz de usuario de manera rápida y eficiente.
- **Axios**: Librería de JavaScript utilizada para realizar solicitudes HTTP desde el frontend al backend.
- **ViteJS**: Herramienta de desarrollo que proporciona un entorno rápido y moderno para construir aplicaciones frontend.
- **venv**: Entorno virtual de Python utilizado para gestionar las dependencias del proyecto de forma aislada.

## Instalación y configuración

Sigue los siguientes pasos para instalar y ejecutar el proyecto en tu máquina local:

### Clona el repositorio

```bash
git clone https://github.com/carloscantero11/crud-django-react.git
cd crud-django-react
```

### Backend (Django)

1. Crea un entorno virtual:

    ```bash
    python -m venv venv
    ```

2. Activa el entorno virtual:

    - En Windows:
        ```bash
        venv\Scripts\activate
        ```
    - En macOS/Linux:
        ```bash
        source venv/bin/activate
        ```

3. Instala las dependencias necesarias:

    ```bash
    pip install -r requirements.txt
    ```

4. Aplica las migraciones de la base de datos:

    ```bash
    python manage.py migrate
    ```

5. Inicia el servidor de desarrollo de Django:

    ```bash
    python manage.py runserver
    ```

### Frontend (React)

1. Dirígete a la carpeta client:

    ```bash
    cd client
    ```

2. Instala las dependencias de npm:

    ```bash
    npm install
    ```

3. Inicia el servidor de desarrollo de Vite:

    ```bash
    npm run dev
    ```

## Uso

Una vez que ambos servidores estén en funcionamiento, puedes acceder a la aplicación desde tu navegador en `http://localhost:5173`. Desde allí, podrás crear, actualizar y eliminar tareas.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

## Autor

- [Carlos Cantero](https://github.com/carloscantero11)
