const donateBtnNoakhali = document.getElementById("donateBtnNoakhali");
const donateBtnFeni = document.getElementById("donateBtnFeni");
const donateBtnMovement = document.getElementById("donateBtnMovement");

donateBtnNoakhali.addEventListener("click", () =>
  donateNow("balanceNoakhali", "donationAmountNoakhali", "myBalance")
);

donateBtnFeni.addEventListener("click", () =>
  donateNow("balanceFeni", "donationAmountFeni", "myBalance")
);

donateBtnMovement.addEventListener("click", () =>
  donateNow("balanceMovement", "donationAmountMovement", "myBalance")
);

const donationBtn = document.getElementById("donationBtn");
const historyBtn = document.getElementById("historyBtn");

donationBtn.addEventListener("click", () => {
  toggleElements('donation', 'history');
  toggleBtnColor("donationBtn", "historyBtn");
});

historyBtn.addEventListener("click", () => {
  toggleElements('history', 'donation');
  toggleBtnColor("historyBtn", "donationBtn");
});

