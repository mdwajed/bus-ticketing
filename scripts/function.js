function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    this.style.backgroundColor = "#1DD100";
  });
});

let selectedSeats = 0;
const seatPrice = 550; // Price per seat
let totalPrice = 0;
let grandTotal = 0;
let seatsLeft = 40; // Total available seats

function selectSeat(seatId) {
  if (selectedSeats < 4) {
    document.getElementById(seatId).classList.toggle("selected");
    if (document.getElementById(seatId).classList.contains("selected")) {
      selectedSeats++;
      totalPrice += seatPrice;
      seatsLeft--;
    } else {
      selectedSeats--;
      totalPrice -= seatPrice;
      seatsLeft++;
    }
    updatedSelectedSeats();
    updateSeatLeft();
    updateTotalPrice();
  } else {
    alert("You can select a maximum of 4 seats.");
  }
}

function updateTotalPrice() {
  document.getElementById("totalPrice").innerText = "BDT " + totalPrice;
  updateGrandTotal();
}

function applyCoupon() {
  const couponCode = document.getElementById("appliedCoupon").value;
  let discountPercentage = 0;

  if (couponCode === "NEW15") {
    discountPercentage = 15;
  } else if (couponCode === "Couple20") {
    discountPercentage = 20;
   
  } else {
    alert("Invalid coupon code!");
    return;
  }
  const grandTotal = totalPrice - (totalPrice * discountPercentage) / 100;
  document.getElementById("grandTotal").innerText = "BDT " + grandTotal;

    //const Element=document.getElementById('discountCoupon');
    //Element.classList.add('hidden');
  }
  function apply(){
    const Element=document.getElementById('discountCoupon');
    Element.classList.add('hidden');
  }

function updateSeatLeft() {
  document.getElementById("seatsLeft").innerText = seatsLeft;
}

function updateGrandTotal() {
  document.getElementById("grandTotal").innerText = "BDT " + grandTotal;
}
function updatedSelectedSeats() {
  document.getElementById("selectedSeats").innerText = selectedSeats;
}

//
