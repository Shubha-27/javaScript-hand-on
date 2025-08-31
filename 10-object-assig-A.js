let professor = {
    firstName: "John",
    lastName: "Abruszi",
    age: 49,
    salary: 90000,
    college: "COEP",
    degrees: {
        engineering: "CSS",
        PHD: "Adv Computing",
        Diploma: "Computer Science"
    },
    certificates: [
        "Hacker Rank Participation",
        "Certificates in IFE course",
        "Certificate in Adv Programming"
    ]
};

// Add new property
console.log("----- ADDING NEW PROPERTY totalExperience:'14 years' -----");
professor.totalExperience = "14 years";
console.log(professor);

// ✅ small compact table
console.table({
    firstName: professor.firstName,
    lastName: professor.lastName,
    age: professor.age,
    salary: professor.salary,
    college: professor.college,
    totalExperience: professor.totalExperience
});

// Modify properties
console.log("---------- Modifying or Updating the previous properties age, college, engineering ----------");
professor.age = 55;
professor.college = "VJTI";
professor.degrees.engineering = "Information Technology";
console.log(professor);

// ✅ small compact table again
console.table({
    firstName: professor.firstName,
    lastName: professor.lastName,
    age: professor.age,
    salary: professor.salary,
    college: professor.college,
    totalExperience: professor.totalExperience
});

// Add certificate at index 2
console.log("---------- Adding new element 'Oracle Certificate' at 2 index of certificates array ----------");
professor.certificates.splice(2, 0, "Oracle Certified");
console.log("Certificates =", professor.certificates.join(","));

// Traverse certificates
console.log("---------- Traversing Certificate Array ----------");
for (let cert of professor.certificates) {
    console.log(cert);
}
