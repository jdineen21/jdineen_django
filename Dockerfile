FROM python:3

WORKDIR /usr/src/app

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000/tcp

CMD [ "gunicorn", "--env", "DJANGO_SETTINGS_MODULE=jdineen_django.settings.production", "--bind", "0.0.0.0:8000", "jdineen_django.wsgi" ]