// Step 1: Create the object bankSbi
const bankSbi = {
  customerName: "John",
  mobileNumber: 9876382736,
  accountNumber: 235562,
  availableBalance: 40933,
};

// Step 2: Create the object bankLocation
const bankLocation = {
  street: "raddostreet",
  city: "amravati",
  pin: 444603,
  isfc: "sbin0000437",
};

// Step 3: Clone step 1 and step 2 objects
const cloneBankSbi = Object.assign({}, bankSbi);
const cloneBankLocation = Object.assign({}, bankLocation);

console.log(
  `Customer Name : ${cloneBankSbi.customerName} , Mobile No : ${cloneBankSbi.mobileNumber} , Account Number :${cloneBankSbi.accountNumber} , Available Balance :${cloneBankSbi.availableBalance}`
);

console.log(
  `Street : ${cloneBankLocation.street} , City : ${cloneBankLocation.city} , PinCode : ${cloneBankLocation.pin} , ISFC Code : ${cloneBankLocation.isfc}`
);

// Step 4: Create rateOfInterest object
const rateOfInterest = {
  homeLoanInterest: "8.5 %",
  personalLoanInterest: "10.5 %",
  dueInterest: "14 %",
};

// Step 5: Merge step1, step2, step4
const sbiDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);

console.log(
  "----------------------------Merging the BANKSBI , BANKLOCATION , RateofInterest----------------------------"
);
console.log(sbiDetails);

// Step 6: Traverse this merged object
console.table(sbiDetails);

console.log("----------------Traversing the SBIDETAILS----------------");
for (const key in sbiDetails) {
  console.log(`${key} : ${sbiDetails[key]}`);
}
