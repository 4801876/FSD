const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let employees = [];

app.post('/employees', (req, res) => {
  const employee = req.body;
  employees.push(employee);
  res.status(201).send(employee);
});

app.put('/employees/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedEmployee = req.body;
  const index = employees.findIndex(emp => emp.id === id);
  
  if (index !== -1) {
    employees[index] = { ...employees[index], ...updatedEmployee };
    res.status(200).send(employees[index]);
  } else {
    res.status(404).send({ message: 'Employee not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/*
curl -X POST -H "Content-Type: application/json" -d '{"id":1,"name":"Alice Smith","position":"Software Engineer"}' http://localhost:3000/employees
*/

/*
curl -X PUT -H "Content-Type: application/json" -d '{"name":"Alice Johnson","position":"Senior Software Engineer"}' http://localhost:3000/employees/1
*/