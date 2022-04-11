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
