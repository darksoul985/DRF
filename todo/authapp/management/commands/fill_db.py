from django.core.management import BaseCommand
from django.conf import settings
from authapp.models import UserToDo
import json


class Command(BaseCommand):
    @staticmethod
    def _load_data_from_file(file_name):
        with open(f'{settings.BASE_DIR}/authapp/json/{file_name}.json') as file:
            return json.load(file)

    def handle(self, *args, **options):
        UserToDo.objects.all().delete()

        users_list = self._load_data_from_file('users')

        for user in users_list:
            UserToDo.objects.create(**user)

        user_root = UserToDo.objects.create_superuser(
            username='admin',
            first_name='Админ',
            last_name='Админ',
            email='admin@gb.local',
            birthday='1985-01-01'
        )

        user_root.set_password('admin')
        user_root.save()
