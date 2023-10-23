# from django.http import JsonResponse
# from .models import Author
from rest_framework import viewsets
from .serializers import AuthorSerializer
from .models import Author


class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


# def fetch_all(request):
#     authors = Author.objects.values()
#     return JsonResponse({
#         "authors": list(authors)
#     })