FROM php:fpm
RUN docker-php-ext-install pdo pdo_mysql mysqli
COPY . /var/www/html
WORKDIR /var/www/html