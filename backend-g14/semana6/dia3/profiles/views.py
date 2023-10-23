from rest_framework import viewsets
from .models import Profile
from .serializers import ProfileSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    # Foreign key
    queryset = Profile.objects.select_related("author").all()
    # ManyToMAny - prefetch_related
    serializer_class = ProfileSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        return queryset
