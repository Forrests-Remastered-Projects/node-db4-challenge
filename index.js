const express = require("express");
const server = express();
server.use(express.json());
const recipesRouter = require("./recipes/recipes-router");
server.use("/recipes", recipesRouter);
const port = process.env.PORT || 3123;
server.listen(port, console.log(`Server running on ${port}`));
