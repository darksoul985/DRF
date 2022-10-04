"""todo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from authapp.views import UsersListAPIView, UserDetailAPIView
from todoapp.views import ProjectListMixin, ProjectDetailMixenViews, TodoListView, TodoDetailView
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# router.register('auth', UsersListAPIView)
# router.register('auth/<int:pk>', UserDetailAPIView)
# router.register('projects', ProjectListMixin, basename='projects')
# router.register('projects/<int:pk>', ProjectDetailMixenViews, basename='project_details')
# router.register('todo', TodoListView, basename='todo_list')
# router.register('todo/<int:pk>', TodoDetailView, basename='todo_details')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('api/auth/', UsersListAPIView.as_view()),
    path('api/auth/<int:pk>', UserDetailAPIView.as_view()),
    path('api/projects/', ProjectListMixin.as_view(), name='projects'),
    path('api/projects/<int:pk>/', ProjectDetailMixenViews.as_view(), name='project_details'),
    path('api/todo/', TodoListView.as_view(), name='todo_list'),
    path('api/todo/<int:pk>/', TodoDetailView.as_view(), name='todo_detail'),
]
