from django.urls import path
from .views import product, user
from .views import review, order

urlpatterns = [
    path('product/', product, name='product'),
    path('user/', user, name='user'),
    path('review/', review, name='review'),
    path('review/<int:product_id>/', review, name='review-delete'),
    path('order/', order, name='order'),
]