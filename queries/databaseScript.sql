create database social;
use social;
-- Descibes each and every user on the plate
create table generalUser(
userID varchar(300) not null,
fname varchar(100),
lname varchar(100),
gender varchar(10),
email varchar(100) not null,
pswd varchar(100), 
dateOfBirth date,
age int,
image varchar(500) default 'images/man.png',
primary key (userID)
);

#insert into generalUser(userID, fname, mname, lname, gender, email, pswd, numbersID) 
#values(12312,"Satyam", "Kumar","Gupta", "male","202051169@iiitv.ac.in", "won't tell", 23212  );
# describes the list of multiple mobile numbers related to each user
create table mobileNumbers(
-- we are limiting the number of numbers
-- alternate solution would be to make table
-- with userId and mobile number but somehow
-- I feel it will increase the size and decreses the speed
userID varchar(300) not null,
mobilenumber1 varchar(15),
mobilenumber2 varchar(15),
mobilenumber3 varchar(15),
primary key (userID)

);
 
create table friendships( -- Describes a relationship bw user and friend 
 -- MySQL limits us to create personalized friendship tables
 -- We have to make a common friendship table describing the chatsession
 -- relationship and status
 --small number in user and larger one in friends 
 userID varchar(300) ,
 friendId varchar(300),
 frndstatus varchar(50),-- blocked, active
 #sessionid varchar(300) not null,-- reference to chat session
 primary key (userID,friendID),
 #foreign key (sessionid) references chat(sessionid), #Session ID will be same for multiple chatsin a sesion
 foreign key (friendID) references generalUser(userID) ON DELETE CASCADE ,
 foreign key (userID) references generalUser(userID) ON DELETE CASCADE 
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
 uploaderID varchar(300) not null,
 postid varchar(300) not null,
 image varchar(1000),
 caption varchar(3000),
 # replyComments varchar(100),-- experimental, current sql method limits us to make individual tables
 -- for each post
 # commentuserID int not null,
tmstp datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
primary key (postid),
foreign key (uploaderID) references generalUser(userID) ON DELETE CASCADE 
);
 
  create table upload(
 -- Common Table
 -- Describes the relationship bw user and post
 -- we could be merged it with posts table but it 
 -- could have decreased speed.
 -- a user can save the post to his profile that relation is also stored here
 userID varchar(300) not null,
 postID varchar(300) not null,
 flag varchar(50),# flag to identify whether the post is posted by the user or saved, or shared
 primary key (userID,postID),
 foreign key (userID) references generalUser(userID) ON DELETE CASCADE ,
 foreign key (postID) references posts(postid) ON DELETE CASCADE 
 );
 ################### problematic ###########################
 -- Chat-session bw two users
  create table chat(
-- for describing the chatsession either we can create a common table
-- for each and every pairs; but problem related to it is it decreases 
-- the speed, security, integrity and privacy of chats
-- also the size will be exponentially increasing
-- another solution is to create multiple tables 
-- but is chatit viable to make multiple tables?
-- obviously there will be a loads of chatsessions
#sessionid varchar(300) not null,
 chatId varchar(500) INT AUTO_INCREMENT,
 message varchar(200),
 fromuser varchar(300),
 toUser varchar(300),
 tmstp datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, 
 primary key (chatID),
 foreign key (fromuser) references generalUser(userID) ON DELETE CASCADE, 
 foreign key (touser) references generalUser(userID) ON DELETE CASCADE 
 );
 
 
 create table reaction(
      postid varchar(300) not null,
      likes int default 0,
      foreign key (postid) references posts(postid)
 )
