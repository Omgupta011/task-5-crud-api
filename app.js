const express = require("express");
const app = express();

app.use(express.json());

let students = [];

app.post("/students", (req, res) => {

    const student = {
        name: req.body.name,
        age: req.body.age
    };

    students.push(student);

    res.send("Student Added Successfully");

});

app.get("/", (req, res) => {
    res.send("Student API Running");
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.put("/students/:id", (req, res) => {

    const id = req.params.id;

    students[id] = {
        name: req.body.name,
        age: req.body.age
    };

    res.send("Student Updated Successfully");

});

app.delete("/students/:id", (req, res) => {

    const id = req.params.id;

    students.splice(id, 1);

    res.send("Student Deleted Successfully");

});

app.listen(3000, () => {
    console.log("Server Running");
});