CREATE DATABASE IF NOT EXISTS `Notes`;
USE `Notes`;

CREATE TABLE `User` (
    `id` BIGSERIAL PRIMARY KEY,
    `username` VARCHAR(64) NOT NULL,
    `password_sha512` VARCHAR(513) NOT NULL,
    `password_md5` VARCHAR(33) NOT NULL,
    `access_level` INTEGER(1) NOT NULL DEFAULT 0,
    `display_name` VARCHAR(64) DEFAULT NULL
);

CREATE TABLE `Authorization` (
    `id` BIGSERIAL PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `device_name` VARCHAR(64) NOT NULL,
    `last_ip` VARCHAR(16) NOT NULL,
    `os_type` VARCHAR(16) DEFAULT NULL
);

CREATE TABLE `Folder` (
    `id` BIGSERIAL PRIMARY KEY,
    `name` VARCHAR(64) NOT NULL DEFAULT "New Folder",
    `color` VARCHAR(7) NOT NULL DEFAULT "#888888",
    `parent_id` BIGINT DEFAULT NULL,
    `last_modified` DATETIME DEFAULT CURTIME(),
    `user_id` BIGINT NOT NULL
);

CREATE TABLE `Note` (
    `id` BIGSERIAL PRIMARY KEY,
    `name` VARCHAR(128) NOT NULL,
    `content` TEXT NOT NULL,
    `folder_id` BIGINT NOT NULL
    -- `user_id` BIGINT NOT NULL
);

INSERT INTO `User` (`id`, `username`, `password_sha512`, `password_md5`, `access_level`, `display_name`) VALUES
    (0, 'Vkw2920', '75f9c83f73a0ad8ce12c954b4fc50c658de07eb8de2f0e024af61acedb8ed3e5f5418c261b1958822fe524475e81e975f0527244b882ef9f5799041e1191e074', 'e9233223a48968bf794abf30ce5de462', 999, 'Вадим');
