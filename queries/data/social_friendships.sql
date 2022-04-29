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
-- Table structure for table `friendships`
--

DROP TABLE IF EXISTS `friendships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `friendships` (
  `userID` varchar(300) NOT NULL,
  `friendId` varchar(300) NOT NULL,
  `frndstatus` varchar(50) DEFAULT NULL,
  `sessionid` varchar(300) NOT NULL,
  PRIMARY KEY (`userID`,`friendId`),
  KEY `friendId` (`friendId`),
  CONSTRAINT `friendships_ibfk_1` FOREIGN KEY (`friendId`) REFERENCES `generaluser` (`userID`),
  CONSTRAINT `friendships_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `generaluser` (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `friendships`
--

LOCK TABLES `friendships` WRITE;
/*!40000 ALTER TABLE `friendships` DISABLE KEYS */;
INSERT INTO `friendships` VALUES ('12143','12794','active','18'),('12312','12359','active','2'),('12312','12397','active','1'),('12345','12397','active','20'),('12345','12489','active','18'),('12345','12945','active','19'),('12359','12397','active','6'),('12359','12794','active','5'),('12397','12312','active','3'),('12397','12359','active','4'),('12489','12345','active','18'),('12489','12359','active','12'),('12489','12397','active','11'),('12489','12794','pending','13'),('12489','12945','active','14'),('12657','12945','active','16'),('12672','12489','active','17'),('12794','12312','active','7'),('12794','12657','active','15'),('12794','12945','active','8'),('12945','12489','active','9'),('12945','12794','active','10');
/*!40000 ALTER TABLE `friendships` ENABLE KEYS */;
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
