const express = require("express");
const app = express();

app.use(express.json());

let students = [];

let nextId = 1;

app.post("/students", (req, res) => {

    const student = {
    id: nextId++,
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

    const id = Number(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).send("Student not found");
    }

    student.name = req.body.name;
    student.age = req.body.age;

    res.send("Student Updated Successfully");

});

app.delete("/students/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).send("Student not found");
    }

    students.splice(index, 1);

    res.send("Student Deleted Successfully");

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});