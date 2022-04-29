
-- Find all the friends of a particular user
select friendID as friends from friendships where userID='12489'
union
select userID as friends from friendships where friendId='12489'

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
insert into friendships(userID, friendID,frndStatus,sessionid) values 