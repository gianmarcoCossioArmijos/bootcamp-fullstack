from django.db import models
from authors.models import Author


# Create your models here.
class Profile(models.Model):

    bio = models.TextField()
    author = models.OneToOneField(Author, on_delete=models.CASCADE)

    class Meta:
        db_table = "profiles"