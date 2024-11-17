const companies = [
    { id: 1, name: 'Tech Innovators', workforce: 25 },
    { id: 2, name: 'Green Energy Co.', workforce: 40 },
    { id: 3, name: 'Auto Drive Ltd.', workforce: 10 }
  ];
  
  const company = companies.find(company => company.workforce > 30);
  
  console.log(company);
  