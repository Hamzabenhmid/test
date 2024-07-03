-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema covoiturage
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema covoiturage
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `covoiturage` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `covoiturage` ;

-- -----------------------------------------------------
-- Table `covoiturage`.`driver`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `covoiturage`.`driver` (
  `iddriver` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `num` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`iddriver`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `covoiturage`.`rides`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `covoiturage`.`rides` (
  `idrides` INT NOT NULL AUTO_INCREMENT,
  `departure` VARCHAR(45) NOT NULL,
  `destination` VARCHAR(45) NOT NULL,
  `date` DATE NOT NULL,
  `availableSeats` INT NOT NULL,
  `driver_iddriver` INT NOT NULL DEFAULT 1,  -- Replace '1' with your default driver ID
  PRIMARY KEY (`idrides`, `driver_iddriver`),
  INDEX `fk_rides_driver_idx` (`driver_iddriver` ASC) VISIBLE,
  CONSTRAINT `fk_rides_driver`
    FOREIGN KEY (`driver_iddriver`)
    REFERENCES `covoiturage`.`driver` (`iddriver`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
) ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `covoiturage`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `covoiturage`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `location` VARCHAR(255) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `num` INT NOT NULL,
  `rides_idrides` INT NOT NULL,
  `rides_driver_iddriver` INT NOT NULL,
  PRIMARY KEY (`id`, `rides_idrides`, `rides_driver_iddriver`),
  UNIQUE INDEX `username` (`location` ASC) VISIBLE,
  INDEX `fk_users_rides1_idx` (`rides_idrides` ASC, `rides_driver_iddriver` ASC) VISIBLE,
  CONSTRAINT `fk_users_rides1`
    FOREIGN KEY (`rides_idrides` , `rides_driver_iddriver`)
    REFERENCES `covoiturage`.`rides` (`idrides` , `driver_iddriver`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
