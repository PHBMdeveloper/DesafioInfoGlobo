#!/bin/bash
echo "Rodando as makemigrations"
python manage.py makemigrations

echo "Rodando as migrações"
python manage.py migrate

echo "Rodando o servidor"
python manage.py runserver 0.0.0.0:8080
# gunicorn core.wsgi -b 0.0.0.0:8080 --reload --graceful-timeout=900 --timeout=900 --log-level DEBUG
