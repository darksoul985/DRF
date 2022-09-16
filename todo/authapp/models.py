from django.db import models
from django.contrib.auth.models import AbstractUser


class UserToDo(AbstractUser):
    avatar = models.ImageField(
        verbose_name='аватарка',
        upload_to='user',
        blank=True
    )

    birthday = models.DateField(verbose_name='возраст', blank=True)

    is_active = models.BooleanField(
        verbose_name='активный пользователь',
        default=True
    )

    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True,
    )
