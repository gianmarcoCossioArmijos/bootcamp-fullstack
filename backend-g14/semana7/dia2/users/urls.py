from django.urls import path
from .views import UserView, UserBetByIdView


urlpatterns = [
    path("", UserView.as_view(), name="list_create"),
    path("<int:id>/", UserBetByIdView.as_view(), name="read_update_delete")
]