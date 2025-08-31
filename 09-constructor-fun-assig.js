// Step 1: Create constructor function
function Bank(bankName, location, ifscCode, branchCode) {
  this.bankName = bankName;
  this.location = location;
  this.ifscCode = ifscCode;
  this.branchCode = branchCode;
}

// Step 2: Create objects
let yesBank = new Bank("Yes Bank", "Pune", "YESB0001234", 1001);
let sbiBank = new Bank("SBI Bank", "Mumbai", "SBIN0005678", 1002);
let mahBank = new Bank("Maharashtra Bank", "Solapur", "MAHB0002468", 1003);
let axisBank = new Bank("Axis Bank", "Delhi", "AXIS0003456", 1004);

// Step 3: Add prototype properties
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

// Step 4: Display details with meaningful messages
console.log("===================================== Bank Details ===================================");
console.log(`Bank: ${yesBank.bankName} | Location: ${yesBank.location} | IFSC: ${yesBank.ifscCode} | Branch Code: ${yesBank.branchCode}`);
console.log(`Bank: ${sbiBank.bankName} | Location: ${sbiBank.location} | IFSC: ${sbiBank.ifscCode} | Branch Code: ${sbiBank.branchCode}`);
console.log(`Bank: ${mahBank.bankName} | Location: ${mahBank.location} | IFSC: ${mahBank.ifscCode} | Branch Code: ${mahBank.branchCode}`);
console.log(`Bank: ${axisBank.bankName} | Location: ${axisBank.location} | IFSC: ${axisBank.ifscCode} | Branch Code: ${axisBank.branchCode}`);

console.log("\n================================== Timings Information =============================");
console.log(`SBI Bank opens at ${sbiBank.openTime} and closes at ${sbiBank.closeTime}`);
console.log(`--------------------------------------------------------------------------`);
console.log(`Axis Bank is named "${axisBank.bankName}" and closes at ${axisBank.closeTime}`);
console.log(`--------------------------------------------------------------------------`);
console.log(`Yes Bank branch code is ${yesBank.branchCode} and it opens at ${yesBank.openTime}`);
console.log(`--------------------------------------------------------------------------`);
