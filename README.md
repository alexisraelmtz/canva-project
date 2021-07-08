# Canva Project – RockStars 6G 

---
### Team:
- Pamela Zoé Garcia [frontend] - [https://github.com/pamelazoe]
- Alex Israel Martinez [frontend] - [https://github.com/alexisraelmtz]
- Cristian Ramirez [backend] - [https://github.com/ImSeenOne]
- Omar Mancillas [backend] - [https://github.com/OmarMancillas]
---

### Project Scrum:

https://enroutesystems.atlassian.net/jira/software/projects/R6C/boards/17

---

## Set Up

### Install Requirements
- `git clone https://github.com/alexisraelmtz/canva-project.git`
- MySQL server
- mySQL server running on por `3306`
- Add a mysql DataBase named “crud-react-express”

e.g. Unix like systems:

  $ `sudo service mysql start`
  
  $ `sudo mysql -u root -p`
  
  mysql> `CREATE DATABASE 'crud-react-express';`
  
  TIP: Use escape characters (``)

----

#### /Frontend/ Directory
##### Before going Live:
Set up this installs.
- Yarn or Npm e.g `yarn install && yarn init`
- React e.g. `yarn add next react react-dom`

#### After:
Run server.
- `yarn dev`

And, browser the following server port:

  `http://localhost:3000/login`
Default port: `3000`

----

#### /Backend/ Directory
##### Before going Live:
Set up this installs.
- Yarn or Npm e.g `yarn install && yarn init`
- Add:
  
  * `@apollo/server`
  
  * `apollo-server graphql`

Run server.
- `yarn dev`

And, browser the following server port: 

  `http://localhost:3001/graphql`
  
Default port: `3001`
