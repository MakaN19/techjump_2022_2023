# Node redis app

This app was created for techjump purposes.

## Local development

There is an app that requires Redis to be provided in order to work properly.

In order to launch application you need to run (one time):
```
node -v # make sure you use version 18
npm install
```

and then:
```
docker run -p 6379:6379 redis
npm start
```

Run `curl http://localhost:3000` (or visit http://localhost:3000 in your browser). You should see something similar to `Hello World! The value fetched from Redis is 1`


## Your task

It is a bit cumbersome to remember about running redis every time when someone needs to do something in this application. 
In order to make the life simpler, we'd like to have docker-compose config.

Your docker-compose should contain two services - `web` and `redis`.

`web` should depend on `redis` (tip: use `depends_on` construct).

`web` should expose port 3000 (tip: use `ports` construct)

`web` should be built by the definition of Dockerfile (tip: use `build: .` construct), while redis should use available image 

The application will try to connect to `redis://localhost:6379` by default. But you can inject environment variable `REDIS_URL` to `web` container to modify this behavior.
(tip: use `environment` construct to provide environment variables)


### Testing

Run `docker-compose up` to spin up both containers. If you need to rebuild (because of changes in config), you can run `docker-compose up --build`


### Bonus task

Run `docker-compose up` and then open index.js file. 

Find `Hello world` string and change it to `Good bye world`. 

Refresh the page in browser/run curl - this change is not reflected. 

You have to stop docker-compose and run it again, with `--build` flag. 

How can we make sure it is not needed? So we have sort of live-reload in the app? 
Tip: volume mounting
