const employees = [
    { id: 1, name: 'Alice', salary: 20000 },
    { id: 2, name: 'Bob', salary: 30000 },
    { id: 3, name: 'Charlie', salary: 25000 }
  ];
  
  function findEmployeeWithHighSalary() {
    const employee = employees.find(employee => employee.salary > 25000);
    return employee;
  }
  

  const employee = findEmployeeWithHighSalary();
  
  if (employee) {
    console.log(`Employee with salary greater than 25000: ${employee.name} (ID: ${employee.id}, Salary: ${employee.salary})`);
  } else {
    console.log('No employee found with a salary greater than 25000.');
  }
  