DROP DATABASE IF EXISTS gfRecipes_dev;

\c gfRecipes_dev;

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    creation_date INT,
    vegan BOOLEAN
    recipe_type TEXT
    
);

