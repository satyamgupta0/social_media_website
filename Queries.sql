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

select sessionid from friendships where userID = 1 and friendId = 5;
insert into chat values('S4','C11','Hiii',1,5,'2020-12-30 13:08:54.193');
delete from chat where chatId = 'C11';
insert into posts values(1,'P1','Link1','Cool','2022-04-11 13:08:54.193');
insert into posts values(3,'P3','Link3','Cool','2022-04-11 13:08:54.193');
insert into reaction values('P1',10,'Super');
insert into reaction values('P2',11,'Nice');

update reaction set likes = 15 where postId in('P1','P2');

alter table reaction drop column Reaction_comment;
drop table reaction;

insert into reaction values('P1',10);
insert into reaction values('P2',15);
insert into reaction values('P3',53);
