DROP TABLE IF EXISTS tickets cascade;
CREATE TABLE tickets(
  id serial primary key,
  author VARCHAR(15),
  subject VARCHAR(50),
  issue VARCHAR(255),
  chatUrl VARCHAR(255),
  createdAt VARCHAR(100),
  archive BOOLEAN,
  status BOOLEAN
);

DROP TABLE IF EXISTS contacts cascade:
CREATE TABLE contacts(
  id serial primary key,
  firstname VARCHAR(15),
  lastname VARCHAR(50),
  email VARCHAR(100),
  phone VARCHAR(100),
  streetaddress VARCHAR(100),
  city VARCHAR(50),
  state VARCHAR(10),
  postalcode VARCHAR(50),
  country VARCHAR(100)
);
