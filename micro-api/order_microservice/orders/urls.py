# order_microservice/orders/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OrderViewSet

router = DefaultRouter()
router.register(r'orders', OrderViewSet, basename='order')

urlpatterns = [
    path('', include(router.urls)),
    # Add your custom endpoint URL
    path('get_products/', OrderViewSet.as_view({'get': 'list'}), name='get_products'),
]
