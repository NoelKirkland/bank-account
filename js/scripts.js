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
      inputName = $("input#name").val();
      inputDeposit = parseInt($("input#initial-deposit").val());
      $("input#name").val("");
      $("input#initial-deposit").val("")
      bankAccount = new BankAccount(inputName, inputDeposit);
      showBalance();
      enableDepositWithdraw();
    } else {
      registrationError();
    }
    $("#deposit").click(function (){
      let depositAmount = parseInt($("#dollar-amount").val());
      $("#dollar-amount").val("")
      bankAccount.addMoney(depositAmount);
      showBalance();
    });
    $("#withdraw").click(function (){
      let withdrawAmount = parseInt($("#dollar-amount").val());
      $("#dollar-amount").val("")
      bankAccount.removeMoney(withdrawAmount);
      showBalance();
    });
  });
});