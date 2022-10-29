from django.db import models

from authapp.models import UserToDo


class Project(models.Model):
    name = models.CharField(verbose_name='название проекта', max_length=252, )
    link = models.URLField(verbose_name='ссылка на репозиторий')
    users = models.ManyToManyField(UserToDo, verbose_name='участники')
    is_active = models.BooleanField(default=True, verbose_name='проект в работе')
    deadline = models.DateField(verbose_name='срок окончания проекта')
    start_date = models.DateField(auto_now_add=True, verbose_name='дата начала проекта')

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = 'проект'
        verbose_name_plural = 'проекты'
        ordering = ('-is_active', 'deadline',)


class Todo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, verbose_name='проект')
    users = models.ForeignKey(UserToDo, verbose_name='участник', on_delete=models.CASCADE, blank=True)
    theme = models.CharField(max_length=128, verbose_name='задача')
    description = models.CharField(max_length=340, verbose_name='содержание')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='дата создание')
    update = models.DateTimeField(auto_now=True, verbose_name='дата обновления')
    deadline = models.DateField(verbose_name='срок задачи')
    is_active = models.BooleanField(default=True,verbose_name='активно')

    def __str__(self):
        return f'{self.theme} {self.deadline} ({self.project.name})'

    class Meta:
        verbose_name = 'задача по проекту'
        verbose_name_plural = 'задачи по проекту'
        ordering = ('-is_active', 'deadline',)
