from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    # Sobreescribir campo
    email = models.EmailField(unique=True)
    # Nuevo campo
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    class Meta:
        db_table = "users"


    # Metodos unicos
    # Campos requeridos para crear superusers
    REQUIRED_FIELDS = ["email", "password"]

    # Metodos de instancia heredada
    def create_user(self, **kwargs):
        record = self.model(**kwargs)
        record.set_password(kwargs["password"])
        record.save()
        return record