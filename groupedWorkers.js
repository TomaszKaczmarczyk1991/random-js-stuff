const workers = [
    { name: 'Tomek', age: 33 },
    { name: 'Magda', age: 25 },
    { name: 'Adrian', age: 24 },
    { name: 'Konrad', age: 29 },
    { name: 'Damian', age: 29 },
    { name: 'Karolina', age: 33 },
    { name: 'Wioletta', age: 33 },
    { name: 'Agnieszka', age: 24 },
    
];

const result = workers.reduce((groupedPeople, worker) => {
  const age = worker.age;
  if (groupedPeople[age] == null) {
    groupedPeople[age] = [];
  }
  groupedPeople[age].push(worker);
  
  return groupedPeople;
}, {});

console.log(result);
