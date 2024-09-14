const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const userController = require("./controllers/UserController.js");
const foodTypeController = require("./controllers/FoodTypeController.js")
const foodSizeController = require("./controllers/FoodSizeController.js");
const FoodSizeController = require("./controllers/FoodSizeController.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.delete("/api/foodSize/remove/:id", (req, res) => foodSizeController.remove(req, res));
app.get("/api/foodSize/list", (req, res) => foodSizeController.list(req, res));
app.post("/api/foodSize/create", (req, res) => foodSizeController.create(req,res));
app.put("/api/foodType/update", (req, res) => foodTypeController.update(req, res));
app.delete("/api/foodType/remove/:id", (req, res) => foodTypeController.remove(req, res));
app.get("/api/foodType/list", (req, res) => foodTypeController.list(req, res));
app.post("/api/foodType/create", (req, res) => foodTypeController.create(req, res));
app.post("/api/user/signIn", (req, res) => userController.sigin(req, res));

app.listen(3000, () => {
    console.log("API Server Running ...");
})