const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/book/list", async (req, res) => {
    const data = await prisma.book.findMany();
    res.send({ data: data });
});
app.post("/book/create", async (req, res) => {
    const data = req.body;
    const result = await prisma.book.create({
        data: data
    });

    res.send({ result: result });
});
app.post("/book/createManual", async (req, res) => {
    const result = await prisma.book.create({
        data: {
            isbn: "1002",
            name: "PHP",
            price: 850
        }
    });

    res.send({ result: result });
})

app.get("/", (req, res) => {
    res.send("hello world");
})
app.get("/hello/:name", (req, res) => {
    res.send("hello " + req.params.name);
})
app.get("/hi/:name/:age", (req, res) => {
    const name = req.params.name;
    const age = req.params.age;

    res.send("name = " + name + " age = " + age);
})
app.post("/hello", (req, res) => {
    res.send(req.body);
})
app.put("/myPut", (req, res) => {
    res.send(req.body);
})
app.delete("/myDelete/:id", (req, res) => {
    res.send("my delete id =" + req.params.id);
})
app.listen(3001);