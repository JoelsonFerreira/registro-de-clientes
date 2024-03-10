CREATE TABLE "clients" (
  "id" SERIAL PRIMARY KEY, 
  "email" VARCHAR(255) NOT NULL, 
  "name" VARCHAR(255) NOT NULL, 
  "phone" VARCHAR(255) NOT NULL
);

ALTER TABLE "clients"
ADD column "coordX" VARCHAR(128), 
ADD column "coordY" VARCHAR(128);