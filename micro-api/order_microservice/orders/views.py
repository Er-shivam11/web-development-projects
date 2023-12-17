from django.shortcuts import render

# Create your views here.
# orders/views.py
from rest_framework import viewsets
from .models import Order
from .serializers import OrderSerializer
from rest_framework.response import Response
import requests

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def list(self, request, *args, **kwargs):
        # Make a request to the Product microservice to get the list of products
        product_url = 'http://127.0.0.1:8000/api/products/'
        response = requests.get(product_url)
        products = response.json()
        print(products)
        return Response(products)