from django.conf.urls import url 
from . import views 
from django.views.decorators.csrf import csrf_exempt
 
urlpatterns = [ 
    url(r'^$', csrf_exempt(views.home)), 
    url(r'^api/news$', csrf_exempt(views.news_list)),
    url(r'^api/news/(?P<pk>[0-9]+)$', csrf_exempt(views.news_detail)),
    url(r'^api/news/published$', csrf_exempt(views.news_list_published))
]
