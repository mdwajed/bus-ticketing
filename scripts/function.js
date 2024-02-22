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
    this.style.backgroundColor = "green";
  });
});
// // total price functional.
// let availableSeats = 40;
// let bookedSeats = 0;
// let seatPrice = 550; // Price per seat
// const maxSeats = 4; // Maximum number of seats allowed to be selected

// function selectSeat(seatId) {
//   const seatButton = document.getElementById(seatId);

//   if (!seatButton.classList.contains("selected")) {
//     if (bookedSeats < maxSeats) {
//       if (availableSeats > 0) {
//         availableSeats--;
//         bookedSeats++;
//         seatButton.classList.add("selected");
//         updateSeatsDisplay();
//       } else {
//         alert("No seats available!");
//       }
//     } else {
//       alert("You can only select up to 4 seats.");
//     }
//   } else {
//     availableSeats++;
//     bookedSeats;
//     seatButton.classList.remove("selected");
//     updateSeatsDisplay();
//   }
// }

// function updateSeatsDisplay() {
//   const availableSeatsElement = document.getElementById("availableSeats");
//   const bookedSeatsElement = document.getElementById("bookedSeats");
//   const totalPriceElement = document.getElementById("totalPrice");

//   availableSeatsElement.innerText = availableSeats;
//   bookedSeatsElement.innerText = bookedSeats;
//   totalPriceElement.innerText = "BDT " + bookedSeats * seatPrice;
// }
// // grand total price functional.

//   let totalPrice =550; // Initialize total price
//   let couponApplied = false;

//   function applyCoupon() {
//     // Assuming you have an input field with id "couponCode"
//     const couponCode = document.getElementById('couponCode').value;

//     // Apply coupon logic
//     if (couponCode === 'NEW15' && !couponApplied) {
//       totalPrice *= 0.85; // Apply 15% discount
//       couponApplied = true;
//       updateTotalPriceDisplay();
//     } else if (couponCode === 'Couple 20' && !couponApplied) {
//       totalPrice *= 0.80; // Apply 20% discount
//       couponApplied = true;
//       updateTotalPriceDisplay();
//     } else {
//       alert("Already Applied Coupon Code.");
//     }
//   }

//   function updateTotalPriceDisplay() {
//     const grandTotalElement = document.getElementById('grandTotal');
//     grandTotalElement.innerText = 'BDT ' + totalPrice.toFixed(2); // Display total price with 2 decimal places
// }

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
