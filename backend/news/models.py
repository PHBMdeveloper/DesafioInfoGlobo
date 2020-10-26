# from django.db import models
from djongo import models


class News(models.Model):
    title = models.CharField(max_length=200, blank=False, default='')
    content = models.CharField(max_length=200, blank=False, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published = models.BooleanField(default=False)
