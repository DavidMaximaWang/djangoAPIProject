from django.urls import path, include

from .views import ProfileRetrieveAPIView,ProfileViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register(r'users', ProfileViewSet, 'profiles_all')

app_name = 'profiles'
urlpatterns = [
    path('', include(router.urls)),
    path('users/<str:username>', ProfileRetrieveAPIView.as_view()),
]

# urlpatterns += router.urls
