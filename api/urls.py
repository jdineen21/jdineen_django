from xml.etree.ElementInclude import include
from django.urls import path

from rest_framework import routers

from . import views

app_name = 'api'
urlpatterns = [
    path('contact/', views.ContactList.as_view()),
]