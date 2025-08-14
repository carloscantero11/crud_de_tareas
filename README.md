# 📌 Crud de Tareas

## 📑 Tabla de Contenido  
- [Descripción](#-descripción)  
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)  
- [Instalación y Configuración](#ℹ️-instalación-y-configuración)  
- [Backend (Django)](#%EF%B8%8F-backend-django)  
- [Frontend (React)](#%EF%B8%8F-frontend-react)  
- [Imágenes](#%EF%B8%8F-imagenes)  
- [Uso](#-uso)  
- [Licencia](#-licencia)  
- [Autor](#%EF%B8%8F-autor)  

## 📜 Descripción
Este proyecto, llamado **crud_de_tareas**, es una aplicación web que permite crear, actualizar y eliminar tareas.

La aplicación proporciona una interfaz sencilla e intuitiva para gestionar tareas. Los usuarios pueden:

- **Crear** nuevas tareas especificando un título y una descripción.
- **Ver** una lista de todas las tareas existentes.
- **Actualizar** las tareas existentes para modificar su contenido.
- **Eliminar** tareas que ya no sean necesarias.

## 💻 Tecnologías utilizadas

<div>
    
![Django](https://img.shields.io/badge/Django-092E20.svg?style=for-the-badge&logo=Django&logoColor=white) &nbsp;
![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black) &nbsp;
![Tailwindcss](https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white) &nbsp;
![Axios](https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white) &nbsp;
![Vitejs](https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=Vite&logoColor=white) &nbsp;
![Python](https://img.shields.io/badge/Python-ffec00.svg?style=for-the-badge&logo=Python&logoColor=006ed6) &nbsp;

</div>

## ℹ️ Instalación y configuración

Sigue los siguientes pasos para instalar y ejecutar el proyecto en tu máquina local:

### Clona el repositorio

```bash
git clone https://github.com/carloscantero11/crud-django-react.git
cd crud-django-react
```

### ⚒️ Backend (Django)

1. Activa el entorno virtual:

    - En Windows:
        ```bash
        venv\Scripts\activate
        ```
    - En macOS/Linux:
        ```bash
        source venv/bin/activate
        ```

2. Instala las dependencias necesarias:

    ```bash
    pip install -r requirements.txt
    ```

3. Instala CoreApi:
   ```py
   pip install coreapi
   ```

5. Aplica las migraciones de la base de datos:

    ```bash
    python manage.py migrate
    ```

6. Inicia el servidor de desarrollo de Django:

    ```bash
    python manage.py runserver
    ```

### 🖌️ Frontend (React)

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
## 🖼️ Imagenes
<br/>

<div align="center">
<img src="https://github.com/user-attachments/assets/8c95cf9e-0b74-42bb-a812-e2088f2ebfdb" /> &nbsp;
<img src="https://github.com/user-attachments/assets/dcecbcf3-92a2-41e5-b845-5647ca9b5a9c" /> &nbsp;
<img src="https://github.com/user-attachments/assets/b84786c0-807c-43b7-a455-3f9455c88cf4" />
</div>


<br/>

## 👉 Uso

Una vez que ambos servidores estén en funcionamiento, puedes acceder a la aplicación desde tu navegador en `http://localhost:5173`. Desde allí, podrás crear, actualizar y eliminar tareas.

## 📝 Licencia

Este proyecto está licenciado bajo la [Licencia MIT](LICENSE).

## 🖋️ Autor

- [Carlos Cantero](https://github.com/carloscantero11)
