-- Create indexes
CREATE UNIQUE INDEX IDX_products_unit_price ON products(unit_price);

-- Remove index
DROP INDEX IDX_products_unit_price ON products;

-- Create UNIQUE indexes
CREATE UNIQUE INDEX UQ_users_username ON users(username);
CREATE UNIQUE INDEX UQ_users_email ON users(email);

CREATE UNIQUE INDEX UQ_products_sku ON products(sku);

-- Remove unique indexes
DROP INDEX UQ_users_username ON users;
DROP INDEX UQ_users_email ON users;
