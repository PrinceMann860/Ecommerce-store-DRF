from .models import Product, User, Review, Order
from rest_framework import serializers as drf_serializers

class ProductSerializer(drf_serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'  # Serialize all fields of the Product model

class UserSerializer(drf_serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'  # Serialize all fields of the User model

class ReviewSerializer(drf_serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'  # Serialize all fields of the Review model

class OrderSerializer(drf_serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'  # Serialize all fields of the Order model
