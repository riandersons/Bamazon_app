-- DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price decimal(5,2),
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pencil", "office_supplies", .25, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("plate", "house_wares", 2.50, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pants", "clothing", 25, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shirt", "clothing", 19, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("motor_oil", "automotive", 8, 32);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("paper", "office_supplies", 5.25, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gloves", "clothing", 12, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("book", "office_supplies", 5, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("topGun_dvd", "electronics", 4, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("60inTV", "electronics", 525, 5);

