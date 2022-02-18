DROP TABLE IF EXISTS cryptos;

CREATE TABLE cryptos (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    image TEXT,
    description TEXT,
    price NUMERIC DEFAULT 0,
    rating NUMERIC DEFAULT 0,
    featured BOOLEAN
);
