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
