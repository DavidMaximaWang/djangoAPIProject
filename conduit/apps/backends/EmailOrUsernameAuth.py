from django.contrib.auth import  get_user_model
from django.contrib.auth.hashers import check_password
from django.contrib.auth.backends import ModelBackend

# /home/david/youtube_django/conduit-django/conduit/apps/backends/emailOrUsernameAuth.py
class EmailOrUsernameAuthBackend(ModelBackend):
    """
	Email Authentication Backend

	Allows a user to sign in using an email/password pair rather than
	a username/password pair.
	"""

    def authenticate(self, request, username=None, password=None, **kwars):
        print("my back end authenticatindg")
        User = get_user_model()
        try:
            user = User.objects.get(email=username)
            if user.check_password(password):
                return user
        except User.DoesNotExist:
            pass
        try:
            user = User.objects.get(username= username)
            if(user.check_password):
                return user
        except User.DoesNotExist:
            return None



    def get_user(self, request):
        User = get_user_model()
        try:
            return User.objects.get(pk=user_id)
        except:
            return None
        