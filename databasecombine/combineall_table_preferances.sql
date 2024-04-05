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
-- Table structure for table `preferances`
--

DROP TABLE IF EXISTS `preferances`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preferances` (
  `preferanceid` int NOT NULL AUTO_INCREMENT,
  `employeeid` int DEFAULT NULL,
  `preferd_location` varchar(45) DEFAULT NULL,
  `notice_period` int DEFAULT NULL,
  `ExpactedCTC` varchar(45) DEFAULT NULL,
  `Department` varchar(45) DEFAULT NULL,
  `currentctc` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`preferanceid`),
  KEY `employeeid` (`employeeid`),
  CONSTRAINT `preferances_ibfk_1` FOREIGN KEY (`employeeid`) REFERENCES `basic_details` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preferances`
--

LOCK TABLES `preferances` WRITE;
/*!40000 ALTER TABLE `preferances` DISABLE KEYS */;
INSERT INTO `preferances` VALUES (1,1,'DELHI',2,'5CTC','HR','4ctc'),(2,2,'DELHI',2,'5CTC','HR','0'),(3,3,'DELHI',2,'5CTC','HR','0'),(4,4,'DELHI',2,'6CTC','HR','5CTC'),(5,5,'DELHI',2,'5CTC','HR','4CTC'),(6,6,'DELHI',2,'7CTC','HR','6.5CTC'),(7,7,'DELHI',2,'5CTC','HR','4CTC'),(8,8,'DELHI',2,'7CTC','HR','6CTC'),(9,9,'DELHI',2,'6CTC','HR',NULL),(10,10,'DELHI',2,'5CTC','HR',NULL),(11,11,'DELHI',2,'7CTC','HR',NULL),(12,12,'DELHI',2,'5CTC','HR',NULL),(13,13,'DELHI',2,'6CTC','HR',NULL),(14,14,'DELHI',2,'5CTC','HR',NULL),(15,15,'DELHI',2,'7CTC','HR',NULL),(16,16,'DELHI',2,'5CTC','HR',NULL),(17,17,'DELHI',2,'5CTC','HR','5CTC'),(18,18,'DELHI',2,'5CTC','HR',NULL),(19,19,'DELHI',2,'5CTC','HR',NULL),(20,20,'DELHI',2,'5CTC','HR',NULL),(21,21,'DELHI',2,'6CTC','HR',NULL),(22,22,'DELHI',2,'5CTC','HR',NULL),(23,23,'DELHI',2,'7CTC','HR',NULL),(24,24,'DELHI',2,'5CTC','HR',NULL),(25,25,'DELHI',2,'5CTC','HR',NULL),(27,26,'Delhi',2,'Development','5','5'),(28,37,'Delhi',2,'Development','5','5'),(37,47,'Delhi',5,'Development','5','5'),(38,48,'Delhi',3,'Design marketing','5','2'),(39,49,'Delhi',3,'Design marketing','5','2'),(40,50,'Delhi',3,'Design marketing','5','2'),(41,51,'Delhi',3,'Design marketing','5','2'),(42,55,'Delhi',3,'5','Design marketing','2'),(43,56,'Gujarat',2,'2','Development','3'),(44,72,'Delhi',3,'3','Design marketing','5'),(45,79,'Delhi',3,'2','Development','7'),(46,210,'Delhi',3,'3','Design marketing','5'),(47,212,'Delhi',3,'3','Design marketing','5'),(48,213,'Delhi',3,'3','Design marketing','5'),(49,214,'Delhi',3,'3','Design marketing','5'),(50,218,'Delhi',8,'21','development','25'),(51,219,'Gujarat',3,'5','Design marketing','2'),(52,220,'Delhi',3,'3','Design marketing','7'),(53,222,'Delhi',3,'5','Design marketing','2'),(54,225,'Gujarat',3,'3','Development','2'),(55,230,'Delhi',2,'5','Development','5'),(56,236,'Delhi',3,'5','Development','3'),(57,246,'Gujarat',2,'2','Development','2'),(58,248,'Gujarat',3,'5','Development','5'),(59,249,'Gujarat',3,'5','Development','5'),(60,250,'Gujarat',3,'5','Development','5'),(61,251,'Gujarat',3,'5','Development','5'),(62,252,'Gujarat',3,'5','Development','5'),(63,253,'Gujarat',3,'5','Development','5'),(64,254,'Gujarat',3,'5','Development','5'),(65,255,'Gujarat',3,'5','Development','5'),(66,256,'Gujarat',3,'5','Development','5'),(67,257,'Gujarat',3,'5','Development','5'),(68,258,'Gujarat',3,'5','Development','5'),(69,259,'Gujarat',3,'5','Development','5'),(70,260,'Gujarat',3,'5','Development','5'),(71,261,'Gujarat',3,'5','Development','5'),(72,262,'Gujarat',3,'3','Development','3'),(73,263,'Gujarat',3,'3','Development','3'),(74,264,'Gujarat',3,'3','Development','3'),(75,265,'Gujarat',3,'3','Development','3'),(76,266,'Gujarat',3,'3','Development','3'),(77,267,'Gujarat',3,'3','Development','3'),(78,269,'Gujarat',3,'','Development',''),(79,270,'Gujarat',3,'','Development',''),(80,271,'Gujarat',3,'','Development',''),(81,272,'Gujarat',3,'','Development',''),(82,274,'Gujarat',3,'5','Development','5'),(83,276,'Gujarat',3,'3','Development','5'),(84,277,'Gujarat',3,'3','Development','5'),(85,278,'Gujarat',3,'5','Development','2'),(86,280,'Gujarat',3,'5','Development','2'),(87,281,'Gujarat',3,'5','Development','7'),(88,282,'Gujarat',2,'5','Development','5'),(89,283,'Gujarat',2,'3','Development','3'),(90,284,'Gujarat',2,'3','Development','3'),(91,285,'Gujarat',8,'2','Development','3'),(92,286,'Gujarat',3,'5','development','5'),(93,287,'Gujarat',3,'5','development','2'),(94,288,'Gujarat',3,'5','Development','2'),(95,289,'Gujarat',3,'3','Development','2'),(96,290,'Gujarat',3,'5','Development','5'),(97,291,'Gujarat',3,'5','Development','5');
/*!40000 ALTER TABLE `preferances` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-05 18:42:12
