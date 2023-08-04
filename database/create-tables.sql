CREATE TABLE `users` (
    `user_id` INT AUTO_INCREMENT,
    `username` VARCHAR(20) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `first_name` VARCHAR(50),
    `last_name` VARCHAR(50),
    `password` VARCHAR(255) NOT NULL,
    `role` TINYINT(1) NOT NULL DEFAULT 2,
    `avatar` VARCHAR(255),
    `created_at` DATETIME NOT NULL,
    `created_by_id` INT,
    `updated_at` DATETIME NOT NULL,
    `updated_by_id` INT,

    primary key (`user_id`),

    CONSTRAINT `UQ_users_username` UNIQUE(`username`),
    CONSTRAINT `UQ_users_email` UNIQUE(`email`)
);

CREATE TABLE `products` (
    `product_id` INT AUTO_INCREMENT,
    `sku` VARCHAR(10) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `category` TINYINT(2) NOT NULL,
    `description` TEXT,
    `unit_price` DECIMAL(10,2) NOT NULL,
    `image` VARCHAR(255),
    `created_at` DATETIME NOT NULL,
    `created_by_id` INT,
    `updated_at` DATETIME NOT NULL,
    `updated_by_id` INT,

    primary key (`product_id`),

    CONSTRAINT `UQ_products_sku` UNIQUE(`sku`)
);

CREATE TABLE `orders` (
    `order_id` INT AUTO_INCREMENT,
    `serial_number` VARCHAR(10) NOT NULL,
    `user_id` INT NOT NULL,
    `order_at` DATETIME DEFAULT CURRENT_TIMESTAMP(),
    `total_price` DECIMAL(10,2) NOT NULL,
    `status` TINYINT(1) NOT NULL DEFAULT 1,
    `note` TEXT,
    `created_at` DATETIME,
    `created_by_id` INT NOT NULL,
    `updated_at` DATETIME,
    `updated_by_id` INT NOT NULL,

    primary key (`order_id`),

    CONSTRAINT `UQ_orders_serial_number` UNIQUE(`serial_number`)
);
