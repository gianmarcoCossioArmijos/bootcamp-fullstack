from django.db import models
from authors.models import Author
from genres.models import Genre


# Create your models here.
class Book(models.Model):
    
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    genres = models.ManyToManyField(Genre)

    class Meta:
        db_table = "books"