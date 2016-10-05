
// Store employee information in an array

var employees = [
    {
    "name" : "Rajesh Roy",
	"age" : 30,
	"salary" : "Rs10000",
		"address" :{
		"city" : "Kolkata",
		"state" : "West Bengal",
		"pinCode" : 700026
		},
    },
	
    {
    "name" : "Amit Roy",
	"age" : 35,
	"salary" : "Rs15000",
		"address" :{
		"city" : "Mumbai",
		"state" : "Maharashtra",
		"pinCode" : 1001
		},
    },
	
    {
    "name" : "Raja Sen",
	"age" : 25,
	"salary" : "Rs12000",
		"address" :{
		"city" : "UP",
		"state" : "Jharkhand ",
		"pinCode" : 2002
		},
    },
	
    {
    "name" : "Pradip De",
	"age" : 45,
	"salary" : "Rs25000",
		"address" :{
		"city" : "Delhi",
		"state" : "Delhi",
		"pinCode" : 3003
		},
    },
	
    {
    "name" : "Kaustabh Bhattacharjee",
	"age" : 35,
	"salary" : "Rs15000",
		"address" :{
		"city" : "Kolkata",
		"state" : "West Bengal",
		"pinCode" : 700026
		},
    },
];
  
  //Print the employee properties in console
  
  console.log(employees[4].name);
  console.log(employees[4].age);
  console.log(employees[4].salary);
  console.log(employees[4].address.city);
  console.log(employees[4].address.state);
  console.log(employees[4].address.pinCode);