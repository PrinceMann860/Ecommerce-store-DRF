from django.urls import path
from .views import product, user
from .views import review, order
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('product/', product, name='product'),
    path('user/', user, name='user'),
    path('review/', review, name='review'),
    path('review/<int:product_id>/', review, name='review-delete'),
    path('order/', order, name='order'),
]

# This should be outside the urlpatterns list
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)