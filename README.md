# Conduit

## Frontends

run ng serve under frontend project

## Backends

1. Install [Python 3.7.4](https://www.python.org/downloads/release/python-374/).

2. Set the local virtualenv to "ENV": `source ENV/bin/activate`.

If all went well then your command line prompt should now start with `(ENV)`.

3. Install the required packages: `pip install -r requirements.txt`
4. project should build and run with: `python manage.py runserver`

If your command line prompt does not start with `(Env)` at this point, try running `source ENV/bin/activate` or `cd ../conduit-django`. 

This is a small sample project to build the customized user authentication, started from [tutorial](https://thinkster.io/tutorials/django-json-api/authentication). User can login by either username or password.
