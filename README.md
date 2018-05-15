# project-hefailsme

## Running Locally

1. Make sure you have [Node.js](http://nodejs.org/) and the [Heroku CLI](https://cli.heroku.com/) installed.

2. Clone repo and install dependecies

```sh
$ git clone https://github.com/MediaDUK/project-hefailsme.git && cd project-hefailsme
$ npm install
$ npm run dev
```

3. Open Browser to [localhost:5000](http://localhost:5000/)

Requirements:

1. Use a Node and Express Web Server
2. Be backed by a MySQL Database an ORM (not necessarily Sequelize)
3. Have both GET and POST routes for retrieving and adding new data
4. Be deployed using Heroku (with Data)
5. Utilize at least one new library, package, or technology that we haven’t discussed
6. Have a polished frontend / UI
7. Have folder structure that meets MVC Paradigm
8. Meet good quality coding standards (indentation, scoping, naming)
9. Must not expose sensitive API key information on the server, see Protecting-API-Keys-In-Node.md

Suggestions:

1. Incorporate Basic Testing Framework, see Project Suggestions;
2. Use Handlebars for Server-Side Templating
3. Incorporate Authentication (JSON Web Tokens, Sessions, Etc.)
4. Use an existing public dataset to power the database
5. Create a migration strategy for sharing data across team members.

Tour Data:
```
INSERT INTO Tours (id, date, venue, city, state)
VALUES (1,"1.17.14","BOMBAY","VENTURA", "CA"),
(2,"9.20.14","BOMBAY","VENTURA", "CA"),
(3,"4.20.15","SLIDEBAR","FULLERTON", "CA"),
(4,"8.10.15","DIPIAZZAS","LONG BEACH", "CA"),
(5,"8.14.15","LANCASTER MOOSE LODGE","LANCASTER", "CA"),
(6,"9.24.15","PROGRAMME","FULLERTON", "CA"),
(7,"9.25.15","BONNERHAUS","NORTH HOLLYWOOD","CA"),
(8,"4.16.16","LA DOLCE VITA","OXNARD", "CA"),
(9,"12.28.16","4TH ST VINE","LONG BEACH", "CA");
```
