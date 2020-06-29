# Clear My Record Clinic App

The Clear My Record backend is focused on providing a backend management solution to those who are helping people seek expungement under the laws of the state of Missouri. Effective January 1, 2018, the State of Missouri greatly expanded the convictions qualifying for expungement.

**Note: Any arguments you should pass your own values into will be wrapped in <>**

## Deployment

### Google Cloud Run

#### Dependencies
- gcloud
- docker

Currently this app is designed to be deployed via Google Cloud Run as a docker container.

You can deploy the app by doing the following:

Create a Google Cloud Project, or use an existing one. I recommend doing this via the UI at console.cloud.google.com
as you will need to associate your project to a billing accout and also turn on the Cloud Run api

Create a CloudSql MySql instance following the steps under **Create an Instance** here:
https://cloud.google.com/sql/docs/mysql/quickstart

Create an application key for the CMR app:
`php artisan key:generate --show`

Copy the .env.example file to a local .env file and add your newly generated key to it on the `APP VALUE=` line.

Set the values for the base admin user in the .env file.

Set the value of the database values in the .env file:

`DB_CONNECTION=mysql`
`DB_HOST=127.0.0.1`
`DB_PORT=3306`
`DB_DATABASE=<db_name>`
`DB_USERNAME=<db_username>`
`DB_PASSWORD=<db_password>`
`DB_SOCKET=<instance_connection_name>`

Set any other values in .env that you'd like to customize. Just the ones we did above should work to deploy the app

Build the docker image locally from the backend directory:
`docker build -f dockerfiles/app.dockerfile . -t openstl/arch-city-cmr:prod`

Tag the docker image for your GCP project container registry:
`docker tag openstl/arch-city-cmr:prod gcr.io/<project_name>/arch-city-cmr:prod`

Push the docker image to the project container registry:
`docker push gcr.io/<project_name>/arch-city-cmr:prod`

Follow the steps to deploy a new service here:
https://cloud.google.com/run/docs/deploying

Follow the steps to attach your mysql instance to your service here:
https://cloud.google.com/sql/docs/mysql/connect-run

Once deployed, you should be able to reach your service at the url provided by Google


### App Engine

#### Dependencies
- gcloud
- mysql client

You can deploy the app to App Engine Flex environment by doing the following:

Create a Google Cloud Project, or use an existing one. To do this via the gcloud cli:
`gcloud projects create <project_name>`

Create a CloudSql MySql instance following the steps under **Create an Instance** here:
https://cloud.google.com/sql/docs/mysql/quickstart

Create an application key for the CMR app:
`php artisan key:generate --show`

Copy the app.yaml.sample file to app.yaml:
`cp app.yaml.sample app.yaml`

Update the app.yaml file to include:
- The app key you generated above
- Your database information

Use the Google [cloudsql_proxy](https://cloud.google.com/sql/docs/mysql/quickstart-proxy-test) to connect to your instance locally from a terminal:
`cloud_sql_proxy -instances=<YOUR_INSTANCE_CONNECTION_NAME>=tcp:3306`

Open another terminal window and create a database in your MySql instance (You will be prompted for the root user password you set up when you created the instance):
`mysql -h 127.0.0.1 -u root -p -e "CREATE DATABASE <DATABASE_NAME>;"`

Run the migration command to populate all tables needed for the application:
`DB_DATABASE=<DB_NAME> DB_USERNAME=<USERNAME> DB_PASSWORD=YOUR_DB_PASSWORD php artisan migrate --force`

Set up the user account(s) you want to be created initially. The `UserDatabaseSeeder.php` file is set up to create a base admin user and a frontend user for integrating a frontend that creates applicants. Set the `USER_` and `FRONTEND_` values in your .env file (copied from the .env.example file in this repo) and they will be picked up when you seed the database in the next step. If you don't need a frontend user, comment out the code that creates it in the `UserDatabaseSeeder.php` file.

Seed the Permission, User, and Statute databases:
`DB_DATABASE=<DB_NAME> DB_USERNAME=<USERNAME> DB_PASSWORD=YOUR_DB_PASSWORD php artisan db:seed`

Deploy the application by running the following in the directory:
`gcloud app deploy`

### Docker-Compose Deployment (NOTE: THIS PORTION OF DOCS NEEDS UPDATED AS THE app.dockerfile IMAGE IS SET UP TO USE APACHE INSTEAD OF NGINX)

#### Dependencies
You will need the following dependencies:
- docker
- docker-compose

This application can also be deployed via docker with docker-compose. You can find the dockerfiles for the app (app.dockerfile) and web (web.dockerfile) in the dockerfiles directory.

Build the images locally. You can do this with the following commands:
`docker build -f app.dockerfile . -t <image-name>`
`docker build -f web.dockerfile . -t <image-name>`

You can then use the self signed certs in the `certs` directory of this repository, and spin up the containers with docker-compose:
`LE_DIR=./certs/ docker-compose -f dockerfiles/docker-compose.prod.yaml up`

You ten can reach the app at 0.0.0.0 in your browser.

### Local testing with Vagrant

TO BE FILLED IN

### Testing in macOS

These instructions assume you have git, npm,
composer, php, mysql installed,
that you have a running Laravel environment with Valet.


Adjust:

1. `DB_` setting to reflect the database you will use
2. `TEST_USER_PASSWORD` to the test password you want for the inital user.
    See `database/seeds/UserTableSeeder.php` for user name
3. `MAIL_` should be adjusted if you are going to test Forgot password or other functions that mail.
3. If you regenerate Passport Keys you man need to adjust `PASSWORD_CLIENT_ID`

#### Install the dependencies

```
composer install
npm install
npm run dev
```

#### Crate database tables and seed them

```
php artisan migrate
php artisan db:seed
```

#### Setup hosting

You can setup any `apache` hosting environment you would like.

For OSX with [Valet](https://laravel.com/docs/5.8/valet) installed the following will work from the
top directory of your project

```
valet link
valet open
```

You should now beable to login as `<email@example.com`  Using the password you set in the `.env`

## Setting up the API

Laravel uses a built in API controller called Passport. The following steps will walk you through setting up Passport for the application and generating a token to make calls to the API.

First, generate encrpytion keys for the passport service:
`php artisan passport:keys --force`

Then, install passport into the application and database:
`DB_DATABASE=<DB_NAME> DB_USERNAME=<USERNAME> DB_PASSWORD=YOUR_DB_PASSWORD php artisan passport:install --force`

Next, login to the app database via php's tinker command so you can create an API token:
`DB_DATABASE=<DB_NAME> DB_USERNAME=<USERNAME> DB_PASSWORD=YOUR_DB_PASSWORD php artisan tinker`

You will now be in a command prompt. We will run the following commands to generate a token for your service user account:

Find the user you want to generate the token under:
`User::find(<id>)`
For example, I would run `User::find(1)` to get the user with an id of 1.

Once you've figured out the user ID for the user you want to generate a token under, lets set that user to a variable we can use in our next commands:

`$user = User::find(<id>)`

Next, generate the token with a short name description for what the token is for. For example, of local testing you might use 'localtest':
`$token = $user->createToken('<Description>)->accessToken`

The previous command will print an access token to the console that you can user to make api requests to the app.

Make sure when you make your requests that you append `api` to the base url, before the endpoint. For example, if you want to list all applicants in the database, you would use the url `https://<base_url>/api/applicants`


