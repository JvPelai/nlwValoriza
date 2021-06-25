import "reflect-metadata";
import express from "express";
import "./database";

const app = express();

/**
 * Tipos de parâmetros:
 * Route params => localhost:3000/products/productId
 * Query Params => localhost:3000/products?name=keyboard&description=descrpition&...
 * Body Params => {
 *  "name": "keyboard",
 *  "description": "good keyboard"
 * }
 */

app.get("/test", (request, response) => {
    return response.send("Hello!");
})

app.post("test-post", (request, response) => {
    return response.send(("Hello World! POST"));
})

app.listen(3000, () => console.log("listening on port 3000"));