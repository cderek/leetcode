-- Source : https://leetcode-cn.com/problems/delete-duplicate-emails/
-- Author : cderek
-- Date   : 2020-11-16




DELETE p1 FROM Person p1,
    Person p2
WHERE
    p1.Email = p2.Email AND p1.Id > p2.Id

