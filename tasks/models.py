from django.db import models

# Definición del modelo Task
class Task(models.Model):
    title = models.CharField(max_length=200)  # Campo de texto para el título de la tarea
    description = models.TextField(blank=True)  # Campo de texto para la descripción de la tarea, puede estar vacío
    done = models.BooleanField(default=False)  # Campo booleano para indicar si la tarea está completada o no
    
    def __str__(self):
        return self.title  # Representación en cadena del modelo, devolverá el título de la tarea