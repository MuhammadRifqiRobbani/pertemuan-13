// Import Express
const express = require("express");

// buat object express
const app = express()

// definisikan route
const router = require(",/routes/api.js");
app.use(router)


// definisikan port
app.listen(3000, () => {
    console.log("server running at http://localhost:3000")
});