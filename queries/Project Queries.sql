use social;

-- To get no. of friends of user ex = 12489
SELECT COUNT(*) AS Friends
FROM friendships
WHERE userID = 12489;

-- To get no. of posts of user ex = 12489
SELECT COUNT(*) AS Posts
FROM posts
WHERE uploaderID = 12489;

-- To get chat of user
SELECT message 
FROM chat
WHERE sessionid IN 
(
	SELECT sessionid
    FROM friendships
    WHERE userID = 12489
);

-- To get chat list
SELECT * 
FROM chat
WHERE fromuser = '12489' or touser = '12489'
GROUP BY sessionid; 

-- To get posts of user
SELECT *
FROM posts
WHERE uploaderID = 12489;

-- To get posts of friends
SELECT P.*,R.*,G.fname,G.lname
FROM (posts P NATURAL JOIN reaction R) Inner JOIN generaluser G 
ON P.uploaderID = G.userID
WHERE P.uploaderID IN 
(
	select friendId
    from friendships
    where userID = 12489
);

insert into reaction
values("P6",20459);

update reaction
set likes = 200000
where postid = "P2";

-- To get friend of friends
SELECT DISTINCT F.friendId AS Friends, G.fname, G.lname
FROM friendships F
INNER JOIN generaluser G
ON F.friendID = G.userID
WHERE F.userID IN
(
	SELECT friendId
    FROM friendships
    WHERE userID = 12489
)
and F.friendID NOT IN
(
	SELECT friendId
    FROM friendships
    WHERE userID = 12489
)
and F.friendID <> 12489;


-- Satyam Version
select distinct userID as friends
from friendships
where friendId in 
( 
      select friendID 
      from friendships 
      where userID='user11'
);

-- To get pending requests
SELECT friendId
FROM friendships
WHERE frndstatus = 'pending' and userID = 12489;

-- To get search 
SELECT userID
FROM generaluser
WHERE fname LIKE '%string%' or lname LIKE '%string%';

-- To get posts of user
SELECT image
FROM posts
WHERE uploaderID = 12489;