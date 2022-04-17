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

-- To get posts of user
SELECT *
FROM posts
WHERE uploaderID = 12489;

-- To get posts of friends
SELECT *
FROM posts
WHERE uploaderID IN 
(
	select friendId
    from friendships
    where userID = 12489
);