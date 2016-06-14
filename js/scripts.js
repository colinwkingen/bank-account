function Account(userName, userInitialD, depositAmount, withdrawalAmount) {
  this.userName = userName;
  this.userInitialD = userInitialD;
  this.depositAmount = depositAmount;
  this.withdrawalAmount = withdrawalAmount;
  this.balanceTotal = 0;
}

Account.prototype.balanceCalculator  = function() {
  debugger;
  if (isNaN(this.depositAmount) === true) {
    this.depositAmount = 0;
  } else if (isNaN(this.withdrawalAmount) === true) {
    this.withdrawalAmount = 0;
  } else if (isNaN(this.userInitialD) === true) {
    this.userInitialD = 0;
  }

  this.balanceTotal +=  this.userInitialD;
  this.balanceTotal +=  this.depositAmount;
  this.balanceTotal -=  this.withdrawalAmount;
}

$(document).ready(function()  {
  $("#register-account").submit(function(event) {
    event.preventDefault();
    var userName = $("#userName").val();
    var userInitialD = parseInt($("#userInitialD").val());
    var depositAmount = parseInt($("#depositAmount").val());
    var withdrawalAmount = parseInt($("#withdrawalAmount").val());

    var newAccount = new Account(userName, userInitialD, depositAmount, withdrawalAmount);
    newAccount.balanceCalculator();
    $("#balance").html("<h3>" + newAccount.balanceTotal + "</h3>");
    alert(userInitialD);
  });
});
