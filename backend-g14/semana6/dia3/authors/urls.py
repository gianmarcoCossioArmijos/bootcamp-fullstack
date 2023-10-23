# from .views import fetch_all
# from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import AuthorViewSet


router = DefaultRouter()
router.register("", AuthorViewSet, basename="authors")
urlpatterns = router.urls

# path("", fetch_all, name="authors_list")