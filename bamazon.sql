DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    product_name TEXT NOT NULL,
    department_name TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    quantity DECIMAL (10.2) NOT NULL,
    PRIMARY KEY (id)
);


-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Hangers", "Home", 6.00, 10);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Tooth Brush", "Personal Care", 3.49, 8);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Sneakers", "Shoes", 35.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Jacket", "Women's Clothing", 62.99, 3);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Desk", "Furniture", 150, 2);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Hair Brush", "Personal Care", 8.99, 6);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Calculator", "Technology", 10, 10);

INSERT INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Printer", "Technology", 52.99, 4);

 Insert INTO products (product_name, department_name, price, stock_quanity)
VALUES ("Shampoo", "Personal Care", 2.99, 20);