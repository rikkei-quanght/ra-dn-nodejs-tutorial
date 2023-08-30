-- Create foreign keys
ALTER TABLE orders
    ADD CONSTRAINT FK_orders_user_id FOREIGN KEY
    FK_orders_user_id (user_id)
    REFERENCES users (user_id);

ALTER TABLE orders
    ADD CONSTRAINT FK_orders_created_by_id FOREIGN KEY
    FK_orders_created_by_id (created_by_id)
    REFERENCES users (user_id);

ALTER TABLE orders
    ADD CONSTRAINT FK_orders_updated_by_id FOREIGN KEY
    FK_orders_updated_by_id (updated_by_id)
    REFERENCES users (user_id);

-- Remove foreign keys
ALTER TABLE orders DROP FOREIGN KEY FK_orders_user_id;
ALTER TABLE orders DROP FOREIGN KEY FK_orders_created_by_id;
ALTER TABLE orders DROP FOREIGN KEY FK_orders_updated_by_id;
