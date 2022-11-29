const billAmount = document.getElementById("#bill-amount");
const cashGiven = document.getElementById("#cash-given");
const checkButton = document.getElementById("#check-button");
const message = document.getElementById("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
  hideMessage();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("Do you wanna wash Dishes?");
    }
  } else {
    showMessage("Invalid Bill Amount");
  }
});

function calculateChange(amountToBeReturned) {
  for (let i = 0; i < availableNotes.length; i++) {
    const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

    amountToBeReturned = amountToBeReturned % availableNotes[i];

    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideMessage() {
  message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}

// const billAmount = document.querySelector("#bill-amount");
// const cashGiven = document.querySelector("#cash-given");
// const checkButton = document.querySelector("#check-btn");
// const msg = document.querySelector("#error-msg");
// const noOfNotes = document.querySelectorAll(".notes-num");

// const notesAvail = [2000,500,100,20,10,5,1];

// checkButton.addEventListener("click", function validateBillAndCashAmount(){
//     hideMsg();
//     if(billAmount.value > 0){
//         if(cashGiven.value >= billAmount.value){
//             const returnAmount = cashGiven.value - billAmount.value;
//             changeCalculator(returnAmount);

//         }else{
//             showMsg("Do you wanna wash Dishes ?");

//         }
//     }else{
//         showMsg("Invalid Bill Amount");

//     }
// });

// function changeCalculator(returnAmount){
//     for(let i = 0; i < notesAvail.length; i++){
//         const numOfNotes = Math.trunc(returnAmount / notesAvail[i]);
//         returnAmount  %= notesAvail[i];
//         noOfNotes[i].innerText = numOfNotes;
//     }

// }

// function hideMsg(){
//     msg.style.display = "none";
// }

// function showMsg(msg){
//     message.style.display = "block";
//     message.innerText = msg;
// }
