# from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from authapp.models import UserToDo
from authapp.serializers import UserToDoModelSerializer


class UserToDoViewSet(ModelViewSet):
    queryset = UserToDo.objects.all()
    serializer_class = UserToDoModelSerializer
