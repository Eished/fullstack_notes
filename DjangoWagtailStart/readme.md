# Readme

```bash
python3 -m venv .venv
source .venv/bin/activate
```

## in a Python 3 virtual environment

```bash
pip3 install wagtail
wagtail start mysite
cd mysite
pip3 install -r requirements.txt
python3 manage.py migrate
python3 manage.py createsuperuser
python3 manage.py runserver
```

You can now access the administrative area at http://127.0.0.1:8000/admin

admin
admin12345