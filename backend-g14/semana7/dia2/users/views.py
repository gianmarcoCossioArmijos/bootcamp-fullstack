from rest_framework.viewsets import generics
from .serializers import UserSerializer, UserCreateSerializer, UserUpdateSerializer
from .models import User
from rest_framework.response import Response
from rest_framework import status
from drf_yasg.utils import swagger_auto_schema
from django.shortcuts import get_object_or_404
from django.core.paginator import Paginator
from .schemas import UserSchema


schema = UserSchema()


class UserView(generics.GenericAPIView):
    serializer_class = UserSerializer
    http_method_names = ["get", "post"]

    @swagger_auto_schema(
            operation_summary="Endpoint para listar usuarios",
            operation_description="Servicio que retorna lista de usuarios",
            manual_parameters=schema.all()
    )
    def get(self, request):
        page = request.query_params.get("page")
        per_page = request.query_params.get("per_page")
        filters = {"is_staff": False, "is_active": True}
        records = User.objects.filter(**filters).order_by("id")
        pagination = Paginator(records, per_page=per_page)
        current_page = pagination.get_page(page)
        serializer = self.serializer_class(current_page.object_list, many=True)
        return Response({
            "results": serializer.data,
            "pagination": {
                "totalRecords": pagination.count,
                "totalPages": pagination.num_pages,
                "perPage": pagination.per_page,
                "currentPage": current_page.number
            }
        }, status=status.HTTP_200_OK)

    @swagger_auto_schema(
            operation_summary="Endpoint para crear usuarios",
            operation_description="Servicio para crear usuarios",
            request_body=UserCreateSerializer
    )
    def post(self, request):
        serializer = UserCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    

class UserBetByIdView(generics.GenericAPIView):
    serializer_class = UserSerializer
    http_method_names = ["get", "patch", "delete"]

    @swagger_auto_schema(
            operation_summary="Endpoint para listar usuarios por id",
            operation_description="Servicio que retorna lista de usuarios por id"
    )
    def get(self, _, id):
        # record = User.objects.filter(pk=id, is_active=True, is_staff=False).get()
        record = get_object_or_404(User, pk=id, is_active=True, is_staff=False)
        serializer = self.serializer_class(record)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @swagger_auto_schema(
            operation_summary="Endpoint para actualizar usuarios por id",
            operation_description="Servicio que actualiza usuarios por id",
            request_body=UserUpdateSerializer
    )
    def patch(self, request, id):
        # record = User.objects.filter(pk=id, is_active=True, is_staff=False).get()
        record = get_object_or_404(User, pk=id, is_active=True, is_staff=False)
        serializer = UserUpdateSerializer(record, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)


    @swagger_auto_schema(
            operation_summary="Endpoint para inhabilitar usuarios por id",
            operation_description="Servicio que inhabilita usuarios por id",
            request_body=UserUpdateSerializer
    )
    def delete(self, _, id):
        record = get_object_or_404(User, pk=id, is_active=True, is_staff=False)
        record.is_active = False
        record.save()
        return Response(status=status.HTTP_204_NO_CONTENT)