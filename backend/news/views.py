from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from .models import News
from .serializers import NewsSerializer
from rest_framework.decorators import api_view


@api_view(['GET'])
def home(request):
    if request.method == 'GET':
        return JsonResponse({'message': 'ok'}, status=status.HTTP_200_OK)


def news_list(request):
    if request.method == 'GET':
        news = News.objects.all()
        
        title = request.GET.get('title', None)
        if title is not None:
            news = news.filter(title__icontains=title)
        
        news_serializer = NewsSerializer(news, many=True)
        return JsonResponse(news_serializer.data, safe=False)
        # 'safe=False' for objects serialization
 
    elif request.method == 'POST':
        news_data = JSONParser().parse(request)
        news_serializer = NewsSerializer(data=news_data)
        if news_serializer.is_valid():
            news_serializer.save()
            return JsonResponse(news_serializer.data, status=status.HTTP_201_CREATED) 
        return JsonResponse(news_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = News.objects.all().delete()
        return JsonResponse({'message': '{} News were deleted successfully!'}, status=status.HTTP_202_OK)
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def news_detail(request, pk):
    try: 
        news = News.objects.get(pk=pk) 
    except News.DoesNotExist: 
        return JsonResponse({'message': 'The news does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    if request.method == 'GET': 
        news_serializer = NewsSerializer(news) 
        return JsonResponse(news_serializer.data) 
 
    elif request.method == 'PUT': 
        tutorial_data = JSONParser().parse(request) 
        news_serializer = NewsSerializer(news, data=tutorial_data) 
        if news_serializer.is_valid(): 
            news_serializer.save() 
            return JsonResponse(news_serializer.data) 
        return JsonResponse(news_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
 
    elif request.method == 'DELETE': 
        news.delete() 
        return JsonResponse({'message': 'News was deleted successfully!'}, status=status.HTTP_202_ACCEPTED)
    
        
@api_view(['GET'])
def news_list_published(request):
    news = News.objects.filter(published=True)
        
    if request.method == 'GET': 
        news_serializer = NewsSerializer(news, many=True)
        return JsonResponse(news_serializer.data, safe=False)
    
