from pyexpat import model
from statistics import mode
from django.db import models

# Create your models here.

class Blog(models.Model):
    title = models.CharField(max_length=200)    
    body = models.TextField()
    date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title