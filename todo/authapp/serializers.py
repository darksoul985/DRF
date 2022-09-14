from rest_framework.serializers import HyperlinkedModelSerializer
from authapp.models import UserToDo


class UserToDoModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = UserToDo
        fields = ['username', 'first_name', 'last_name', 'email']
