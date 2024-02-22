DROP DATABASE IF EXISTS gfrecipes_dev;

\c gfrecipes_dev;

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    recipe_name TEXT NOT NULL,
    creation_date INT,
    vegan BOOLEAN
    recipe_type TEXT 
    
);

