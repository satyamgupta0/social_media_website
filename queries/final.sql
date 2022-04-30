
-- Find all the friends of a particular user
select friendID as friends from friendships where userID='12489'
union
select userID as friends from friendships where friendId='12489'

-- add image column in generalUser
alter table generaluser add column image varchar(500) default 'images/man.png';

-- create a view with necessary details
CREATE VIEW social.friendlist(userid,fullname,gender,email,image) 
AS
  select userid,concat(fname," ",lname) as fullname,gender,email,image from generaluser;


-- use the view to get the list of all friends
select * from friendlist where userID in (
select friendid from friendships as friends where userid="12489"
union
select userid from friendships as friends where  friendID = '12489'
);

-- list all the posts with details of the uploader
with posts as 
(SELECT * FROM posts NATURAL JOIN reaction WHERE uploaderID IN ( select friendId from friendships where userID = '12489')),
details as 
(select userid,fullname,gender,email,image as profileimage from friendlist)
select * from posts inner join details on posts.uploaderID=details.userid;

-- modify the table to add auto increment constrints on chat table chatid
alter table chat modify column chatID INT AUTO_INCREMENT ;

-- Find all the mutual Friends of a user
select distinct userID as friends
from friendships
where friendId in 
( 
      select friendID as friends from friendships where userID='12489'
      union
	  select userID as friends from friendships where friendId='12489'
)
union
select distinct friendID as friends
from friendships
where UserId in 
( 
      select friendID as friends from friendships where userID='12489'
      union
	  select userID as friends from friendships where friendId='12489'
);


-- To find the posts of friends as well as mutual friends
select * from posts where uploaderID in 
(
select distinct userID as friends
from friendships
where friendId in 
( 
      select friendID as friends from friendships where userID='12489'
      union
	  select userID as friends from friendships where friendId='12489'
)
union
select distinct friendID as friends
from friendships
where UserId in 
( 
      select friendID as friends from friendships where userID='12489'
      union
	  select userID as friends from friendships where friendId='12489'
)
);

-- To make a friend request
insert into friendships(userID, friendID,frndStatus,sessionid) values('12489', '')