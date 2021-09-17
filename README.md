# todo-app
Simple todo list application to demonstrate docker

### Getting started for local development

Make sure you have the following or newer versions:

- node: 12.22
- npm: 7.7

Install dependencies:

```console
$ yarn install --production
```

Start Application:

```console
$ node src/index.js
```

### Commands Reference

Build docker image:

```console
$ docker build . -t todo-app
```

Get all images from local repository:

```console
$ docker images
```

Run docker container:

```console
$ docker run -dp 3000:3000 --name todo-app todo-app
```

Check running containers:

```console
$ docker ps
```

Check running and stopped containers:

```console
$ docker ps -a
```

Stop docker container:

```console
$ docker stop todo-app
```

Start docker container:

```console
$ docker start todo-app
```

Remove docker container:

```console
$ docker rm todo-app
```

Stop and remove docker container:

```console
$ docker rm -f todo-app
```

Get a bash shell into a running container:

```console
$ docker exec -it todo-app /bin/sh
```

Get logs of a running container:

```console
$ docker logs todo-app
```

Login to dockerhub:

```console
$ docker login
```

Tag your image with your newly created repo:

```console
$ docker tag todo-app <my-dockerhub-username>/todo-app:latest
```

Push image to dockerhub:

```console
$ docker push andrikoz/todo-app:latest
```

Create a docker volume:

```console
$ docker volume create todo-db
```

Delete a docker volume:

```console
$ docker volume rm todo-db
```

Check docker volumes:

```console
$ docker volume ls
```

Use docker volume with todo-app container:

```console
$ docker run -dp 3000:3000 -v todo-db:/tmp/todos --name todo-app todo-app
```

Start applications with docker-compose:

```console
$ docker-compose up -d
```

Optimized Dockerfile:

```yaml
FROM node:12-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .
CMD ["node", "src/index.js"]
```

## Links

[Docker Playground](https://labs.play-with-docker.com)
[12factor app](https://12factor.net)
