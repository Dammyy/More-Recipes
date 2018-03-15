# <h1>More Recipes App</h1>
<div class="badges">
<img src="https://travis-ci.org/Dammyy/More-Recipes.svg?branch=develop"></img>
<a href='https://coveralls.io/github/Dammyy/More-Recipes?branch=develop'><img src='https://coveralls.io/repos/github/Dammyy/More-Recipes/badge.svg?branch=develop' alt='Coverage Status' /></a>
<a href="https://codeclimate.com/github/Dammyy/More-Recipes/maintainability"><img src="https://api.codeclimate.com/v1/badges/37905cc8d0d99859c45a/maintainability" /></a>
</div>

More Recipe allows users to post amazing recipes online. Users can view, post, comment and even rate these recipes.

## More Recipes App UI Template
The gh-pages branch contains the template UI for the More-Recipe-App

## Getting Started
Before installing, download and install Node.js.<br>
Installation is done using the npm install command:

## Install
+ Clone the repository git clone https://github.com/Dammyy/More-Recipes.git
+ Enter directory cd more-recipes
+ Install by running npm install 
+ Migrate your database using sequelize db:migrate on the command line
+ Run npm run start-client to start the client side application
+ Run npm run start:dev to start the server side

## User Authentication
Users are authenticated and validated using JSONWebTokens


## Features
+ Signup and sign in to the application
+ Publish a recipe
+ Update published recipes
+ Delete recipe
+ View the details of a recipe
+ View all recipes in the catalog
+ View the most popular recipes
+ Upvote or downvote a recipe
+ Favorite a recipe
+ Post Review for a recipe

## API Documentation
The full API documentation can be viewed here https://more-recipes-dammyy.herokuapp.com/api-docs/

## Technologies
+ Nodejs: a JavaScript runtime built on Chrome's V8 JavaScript engine.
+ Express js: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
+ Sequelize: a promise-based ORM for Node.js and io.js.
+ PostgreSQL: a powerful, open source object-relational database system.
+ React: a JavaScript library for building user interfaces
+ Redux: a predictable state container for JavaScript apps.
+ Webpack: a static module bundler for modern JavaScript applications

## Contributions
To learn about how to contribute please click here https://github.com/Dammyy/More-Recipes/blob/feature/155881525/implement-feedback/contributing.md

## Run Test
```bash
npm run test
```