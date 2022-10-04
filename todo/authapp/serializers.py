from rest_framework import serializers
from authapp.models import UserToDo


class UserToDoModelSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=255)
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    email = serializers.EmailField()

    # class Meta:
    #     model = UserToDo
    #     fields = ['username', 'first_name', 'last_name', 'email']
