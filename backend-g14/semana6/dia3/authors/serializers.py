from rest_framework import serializers
from .models import Author
from profiles.serializers import ProfileSerializer


class AuthorDeepSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()


class AuthorSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(many=False, read_only=True)

    class Meta:
        model = Author
        fields = ["id", "name", "profile"]