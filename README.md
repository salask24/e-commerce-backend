# E-commerce Backend

## Description

Build the back end (db schema and REST API) for an e-commerce site. Used a working Express.js API and configure it to use Sequelize to interact with a MySQL database.


## User Story

AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies


## Installation

- Clone the repo
- Install dependencies with 'npm -i'
- Run 'mysql -u root -p' (username and pw)
- Run 'source db/schema.db;' 
- Run 'exit;' to exit the MySQL shell
- Run 'npm run seed' to seed the database
- Run 'npm start' to run the server 
- Open insomnia to test!


## Packages
- express
- dotenv
- mysql2
- sequelize


## Endpoints

### Categories

Get all categories: GET /api/categories
Get one category: GET /api/categories/:id
Create a category: POST /api/categories/:id
Update a category: PUT /api/categories/:id
Delete a category: DELETE /api/categories/:id

### Products

Get ALL products: GET /api/products
Get one product by id: GET /api/products/:id
Create a product: POST /api/products/:id
Update a product: PUT /api/products/:id
Delete a product: DELETE /api/products/:id

### Tags

Get ALL tags: GET /api/tags
Get one tag by id: GET /api/tags/:id
Create a tag: POST /api/tags/:id
Update a tag: PUT /api/tags/:id
Delete a tag: DELETE /api/tags/:id


## Questions
If you have questions, email me at salask.0104@gmail.com or reach out on GitHub @salask24.