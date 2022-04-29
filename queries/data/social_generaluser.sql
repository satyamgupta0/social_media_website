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
-- Table structure for table `generaluser`
--

DROP TABLE IF EXISTS `generaluser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `generaluser` (
  `userID` varchar(300) NOT NULL,
  `fname` varchar(100) DEFAULT NULL,
  `lname` varchar(100) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `pswd` varchar(100) DEFAULT NULL,
  `dateOfBirth` date DEFAULT NULL,
  `age` int DEFAULT NULL,
  `image` varchar(500) DEFAULT 'images/man.png',
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `generaluser`
--

LOCK TABLES `generaluser` WRITE;
/*!40000 ALTER TABLE `generaluser` DISABLE KEYS */;
INSERT INTO `generaluser` VALUES ('12143','Siddhesh','Bhosale','male','202051177@iiitv.ac.in','chhagan','2002-09-04',19,'images/man.png'),('12312','Satyam','Gupta','male','202051169@iiitv.ac.in','won\'t tell','2002-05-25',20,'images/man.png'),('12345','Mayank Mangal','Mourya','Male','202051116@iiitv.ac.in','chala ja','2002-02-02',20,'images/man.png'),('12359','Ambika','Kale','female','ambika@gmail.com','nahi','2002-11-25',19,'images/man.png'),('12397','Sanjay','Singh','male','sa@gmail.com','Kai','2003-01-12',19,'images/man.png'),('12400','ghf','12400','Male','adjf@gmail.com','123','2002-04-09',20,'images/man.png'),('12489','Abhay','Jagtap','male','202051204@iiitv.ac.in','asdf','2002-04-22',20,'images/man.png'),('12657','Abhishek','Kumar','male','abhi@gmail.com','kdihl','2001-06-04',20,'images/man.png'),('12672','Ajinkya','Sontakke','male','202051179@iiitv.ac.in','chal nikal','2001-09-11',21,'images/man.png'),('12794','Sakshi','Sharma','female','sakshi@gmail.com','haad','2002-08-08',19,'images/man.png'),('12945','Tejas','Gundale','male','202051191@iiitv.ac.in','kya','2002-06-30',19,'images/man.png');
/*!40000 ALTER TABLE `generaluser` ENABLE KEYS */;
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
