const employees = [
  { name: "Alice", salary: 50000, experience: 3 },
  { name: "Bob", salary: 60000, experience: 5 },
  { name: "Charlie", salary: 45000, experience: 2 },
];

const newArray = employees.map((ele) => {
  return {
    name: ele.name,
    salary: ele.salary,
    experience: ele.experience,
    totalSalary: ((ele.salary * 5) / 100) * ele.experience + ele.salary,
  };
});
