//Business logic
function BankAccount(name, balance){
  this.name = name,
  this.balance = balance
}

BankAccount.prototype.addMoney = function(value){
  if (!isNaN(value)) {
    this.balance += value;
  }
}

BankAccount.prototype.removeMoney = function(value){
  if (!isNaN(value)) {
    this.balance -= value;
  }
}


//UI logic
function showBalance(){
  $("#output").text(bankAccount.balance);
}

function enableDepositWithdraw(){
  $(".disable").prop("disabled", false)
}

function registrationError(){
  $(".input").append("<p class=\"error\">Please enter a name and initial deposit.</p>")
}

function removeErrors(){
  $(".error").each(function (){
    $(this).remove();
  });
}

$(document).ready(function(){
  $("form#registration").submit(function(event) {
    event.preventDefault();
    removeErrors();
    if ($("input#name").val().length > 0 && $("input#initial-deposit").val().length > 0) {
      let nameInput = $("input#name");
      let initialDepositInput = $("input#initial-deposit");
      inputtedName = nameInput.val();
      inputtedDeposit = parseInt(initialDepositInput.val());
      nameInput.val("");
      initialDepositInput.val("")
      bankAccount = new BankAccount(inputtedName, inputtedDeposit);
      showBalance();
      $("#output").show();
      enableDepositWithdraw();
    } else {
      registrationError();
    }
    $("#deposit").click(function (){
      let dollarAmountInput = $("#dollar-amount");
      let depositAmount = parseInt(dollarAmountInput.val());
      $(dollarAmountInput).val("")
      bankAccount.addMoney(depositAmount);
      showBalance();
    });
    $("#withdraw").click(function (){
      let dollarAmountInput = $("#dollar-amount");
      let withdrawAmount = parseInt(dollarAmountInput.val());
      dollarAmountInput.val("")
      bankAccount.removeMoney(withdrawAmount);
      showBalance();
    });
  });
});