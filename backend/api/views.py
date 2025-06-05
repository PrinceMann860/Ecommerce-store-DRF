from django.shortcuts import render
from django.http import JsonResponse
from .models import Product , User, Review, Order
from .serializer import ProductSerializer , UserSerializer, ReviewSerializer, OrderSerializer
from rest_framework.decorators import api_view
from rest_framework import status
# Create your views here.

@api_view(['GET', 'POST'])
def product(request):
    if request.method == 'GET':
        try:
            products = Product.objects.all()
            serializer = ProductSerializer(products, many=True)
            return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)
        
        except ValueError as e:
            return JsonResponse({
                'status': 'error',
                'message': 'Invalid input data',
                'error': str(e)         
                }, status=status.HTTP_400_BAD_REQUEST)
        
    
    elif request.method == 'POST':
        try:
            serializer = ProductSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return JsonResponse({
                    'status': 'error',
                    'message': 'Invalid input data',
                    'errors': serializer.errors
                }, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as e:
            return JsonResponse({
                'status': 'error',
                'message': 'An error occurred while processing the request',
                'error': str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
@api_view(['GET', 'POST'])
def user(request):
    if request.method == 'GET':
        try:
            users = User.objects.all()
            serializer = UserSerializer(users, many=True)
            return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)
        
        except ValueError as e:
            return JsonResponse({
                'status': 'error',
                'message': 'Invalid input data',
                'error': str(e)         
                }, status=status.HTTP_400_BAD_REQUEST)
        
    
    elif request.method == 'POST':
        try:
            data = request.POST
            serializer = UserSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return JsonResponse({
                    'status': 'error',
                    'message': 'Invalid input data',
                    'errors': serializer.errors
                }, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as e:
            return JsonResponse({
                'status': 'error',
                'message': 'An error occurred while processing the request',
                'error': str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'POST' ,'DELETE'])
def review(request):
    if request.method == 'GET':
        try:
            reviews = Review.objects.all()
            serializer = ReviewSerializer(reviews, many=True)
            return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)
        
        except ValueError as e:
            return JsonResponse({
                'status': 'error',
                'message': 'Invalid input data',
                'error': str(e)         
                }, status=status.HTTP_400_BAD_REQUEST)
        
    
    elif request.method == 'POST':
        try:
            data = request.POST
            serializer = ReviewSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return JsonResponse({
                    'status': 'error',
                    'message': 'Invalid input data',
                    'errors': serializer.errors
                }, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as e:
            return JsonResponse({
                'status': 'error',
                'message': 'An error occurred while processing the request',
                'error': str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    elif request.method == 'DELETE':
        try:
            review_id = request.data.get('id')
            if not review_id:
                return JsonResponse({
                    'status': 'error',
                    'message': 'Review ID is required for deletion'
                }, status=status.HTTP_400_BAD_REQUEST)
            
            review = Review.objects.get(id=review_id)
            review.delete()
            return JsonResponse({'status': 'success', 'message': 'Review deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        
        except Review.DoesNotExist:
            return JsonResponse({
                'status': 'error',
                'message': 'Review not found'
            }, status=status.HTTP_404_NOT_FOUND)
        
        except Exception as e:
            return JsonResponse({
                'status': 'error',
                'message': 'An error occurred while processing the request',
                'error': str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'POST'])
def order(request):
    if request.method == 'GET':
        try:
            orders = Order.objects.all()
            serializer = OrderSerializer(orders, many=True)
            return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK)
        
        except ValueError as e:
            return JsonResponse({
                'status': 'error',
                'message': 'Invalid input data',
                'error': str(e)         
                }, status=status.HTTP_400_BAD_REQUEST)
        
    
    elif request.method == 'POST':
        try:
            data = request.POST
            serializer = OrderSerializer(data=data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return JsonResponse({
                    'status': 'error',
                    'message': 'Invalid input data',
                    'errors': serializer.errors
                }, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as e:
            return JsonResponse({
                'status': 'error',
                'message': 'An error occurred while processing the request',
                'error': str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
 
