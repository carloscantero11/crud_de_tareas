from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        #fields = ('id', 'tittle', 'description', 'done')
        fields = '__all__'  # indica que se incluirán todos los campos del modelo 
                            # "Task" en la serialización y deserialización