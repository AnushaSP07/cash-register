const billamount = document.querySelector("#bill-amount");
const cashgiven = document.querySelector("#cash-given");
const checkbutton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availabelNote = [2000,500,200,100,50,20,10,1]

checkbutton.addEventListener("click" , function validateBillAmountAndCashAmount(){
    hideMessage();
    if(billamount.value > 0){
        if(cashgiven.value >= billamount.value){
            const amountToBeReturned = cashgiven.value - billamount.value;
            calculateChange(amountToBeReturned);

        }else{
            showMessage("cash should be equal or greater than bill amount");
        }

    }else{
        showMessage("Invalid amount");
    }
});

function calculateChange(amountToBeReturned){
    for(let i=0;i<availabelNote.length;i++){
        const numberOfNotes = Math.trunc(amountToBeReturned/availabelNote[i]);
        amountToBeReturned = amountToBeReturned % availabelNote[i];
        noOfNotes[i].innerText = numberOfNotes;

    }
}

function hideMessage(){
    message.style.display = "none";
}
function showMessage(){
    message.style.display = "block";
    message.innerText = "The bill amount should be greater than cash amount";
}