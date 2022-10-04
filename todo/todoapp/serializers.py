from rest_framework import serializers
from todoapp.models import Project, Todo


class TodoModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'


class ProjectModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
