from django.urls import path, re_path

from .views import (RegistrationAPIView, LoginAPIView, UserRetrieveUpdateAPIView)

app_name = 'authentication'
urlpatterns = [
    path('user', UserRetrieveUpdateAPIView.as_view()),
    re_path(r'^auth/register/?$', RegistrationAPIView.as_view()),
    re_path(r'^auth/login/?$', LoginAPIView.as_view()),
]