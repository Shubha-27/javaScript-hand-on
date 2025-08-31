// 10-classAssigA.js
// Assignment with one-line details for both Vehicle & College

/* -------------------- VEHICLE CLASS -------------------- */
class Vehicle {
  constructor(make, model, year, color, registrationNo) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.registrationNo = registrationNo;
  }

  // One-line details
  logDetails() {
    console.log(
      `Vehicle → Make: ${this.make} | Model: ${this.model} | Year: ${this.year} | Color: ${this.color} | RegNo: ${this.registrationNo}`
    );
  }
}

// Create 5 vehicles
const vehicle1 = new Vehicle("Maruti", "Swift", 2018, "Red", "MH-13-AB-1234");
const vehicle2 = new Vehicle("Hyundai", "i20", 2020, "Blue", "MH-13-BC-5678");
const vehicle3 = new Vehicle("Tata", "Nexon", 2021, "White", "MH-13-CD-9012");
const vehicle4 = new Vehicle("Kia", "Seltos", 2019, "Black", "MH-13-DE-3456");
const vehicle5 = new Vehicle("Honda", "City", 2017, "Silver", "MH-13-EF-7890");

// Log vehicle details
console.log("------------------------------------- Vehicle Objects ----------------------------------");
vehicle1.logDetails();
vehicle2.logDetails();
vehicle3.logDetails();
vehicle4.logDetails();
vehicle5.logDetails();


/* -------------------- COLLEGE CLASS -------------------- */
class College {
  constructor(name, city, establishedYear, courses) {
    this.name = name;
    this.city = city;
    this.establishedYear = establishedYear;
    this.courses = courses;
  }

  // One-line details
  display() {
    const coursesList = Array.isArray(this.courses) ? this.courses.join(", ") : this.courses;
    console.log(
      `College → Name: ${this.name} | City: ${this.city} | Established: ${this.establishedYear} | Courses: ${coursesList}`
    );
  }
}

// Create 4 colleges
const college1 = new College("Sangameshwar College", "Solapur", 1966, ["BSc", "BCom", "BA"]);
const college2 = new College("Modern Arts College", "Pune", 1975, ["BA", "BCA", "BBA"]);
const college3 = new College("Tech Institute", "Mumbai", 1998, ["BTech", "MTech"]);
const college4 = new College("Commerce Academy", "Nashik", 1985, ["BCom", "MCom", "BBA"]);

// Log college details
console.log("------------------------------------ College Objects ------------------------------------");
college1.display();
college2.display();
college3.display();
college4.display();
