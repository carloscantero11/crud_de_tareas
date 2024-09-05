from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Vista para el modelo Task
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer  # Especifica el serializador a utilizar
    queryset = Task.objects.all()  # Define el conjunto de consultas para la vista, 
                                   # obtiene todas las tareas