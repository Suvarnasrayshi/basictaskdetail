-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: combineall_table
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `workexp`
--

DROP TABLE IF EXISTS `workexp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workexp` (
  `workexpid` int NOT NULL AUTO_INCREMENT,
  `employeeid` int DEFAULT NULL,
  `Company_name` varchar(45) DEFAULT NULL,
  `Designation` varchar(45) DEFAULT NULL,
  `from_d` date DEFAULT NULL,
  `to_d` date DEFAULT NULL,
  PRIMARY KEY (`workexpid`),
  KEY `employeeid` (`employeeid`),
  CONSTRAINT `workexp_ibfk_1` FOREIGN KEY (`employeeid`) REFERENCES `basic_details` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workexp`
--

LOCK TABLES `workexp` WRITE;
/*!40000 ALTER TABLE `workexp` DISABLE KEYS */;
INSERT INTO `workexp` VALUES (1,1,'ARYA TECH.','HR','2005-10-20','2007-10-20'),(2,70,'aryatec','sdl','2024-03-05','2024-03-11'),(3,70,'manyatec','sdl','2024-03-04','2023-03-15'),(4,71,'aryatec','sdl','2024-03-06','2024-03-15'),(5,71,'manyatec','sdl','2024-02-27','2024-04-02'),(6,72,'aryatec','sdl','2024-03-06','2024-03-15'),(7,72,'manyatec','sdl','2024-03-11','2024-03-02'),(8,207,'manyatec','sdl','2024-03-15','2024-03-25'),(9,207,'aryatec','sdl','2024-03-01','2024-03-09'),(10,208,'manyatec','sdl','2024-03-06','2024-03-26'),(11,208,'aryatec','sdl','2024-03-14','2024-03-27'),(12,209,'manyatec','sdl','2024-03-06','2024-03-26'),(13,209,'aryatec','sdl','2024-03-14','2024-03-27'),(14,210,'manyatec','sdl','2024-03-06','2024-03-26'),(15,210,'aryatec','sdl','2024-04-02','2024-04-06'),(16,212,'manyatec','sdl','2024-03-07','2024-03-27'),(17,212,'aryatec','sdl','2024-03-19','2024-03-26'),(18,213,'manyatec','sdl','2023-04-04','2024-06-05'),(19,213,'manyatec2','sdl','2024-03-28','2024-03-27'),(20,214,'manyatec','sdl','2023-04-04','2024-06-05'),(21,214,'manyatec2','sdl','2024-03-28','2024-03-27'),(22,218,'suvarnatech','sdl','2024-04-06','2024-03-06'),(23,219,'suvarnatech','sdl','2024-04-06','2024-03-06'),(24,220,'manyatech','sdl','2024-04-06','2024-03-06'),(25,222,'suvarnatech','sdl','2024-04-06','2024-03-06'),(26,230,'manyatech','sdl','2024-04-06','2024-12-06'),(27,236,'suvarnatech','sdl','2024-04-06','2024-03-06'),(28,246,'suvarnatech','sdl','2024-04-06','2024-12-06'),(29,248,'suvarnatech','sdl','2024-04-06','2024-03-06'),(30,249,'suvarnatech','sdl','2024-04-06','2024-03-06'),(31,250,'suvarnatech','sdl','2024-04-06','2024-03-06'),(32,251,'suvarnatech','sdl','2024-04-06','2024-03-06'),(33,252,'suvarnatech','sdl','2024-04-06','2024-03-06'),(34,253,'suvarnatech','sdl','2024-04-06','2024-03-06'),(35,254,'suvarnatech','sdl','2024-04-06','2024-03-06'),(36,255,'suvarnatech','sdl','2024-04-06','2024-03-06'),(37,256,'suvarnatech','sdl','2024-04-06','2024-03-06'),(38,257,'suvarnatech','sdl','2024-04-06','2024-03-06'),(39,258,'suvarnatech','sdl','2024-04-06','2024-03-06'),(40,259,'suvarnatech','sdl','2024-04-06','2024-03-06'),(41,260,'suvarnatech','sdl','2024-04-06','2024-03-06'),(42,261,'suvarnatech','sdl','2024-04-06','2024-03-06'),(43,262,'suvarnatech','sdl','2024-04-06','2024-03-06'),(44,263,'suvarnatech','sdl','2024-04-06','2024-03-06'),(45,264,'suvarnatech','sdl','2024-04-06','2024-03-06'),(46,265,'suvarnatech','sdl','2024-04-06','2024-03-06'),(47,266,'suvarnatech','sdl','2024-04-06','2024-03-06'),(48,267,'suvarnatech','sdl','2024-04-06','2024-03-06'),(49,269,'suvarnatech','sdl','2024-04-06','2024-03-06'),(50,270,'suvarnatech','sdl','2024-04-06','2024-03-06'),(51,271,'suvarnatech','sdl','2024-04-06','2024-03-06'),(52,272,'suvarnatech','sdl','2024-04-06','2024-03-06'),(53,274,'suvarnatech','sdl','2024-04-06','2024-03-06'),(54,275,'suvarnatech','sdl','2024-04-06','2024-03-06'),(55,276,'suvarnatech','sdl','2024-04-06','2024-03-06'),(56,277,'suvarnatech','sdl','2024-04-06','2024-03-06'),(57,278,'suvarnatech','sdl','2024-04-06','2024-03-06'),(58,279,'manyatech','sdl','2024-04-06','2024-03-06'),(59,280,'manyatech','sdl','2024-04-06','2024-03-06'),(60,281,'manyatech','sdl','2024-04-06','2024-03-06'),(61,282,'suvarnatech','sdl','2024-04-06','2024-03-06'),(62,283,'suvarnatech','sdl','2024-04-06','2024-03-06'),(63,284,'suvarnatech','sdl','2024-04-03','2024-04-12'),(64,285,'manyatech','sdl','2024-04-10','2024-04-10'),(65,286,'suvarnatech','sdl','2024-04-01','2024-03-01'),(66,287,'aryatec','sdl','2023-04-02','2024-06-03'),(67,287,'aryatec','sdl','2023-04-02','2024-06-03'),(68,288,'manyatech','sdl','2024-04-06','2024-03-06'),(69,289,'suvarnatech','sdl','2024-04-06','2024-12-06'),(70,290,'suvarnatech','sdl','2024-04-06','2024-03-06'),(71,290,'manyatec','sdl','2023-04-04','2024-06-05'),(72,291,'suvarnatech','sdl','2024-04-06','2024-03-06');
/*!40000 ALTER TABLE `workexp` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-05 18:42:13
