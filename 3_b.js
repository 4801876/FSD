
const companies = [
    { id: 1, name: "Tech Solutions", workforce: 25 },
    { id: 2, name: "Innovatech", workforce: 50 },
    { id: 3, name: "FutureSoft", workforce: 15 },
    { id: 4, name: "CodeFactory", workforce: 40 },
];


const company = companies.find(company => company.workforce > 30);


if (company) {
    console.log("Company with workforce greater than 30:", company);
} else {
    console.log("No company found with workforce greater than 30.");
}
