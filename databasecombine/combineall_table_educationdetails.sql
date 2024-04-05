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
-- Table structure for table `educationdetails`
--

DROP TABLE IF EXISTS `educationdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `educationdetails` (
  `edid` int NOT NULL AUTO_INCREMENT,
  `employeeid` int DEFAULT NULL,
  `typeofed` varchar(45) DEFAULT NULL,
  `coursename` varchar(45) DEFAULT NULL,
  `passingyear` varchar(45) DEFAULT NULL,
  `percentage` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`edid`),
  KEY `employeeid_idx` (`employeeid`),
  CONSTRAINT `employeeid` FOREIGN KEY (`employeeid`) REFERENCES `basic_details` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=153 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `educationdetails`
--

LOCK TABLES `educationdetails` WRITE;
/*!40000 ALTER TABLE `educationdetails` DISABLE KEYS */;
INSERT INTO `educationdetails` VALUES (1,1,'1','1','1','1'),(4,146,'HSC','gtu','96','2024-03-26'),(5,147,'PHD','','',''),(6,148,'PHD','','',''),(7,149,'PHD','','',''),(8,150,'PHD','','',''),(9,151,'SSC','','',''),(10,152,'SSC','','',''),(11,153,'SSC','','',''),(12,154,'SSC','','',''),(13,155,'SSC','','',''),(14,156,'SSC','','',''),(15,157,'SSC','','',''),(16,158,'SSC','','',''),(17,159,'SSC','','',''),(18,160,'SSC','','',''),(19,161,'SSC','','',''),(20,163,'SSC','','',''),(21,164,'SSC','','',''),(22,165,'SSC','','',''),(23,166,'SSC','','',''),(24,167,'SSC','','',''),(25,168,'SSC','','',''),(26,169,'SSC','','',''),(27,170,'SSC','','',''),(28,171,'SSC','','',''),(29,172,'SSC','','',''),(30,173,'SSC','','',''),(31,174,'SSC','','',''),(32,175,'SSC','','',''),(33,176,'SSC','','',''),(34,177,'SSC','','',''),(35,178,'SSC','','',''),(36,179,'SSC','','',''),(37,180,'SSC','','',''),(38,181,'SSC','','',''),(39,182,'SSC','','',''),(40,183,'SSC','gtu','96','2024-03-07'),(41,183,'HSC','nirma','65','2024-03-06'),(42,184,'Bachelors','gtu','65','2024-03-26'),(43,184,'HSC','nirma','96','2024-03-05'),(44,185,'SSC','nirma','65','2024-03-13'),(45,186,'SSC','nirma','65','2024-03-13'),(46,187,'SSC','nirma','65','2024-03-13'),(47,188,'SSC','nirma','65','2024-03-13'),(48,189,'SSC','nirma','65','2024-03-13'),(49,190,'SSC','nirma','65','2024-03-13'),(50,191,'SSC','nirma','65','2024-03-13'),(51,192,'SSC','nirma','65','2024-03-13'),(52,193,'SSC','nirma','65','2024-03-13'),(53,194,'SSC','nirma','65','2024-03-13'),(54,195,'SSC','nirma','65','2024-03-13'),(55,196,'SSC','nirma','65','2024-03-13'),(56,197,'SSC','nirma','65','2024-03-13'),(57,198,'SSC','nirma','65','2024-03-13'),(58,199,'SSC','nirma','65','2024-03-13'),(59,200,'SSC','nirma','65','2024-03-13'),(60,201,'SSC','nirma','65','2024-03-13'),(61,202,'SSC','nirma','65','2024-03-13'),(62,203,'SSC','nirma','65','2024-03-13'),(63,204,'SSC','nirma','',''),(64,205,'SSC','nirma','',''),(65,206,'SSC','','',''),(66,207,'SSC','nirma','2024-03-15','65'),(67,207,'HSC','gtu','2024-03-18','96'),(68,207,'Bachelors','gtu','2024-03-02','65'),(69,208,'HSC','nirma','2024-03-27','65'),(70,208,'Bachelors','gtu','2024-03-26','96'),(71,209,'HSC','nirma','2024-03-27','65'),(72,209,'Bachelors','gtu','2024-03-26','96'),(73,210,'HSC','nirma','2024-03-27','65'),(74,210,'Bachelors','gtu','2024-03-27','96'),(75,210,'Masters','gtu','2024-04-06','96'),(76,211,'HSC','nirma','2024-03-27','65'),(77,212,'HSC','nirma','2024-03-27','65'),(78,213,'HSC','nirma','2024-03-27','65'),(79,214,'HSC','nirma','2024-03-27','65'),(80,215,'Bachelors','gtu','2024-03-21','96'),(81,216,'SSC','gtu','2024-03-20','96'),(82,217,'HSC','nirma','2024-03-12','96'),(83,218,'SSC','gtu','2024-03-14','65'),(84,219,'SSC','gtu','2024-03-14','65'),(85,220,'SSC','gtu','2024-03-06','96'),(86,221,'SSC','','',''),(87,222,'Bachelors','nirma','2024-03-14','96'),(88,223,'SSC','','',''),(89,224,'SSC','nirma','2024-03-14','65'),(90,224,'HSC','gtu','2024-03-15','65'),(91,225,'SSC','nirma','2024-03-14','65'),(92,226,'SSC','','',''),(93,227,'SSC','','',''),(94,228,'SSC','','',''),(95,229,'SSC','','',''),(96,230,'SSC','nirma','2024-03-14','65'),(97,230,'HSC','gtu','2024-03-13','96'),(98,231,'SSC','','',''),(99,232,'SSC','','',''),(100,233,'SSC','','',''),(101,234,'SSC','','',''),(102,235,'SSC','','',''),(103,236,'SSC','nirma','2024-03-19','65'),(104,246,'SSC','nirma','2024-02-29','96'),(105,248,'SSC','gtu','2024-03-13','96'),(106,249,'SSC','gtu','2024-03-13','96'),(107,250,'SSC','gtu','2024-03-13','96'),(108,251,'SSC','gtu','2024-03-13','96'),(109,252,'SSC','gtu','2024-03-13','96'),(110,253,'SSC','gtu','2024-03-13','96'),(111,254,'SSC','gtu','2024-03-13','96'),(112,255,'SSC','gtu','2024-03-13','96'),(113,256,'SSC','gtu','2024-03-13','96'),(114,257,'SSC','gtu','2024-03-13','96'),(115,258,'SSC','gtu','2024-03-13','96'),(116,259,'SSC','gtu','2024-03-13','96'),(117,260,'SSC','gtu','2024-03-13','96'),(118,261,'SSC','gtu','2024-03-13','96'),(119,262,'SSC','nirma','2024-03-05','65'),(120,263,'SSC','nirma','2024-03-05','65'),(121,264,'SSC','nirma','2024-03-05','65'),(122,265,'SSC','nirma','2024-03-05','65'),(123,266,'SSC','nirma','2024-03-05','65'),(124,267,'SSC','nirma','2024-03-05','65'),(125,268,'SSC','','',''),(126,269,'SSC','gtu','2024-04-09','96'),(127,270,'SSC','gtu','2024-04-09','96'),(128,271,'SSC','gtu','2024-04-09','96'),(129,272,'SSC','gtu','2024-04-09','96'),(130,273,'SSC','','',''),(131,274,'SSC','gtu','2024-04-03','65'),(132,275,'SSC','nirma','2024-04-16','96'),(133,276,'SSC','nirma','2024-04-10','96'),(134,277,'SSC','nirma','2024-04-10','96'),(135,278,'SSC','nirma','2024-04-16','96'),(136,279,'SSC','gtu','2024-04-16','65'),(137,280,'SSC','gtu','2024-04-16','65'),(138,281,'SSC','gtu','2024-04-19','96'),(139,282,'SSC','gtu','2024-04-16','65'),(140,283,'SSC','gtu','2024-04-10','96'),(141,284,'SSC','gtu','2024-04-10','96'),(142,285,'SSC','nirma','2024-04-02','96'),(143,286,'SSC','gtu','2024-04-19','96'),(144,287,'SSC','gtu','2024-04-12','96'),(145,287,'SSC','gtu','2024-04-12','96'),(146,288,'SSC','gtu','1235','65'),(147,289,'SSC','gtu','2024-04-12','96'),(148,289,'HSC','gtu','2024-04-15','96'),(149,290,'SSC','gtu','2024-04-12','65'),(150,290,'HSC','nirma','2024-04-23','96'),(151,291,'HSC','gtu','1235','65'),(152,291,'Bachelors','nirma','12355','65');
/*!40000 ALTER TABLE `educationdetails` ENABLE KEYS */;
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
