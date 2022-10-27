CREATE SCHEMA IF NOT EXISTS `db_digitalbooking`;

CREATE TABLE IF NOT EXISTS `db_digitalbooking`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `url_image` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
