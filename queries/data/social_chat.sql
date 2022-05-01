-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: localhost    Database: social
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chat` (
  `chatID` int NOT NULL AUTO_INCREMENT,
  `message` varchar(200) DEFAULT NULL,
  `fromuser` varchar(300) DEFAULT NULL,
  `toUser` varchar(300) DEFAULT NULL,
  `tmstp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`chatID`),
  KEY `fromuser` (`fromuser`),
  KEY `toUser` (`toUser`),
  CONSTRAINT `chat_ibfk_1` FOREIGN KEY (`fromuser`) REFERENCES `generaluser` (`userID`),
  CONSTRAINT `chat_ibfk_2` FOREIGN KEY (`toUser`) REFERENCES `generaluser` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=186 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat`
--

LOCK TABLES `chat` WRITE;
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
INSERT INTO `chat` VALUES (10,'Hi','12359','12489','2022-04-11 11:14:07'),(20,'chal','12794','12945','2022-04-11 11:16:07'),(30,'nahi','12657','12945','2022-04-11 11:20:04'),(40,'yes','12397','12312','2022-04-11 11:21:45'),(50,'bye','12945','12657','2022-04-11 11:29:41'),(60,'ok','12489','12359','2022-04-11 11:34:20'),(70,'really','12489','12945','2022-04-11 11:41:11'),(170,'kai chalal ahe','12672','12489','2022-04-11 15:40:16'),(180,'Do I know you','12794','12143','2022-04-11 15:45:04'),(181,'hi','12489','12672','2022-04-29 20:06:49'),(182,'bro','12489','12672','2022-04-29 20:07:23'),(183,'hello','12489','12672','2022-04-29 20:07:30'),(184,'good night','12489','12672','2022-04-29 20:08:13'),(185,'so are you happy now?','12489','12672','2022-04-29 21:05:30');
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-29 22:03:18
