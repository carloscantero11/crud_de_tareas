from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views

# Versionado de la API
router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')  # Registro de la vista de tareas en el router

urlpatterns = [
    path("api/v1/", include(router.urls)),  # Incluir las rutas del router bajo el prefijo api/v1/
    path('docs/', include_docs_urls(title="Tasks API"))  # Ruta para la documentación de la API
]