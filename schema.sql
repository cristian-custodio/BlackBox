-- drops bank database if it alreadys exists
DROP DATABASE IF EXISTS bank;
-- creates a database called bank
CREATE DATABASE bank;

-- uses the database bank
USE bank;

-- creates a table called checking
CREATE TABLE checking (
  -- creates an id column that will auto increment and cannot be null
  id INT AUTO_INCREMENT NOT NULL,
  -- creates an open_date column where the default will timestamp the time the
  -- account is created
  open_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  --  creates a first_name column that stores the users first name
  first_name VARCHAR(25) NOT NULL,
  -- creates a last_name column that stores the users last name
  last_name VARCHAR(25) NOT NULL,
  -- creates a checking account number
  account_num INT(9) NOT NULL,
  -- shows the checking account balance with decimals
  balance DECIMAL(12,2) NOT NULL,
  -- references the id as the primary key
  PRIMARY KEY(id)
);

-- creates a table called savings
CREATE TABLE savings (
  -- creates an id column that will auto increment and cannot be null
  id INT AUTO_INCREMENT NOT NULL,
  -- creates an open_date column where the default will timestamp the time the
  -- account is created
  open_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  -- creates a first_name column that stores the users first name
  first_name VARCHAR(25) NOT NULL,
  -- creates a last_name column that stores the users last name
  last_name VARCHAR(25) NOT NULL,
  -- creates a savings account number
  account_num INT(10) NOT NULL,
  -- shows the savings account balance with decimals
  balance DECIMAL(12,2) NOT NULL,
  -- references the id as the primary key
  PRIMARY KEY(id)
);

-- creates a table called transactions
CREATE TABLE transactions (
  -- creates an id column that will auto increment and cannot be null
  id INT AUTO_INCREMENT NOT NULL,
  -- creates an open_date column where the default will timestamp the time the
  -- account is created
  date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  -- creates a first_name column that stores the first name of a user during a
  -- new transaction
  first_name VARCHAR(25) NOT NULL,
  -- creates a last_name column that stores the last name of a users during a
  -- new transaction
  last_name VARCHAR(25) NOT NULL,
  -- shows the amount of the transaction
  trans_amount DECIMAL(12,2) NOT NULL,
  -- shows the account the transaction was applied to
  account_type VARCHAR(8) NOT NULL,
  -- references the id as the primary key
  PRIMARY KEY(id)
);

-- data for checking accounts
INSERT INTO checking (open_date, first_name, last_name, account_num, balance)
VALUES ("2016-03-12 13:00:00", 'John', 'Smith', 123456789, 1000);

-- data for savings accounts
INSERT INTO savings (open_date, first_name, last_name, account_num, balance)
VALUES ("2016-03-13 13:00:00", 'John', 'Smith', 1234567890, 1000000000);

-- data for all transactions
INSERT INTO transactions (date_time, first_name, last_name, trans_amount, account_type)
VALUES ("2016-03-14 13:01:34", 'John', 'Smith', 239.54, 'Savings');
