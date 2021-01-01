FROM python:3.6

ENV PYTHONUNBUFFERED 1

RUN mkdir /code

WORKDIR /code

ADD requirements.txt /code

RUN pip install -r requirements.txt

ADD . /code

RUN apt-get update

RUN chmod +x ./start.sh
ENTRYPOINT ["./start.sh"]

EXPOSE 8080