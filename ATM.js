let balance = 10000;

// Choose operation
let choice = prompt(
  "Select an operation:\n1. Deposit\n2. Withdraw\n3. Check Balance"
);

choice = Number(choice);

if (choice === 1) {
  // Deposit
  let depositAmount = Number(prompt("Enter amount to deposit:"));

  if (depositAmount > 0) {
    balance += depositAmount;
    console.log("Deposit successful!");
    console.log("Updated Balance: ₹" + balance);
  } else {
    console.log("Invalid deposit amount.");
  }

} else if (choice === 2) {
  // Withdraw
  let withdrawAmount = Number(prompt("Enter amount to withdraw:"));

  if (withdrawAmount > 0 && withdrawAmount <= balance) {
    balance -= withdrawAmount;
    console.log("Withdrawal successful!");
    console.log("Updated Balance: ₹" + balance);
  } else {
    console.log("Insufficient balance or invalid amount.");
  }

} else if (choice === 3) {
  // Check balance
  console.log("Current Balance: ₹" + balance);

} else {
  console.log("Invalid option selected.");
}


// let balance = 10000;

// function atmAnalyse(choice) {
//     switch (choice) {
//         case 1:
//             let deposit = 5000;
//             balance += deposit;
//             console.log("Deposited successfully");
//             console.log("Updated balance: " + balance);
//             break;

//         case 2:
//             let withdraw = 10000;
//             if (withdraw <= balance) {
//                 balance -= withdraw;
//                 console.log("Amount withdrawn successfully");
//                 console.log("Remaining balance: " + balance);
//             } else {
//                 console.log("Insufficient balance");
//             }
//             break;

//         case 3:
//             console.log("Current account balance: " + balance);
//             break;

//         default:
//             console.log("Invalid option chosen");
//     }
// }

// // function calls
// atmAnalyse(1);
// atmAnalyse(2);
// atmAnalyse(3);
