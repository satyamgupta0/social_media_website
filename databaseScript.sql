create database social;
use social;
-- Descibes each and every user on the plate
create table generalUser(
userID int not null,
fname varchar(10),
mname varchar(10),
lname varchar(10),
gender varchar(10),
email varchar(30) not null,
pswd varchar(30), 
dateOfBirth date,
age int,
numbersID int,
primary key (userID), 
foreign key (numbersID) references mobileNumbers(numbersID)
);

insert into generalUser(userID, fname, mname, lname, gender, email, pswd, numbersID) 
values(12312,"Satyam", "Kumar","Gupta", "male","202051169@iiitv.ac.in", "won't tell", 23212  );
# describes the list of multiple mobile numbers related to each user
create table mobileNumbers(
-- we are limiting the number of numbers
-- alternate solution would be to make table
-- with userId and mobile number but somehow
-- I feel it will increase the size and decreses the speed
numbersID int not null,
mobilenumber1 int,
mobilenumber2 int,
mobilenumber3 int,
primary key (numbersID)
);
 
 create table friendships( -- Describes a relationship bw user and friend 
 -- MySQL limits us to create personalized friendship tables
 -- We have to make a common friendship table describing the chatsession
 -- relationship and status
 userID int ,
 friendId int,
 frndstatus varchar(10),-- blocked, active
 sessionid varchar(20) not null,-- reference to chat session
 foreign key (sessionid) references chat(sessionid),
 foreign key (userID) references generalUser(userID),
 foreign key (friendID) references generalUser(userID)
 ); 
 
 create table upload(
 -- Common Table
 -- Describes the relationship bw user and post
 -- we could be merged it with posts table but it 
 -- could have decreased speed.
 
 userID int not null,
 postID int not null,
 flag varchar(10),# flag to identify whether the post is posted by the user or saved, or shared
 foreign key (userID) references generalUser(userID),
 foreign key (postID) references posts(postid)
 );
 
 create table posts(
 -- user either share posts, or save posts
 -- The problem is to increase abstraction and
 -- reduce the risk of data leakage
 -- this method increase the risk of data leakage 
 -- could there be a another way to create personalized
 -- allPosts table for each user
 -- either we can create individual tables for users to descibe post
 -- or we can create a single table and show all the post with respective
 -- user and uploader
 
 # Common table for all users
 uploaderID int not null,
 postid int not null,
 image varchar(50),
 caption varchar(300),
 # replyComments varchar(100),-- experimental, current sql method limits us to make individual tables
 -- for each post
 # commentuserID int not null,
tmstp datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
primary key (postid),
foreign key (uploaderID) references generalUser(userID)
);
 
 
 ################### problematic ###########################
 -- Chat-session bw two users
create table chat(
-- for describing the chatsession either we can create a common table
-- for each and every pairs; but problem related to it is it decreases 
-- the speed, security, integrity and privacy of chats
-- also the size will be exponentially increasing
-- another solution is to create multiple tables 
-- but is it viable to make multiple tables?
-- obviously there will be a loads of chatsessions
sessionid varchar(20) not null,
 chatId int,
 message varchar(200),
 fromuser int,
 toUser int,
 tmstp datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, 
 primary key (sessionid),
 foreign key (fromuser) references generalUser(userID),
 foreign key (touser) references generalUser(userID)
 );
 
 
