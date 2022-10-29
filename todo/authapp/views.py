from django.http import Http404
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from authapp.models import UserToDo
from authapp.serializers import UserToDoModelSerializer


class UsersListAPIView(APIView):

    def get(self, request):
        users = UserToDo.objects.all()
        serializer = UserToDoModelSerializer(users, many=True)
        return Response(serializer.data)


class UserDetailAPIView(APIView):

    def get_object(self, pk):
        try:
            return UserToDo.objects.get(pk=pk)
        except UserToDo.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        user = self.get_object(pk=pk)
        serializer = UserToDoModelSerializer(user)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = UserToDoModelSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
