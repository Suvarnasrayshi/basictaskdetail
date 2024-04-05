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
-- Table structure for table `education`
--

DROP TABLE IF EXISTS `education`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `education` (
  `id` int NOT NULL AUTO_INCREMENT,
  `optionid` int DEFAULT NULL,
  `employeeid` int DEFAULT NULL,
  `name_board` varchar(45) DEFAULT NULL,
  `coursename` varchar(45) DEFAULT NULL,
  `passingyear` varchar(45) DEFAULT NULL,
  `percentage` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `optionid` (`optionid`),
  KEY `employeeid` (`employeeid`),
  CONSTRAINT `education_ibfk_1` FOREIGN KEY (`optionid`) REFERENCES `option_master` (`id`),
  CONSTRAINT `education_ibfk_2` FOREIGN KEY (`employeeid`) REFERENCES `basic_details` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education`
--

LOCK TABLES `education` WRITE;
/*!40000 ALTER TABLE `education` DISABLE KEYS */;
INSERT INTO `education` VALUES (1,1,1,'CBSE','','2018','89'),(2,1,2,'CBSE','','2018','89'),(3,1,3,'GSEB','','2015','66'),(4,1,4,'CBSE','','2018','89'),(5,1,5,'CBSE','','2018','89'),(6,1,6,'CBSE','','2018','89'),(7,1,7,'CBSE','','2018','89'),(8,1,8,'GSEB','','2015','66'),(9,1,9,'CBSE','','2018','89'),(10,1,10,'CBSE','','2018','89'),(11,1,11,'CBSE','','2018','89'),(12,1,12,'CBSE','','2018','89'),(13,1,13,'CBSE','','2018','89'),(14,1,14,'GSEB','','2015','66'),(15,1,15,'CBSE','','2018','89'),(16,1,16,'CBSE','','2018','89'),(17,1,17,'CBSE','','2018','89'),(18,1,18,'CBSE','','2018','89'),(19,1,19,'GSEB','','2015','66'),(20,1,20,'CBSE','','2018','89'),(21,1,21,'CBSE','','2018','89'),(22,1,22,'CBSE','','2018','89'),(23,1,23,'GSEB','','2015','66'),(24,1,24,'CBSE','','2018','89'),(25,1,25,'CBSE','','2018','89'),(26,2,1,'CBSE','','2018','89'),(27,2,2,'CBSE','','2018','89'),(28,2,3,'GSEB','','2015','66'),(29,2,4,'CBSE','','2018','89'),(30,2,5,'CBSE','','2018','89'),(31,2,6,'CBSE','','2018','89'),(32,2,7,'CBSE','','2018','89'),(33,2,8,'GSEB','','2015','66'),(34,2,9,'CBSE','','2018','89'),(35,2,10,'CBSE','','2018','89'),(36,2,11,'CBSE','','2018','89'),(37,2,12,'CBSE','','2018','89'),(38,2,13,'CBSE','','2018','89'),(39,2,14,'GSEB','','2015','66'),(40,2,15,'CBSE','','2018','89'),(41,2,16,'CBSE','','2018','89'),(42,2,17,'CBSE','','2018','89'),(43,2,18,'CBSE','','2018','89'),(44,2,19,'GSEB','','2015','66'),(45,2,20,'CBSE','','2018','89'),(46,2,21,'CBSE','','2018','89'),(47,2,22,'CBSE','','2018','89'),(48,2,23,'GSEB','','2015','66'),(49,2,24,'CBSE','','2018','89'),(50,2,25,'CBSE','','2018','89'),(51,3,1,'','COMP','2018','89'),(52,3,2,'','COMP','2018','89'),(53,3,3,'','IT','2015','66'),(54,3,4,'','IT','2018','89'),(55,3,5,'','IT','2018','89'),(56,3,6,'','COMP','2018','89'),(57,3,7,'','COMP','2018','89'),(58,3,8,'','COMP','2015','66'),(59,3,9,'','COMP','2018','89'),(60,3,10,'','COMP','2018','89'),(61,3,11,'','IT','2018','89'),(62,3,12,'','IT','2018','89'),(63,3,13,'','IT','2018','89'),(64,3,14,'','COMP','2015','66'),(65,3,15,'','COMP','2018','89'),(66,3,16,'','IT','2018','89'),(67,3,17,'','COMP','2018','89'),(68,3,18,'','IT','2018','89'),(69,3,19,'','IT','2015','66'),(70,3,20,'','COMP','2018','89'),(71,3,21,'','IT','2018','89'),(72,3,22,'','IT','2018','89'),(73,3,23,'','COMP','2015','66'),(74,3,24,'','IT','2018','89'),(75,3,25,'','COMP','2018','89'),(76,4,1,'','COMP','2018','89'),(77,4,2,'','COMP','2018','89'),(78,4,3,'','IT','2015','66'),(79,4,4,'','IT','2018','89'),(80,4,5,'','IT','2018','89'),(81,4,6,'','COMP','2018','89'),(82,4,7,'','COMP','2018','89'),(83,4,8,'','COMP','2015','66'),(84,4,9,'','COMP','2018','89'),(85,4,10,'','COMP','2018','89'),(86,4,11,'','IT','2018','89'),(87,4,12,'','IT','2018','89'),(88,4,13,'','IT','2018','89'),(89,4,14,'','COMP','2015','66'),(90,4,15,'','COMP','2018','89'),(91,4,16,'','IT','2018','89'),(92,4,17,'','COMP','2018','89'),(93,4,18,'','IT','2018','89'),(94,4,19,'','IT','2015','66'),(95,4,20,'','COMP','2018','89'),(96,4,21,'','IT','2018','89'),(97,4,22,'','IT','2018','89'),(98,4,23,'','COMP','2015','66'),(99,4,24,'','IT','2018','89'),(100,4,25,'','COMP','2018','89');
/*!40000 ALTER TABLE `education` ENABLE KEYS */;
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
