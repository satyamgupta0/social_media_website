-- Query to find friends of userID 12489
select fname,lname,email 
from generalUser
where userID IN  
( select friendId
  from friendships
  where userID = 12489
);

-- Query to find number of friends of all users
select userID,count(*) AS Friends
from friendships	
group by userID;

-- Query to show chats of user 12489
select message,fromuser,toUser
from chat
where fromuser = 12489 or touser = 12489;

-- Query to get mobile numbers of all user
select G.fname as User_Name,M.mobilenumber1,M.mobilenumber2,M.mobilenumber3
from mobilenumbers M, generaluser G
group by G.userid;

-- query to select mobilenumber from username
select *
from mobilenumbers 
where userID IN 
(select userID 
 from generaluser 
 where fname = 'Satyam'
);

-- query to group users by their gender
select * 
from generaluser
where gender = 'female';
