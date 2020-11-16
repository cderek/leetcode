-- Source : https://leetcode-cn.com/problems/employees-earning-more-than-their-managers/solution/chao-guo-jing-li-shou-ru-de-yuan-gong-by-leetcode/
-- Author : cderek
-- Date   : 2020-11-16

SELECT 
    a.Name AS 'Employee'
FROM
   Employee AS a,
   Employee AS b
WHERE 
   a.ManagerId = b.Id
     AND a.Salary > b.Salary;
   
