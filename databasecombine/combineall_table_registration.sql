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
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `activation` varchar(12) DEFAULT NULL,
  `salt` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES (1,'anjali','patel','anjali@patel.com','1452369877','3a2e8381502d7f2b12a133bcb52c7a16','XoKEZbHzFUj5','gojG','2024-03-29 13:26:34'),(2,'krushi','patel','k@p.com','1478965235','e344ed6d52d9a4b314695e93b7437a6c','VlXztUhiRYOw','uDxr','2024-04-03 07:00:46'),(3,'suvarnasrayshi','sinha','s@gmail.com','1452369877','069339d6f3ce4e4e8d0a5d538359be22','YjqWihpKtWZ8','Og2P','2024-04-03 05:00:19'),(4,'nandini','agrawal','nan@123gmail.com','1245789636','de87a26079caafed55f3783a1a038c56','mimydjrfbxUy','XLqT','2024-03-29 12:33:16'),(5,'aryasrayshi','sinha','suvarna@gmail.com','1233698743','1dbcd67933bf6ad423679f9685951e41','GBHS7ne6dU1h','Lxxw','2024-04-01 06:23:39'),(6,'Darshan','panchan','darshan@123gmail.com','1478523698','123456','TSxkaz2BHzll','POyt','2024-04-01 05:10:55'),(7,'vishwas','patel','vish@123gmail.com','1478523694','135e7fc027cf2457401f01fe77f85ffb','mT6yGsG1QFrF','Zn3n','2024-04-01 04:36:31'),(8,'anjalipatel','vyas','s1@gmail.com','1233698743','73ada2fb2e443fc4fd1221c90056698e','Mo9yvG1ECgl3','Fwwk','2024-04-01 05:15:22'),(9,'suvarnasrayshi','sinha','arya@gmail.com','1478961236','4323ae456dce62dbd7139b4672ea4576','mh4fYfep2bfx','fO3S','2024-04-05 03:55:05'),(10,'suvarnasrayshi','sinha','s123@gmail.com','1234646464','09c9ff3d095943c50ee83837b8ce60d6','GeV4HaCOkeLa','6l0q','2024-04-05 12:41:50');
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
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
