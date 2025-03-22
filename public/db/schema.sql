CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE Products (
    RecNumber INT AUTO_INCREMENT PRIMARY KEY,
    ID VARCHAR(10) UNIQUE NOT NULL,
    Name VARCHAR(50) NOT NULL,
    Description VARCHAR(150),
    Cost DECIMAL(10, 2) NOT NULL
);

INSERT INTO Products (ID, Name, Description, Cost) VALUES
('P001', 'Laptop', 'High-performance laptop', 999.99),
('P002', 'Headphones', 'Headphones', 199.99),
('P003', 'Smartphone', 'Latest-gen smartphone', 799.99),
('P004', 'Camera', 'Professional DSLR camera', 499.99),
('P005', 'Tablet', 'Lightweight tablet', 299.99);
