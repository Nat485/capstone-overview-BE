DROP DATABASE IF EXISTS gfrecipes_dev;

\c gfrecipes_dev;

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    creation_date INT,
    vegan BOOLEAN
    recipe_type TEXT 
    
);

