const http = require("http");
const express = require("express");
// const { hostname } = require("os");
// const app = require("./app");

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(post, () => {
    console.log("Started on port 3000");
})