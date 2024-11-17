const companies = [
    { id: 1, name: 'Tech Innovators', workforce: 25 },
    { id: 2, name: 'Green Energy Co.', workforce: 40 },
    { id: 3, name: 'Auto Drive Ltd.', workforce: 10 }
  ];
  
 
  function findCompanyWithWorkforceGreaterThan30() {
    const company = companies.find(company => company.workforce > 30);
    return company;
  }
  

  const company = findCompanyWithWorkforceGreaterThan30();
  
  if (company) {
    console.log(`Company with workforce greater than 30: ${company.name} (ID: ${company.id}, Workforce: ${company.workforce})`);
  } else {
    console.log('No company found with a workforce greater than 30.');
  }
  