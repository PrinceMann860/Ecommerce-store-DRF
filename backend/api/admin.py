from django.contrib import admin
from .models import Product, User, Review, Order

# Register your models here.
admin.site.site_header = "E-commerce Admin"
admin.site.site_title = "E-commerce Admin Portal"
admin.site.index_title = "Welcome to the E-commerce Admin Portal"
admin.site.register(Product)
admin.site.register(User)
admin.site.register(Review)
admin.site.register(Order)