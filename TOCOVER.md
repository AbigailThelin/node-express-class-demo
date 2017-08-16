# Topics to Cover

This is a list of topics that we'll be covering in today's lecture. Feel free to write notes as needed.

---

# HTTP Review and CRUD
-create, read, update, delete >> post, get put, delete

---

# What is Node.js?
-write js in our server side
-google chrome v8 engine

## What is NPM?
-node package manager
-maintain our dependencies
### NPM init -y
-creates your package.json
### NPM install
how you install packages
### Node Modules
-where all of the npm code(packages) are
-DO NOT PUSH TO GETHUB
### .gitignore
-Any listd file is ignored by git and not pushed
### package.json
-lists dependencies
-main property matches the file name
### package-lock.json
-keeps track of versions in the dependancy tree
## Yarn

---

# What is Express.js?
--framework for node.js


# Setting up a basic server with Express.js
-framework for node
## Endpoints
-app.METHOD(URL, HANDLER)
## Top-Level Middleware
-BodyPerser. DO NOT FORGET THIS
-always be at the top under the variables (TOP LEVEL)
-order matters
## req.body
-we used this with post today. 
-postman, body-raw-json
## req.params
-url parameters
-/:<name> >> property name
-req.params.<name> >> property value
## Using a controller
-keeps code clean
-require any needed files at top