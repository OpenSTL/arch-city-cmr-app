FROM php:7.4.7-apache-buster

RUN apt-get update && apt-get install -y \
    apt-utils libmcrypt-dev default-mysql-client libzip-dev \
    libmagickwand-dev gnupg2 unzip npm --no-install-recommends \
    && docker-php-ext-install pdo_mysql gd zip \
    && pecl install mcrypt \
    && docker-php-ext-enable mcrypt

RUN  npm install npm@latest -g

COPY composer.lock composer.json /var/www/

COPY database /var/www/database

WORKDIR /var/www

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" \
    && php -r "if (hash_file('sha384', 'composer-setup.php') === 'e5325b19b381bfd88ce90a5ddb7823406b2a38cff6bb704b0acc289a09c8128d4a8ce2bbafcd1fcbdc38666422fe2806') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;" \
    && php composer-setup.php \
    && php -r "unlink('composer-setup.php');" \
    && php composer.phar install --no-scripts --no-dev \
    && rm composer.phar

EXPOSE 8080

COPY dockerfiles/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY . /var/www
COPY .env /var/www/.env

RUN chown -R www-data:www-data \
        /var/www/storage \
        /var/www/bootstrap/cache && \
        echo "Listen 8080" >> /etc/apache2/ports.conf && \
        a2enmod rewrite

RUN npm install \
    && npm run prod \
    && npm update

RUN apt-get remove -y unzip npm
