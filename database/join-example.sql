SELECT `u`.`id` AS `user_id`, `u`.`username`, `user_phones`.`id` `user_phones_id`, `user_phones`.`phone_number`
FROM `users` AS `u` RIGHT JOIN `user_phones` ON `u`.`id` = `user_phones`.`user_id`
ORDER BY `user_phones`.`phone_number` DESC;
