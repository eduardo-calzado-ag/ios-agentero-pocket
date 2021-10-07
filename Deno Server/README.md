# REST API with Deno and Oak


## Instalation

You need Deno to run this project. You can install it with curl for \*Unix like operating systems or directly with cargo if you have Rust installed.

```
$ curl -fsSL https://deno.land/x/install/install.sh | sh

```

## Launching the server

You can easily launch the server running the following command in the root directory. Don't forget to pass the "allow" flags since the server require access to network and env variables, stored in the .env file.

```
deno run --unstable --allow-net --allow-read --allow-env src/server.ts"
```

The example uses also [Denon](https://deno.land/x/denon@2.4.5) a Nodemon like dev environment with hotrelead. Once you have Denon installed you can execute it with:

```
denon start
```

## Heroku release

```
heroku login

heroku apps:create --buildpack https://github.com/chibat/heroku-buildpack-deno.git

heroku git:remote --app obscure-forest-48513 //This is the name of the app


git add .
git commit -m “my commit”
git push heroku main


```

