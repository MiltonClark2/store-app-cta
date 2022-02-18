DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS cryptos;

CREATE TABLE cryptos (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    image TEXT NOT NULL,
    symbol TEXT NOT NULL,
    price INTEGER DEFAULT 0,
    own_shares BOOLEAN
);
