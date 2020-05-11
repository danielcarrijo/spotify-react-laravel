# Spotify Clone

A web version of Spotify made (being made) using ReactJS and Laravel, besides using laravel passport for authentication. 
## Getting Started

Clone the project repository by running the command below if you use SSH

```bash
git clone git@github.com:danielcarrijo/spotify-react.git
```

If you use https, use this instead

```bash
git clone https://github.com/danielcarrijo/spotify-react.git
```

After cloning, run:

```bash
composer install
```

```bash
npm install
```

Duplicate `.env.example` and rename it `.env`

Then run:

```bash
php artisan key:generate
```

### Prerequisites

Be sure to fill in your database details in your `.env` file before running the migrations:

```bash
php artisan migrate
```
and then uncomment what is inside the function "run" in database/seeds/DatabaseSeeder.php and run. IMPORTANT:: RUN THE SEEDS BEFORE DOING ANY MANUAL INSERTION, OTHERWISE THE PIVOT TABLE WILL BE DAMAGED

```bash
php artisan db:seed
```
in order to seed the database, and then

And finally, start the application:

```bash
php artisan passport:install
```

```bash
php artisan serve
```

and visit [http://localhost:8000](http://localhost:8000) to see the application in action.

## Built With

* [Laravel](https://laravel.com) - The PHP Framework For Web Artisans
* [React](https://reactjs.org) - A JavaScript library for building user interfaces
