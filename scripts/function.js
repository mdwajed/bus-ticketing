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

// // seat left part.
//   let availableSeats = 40;
//   let bookedSeats = 0;

//   // Function to handle seat selection
//   function selectSeat(seatId) {
//     const seatButton = document.getElementById(seatId);

//     if (!seatButton.classList.contains('selected')) {
//       if (availableSeats > 0) {
//         availableSeats--;
//         bookedSeats++;tedSeats;
 
//         seatButton.classList.add('selected');
//         updateSeatsDisplay();
//       } else {
//         alert("No seats available!");
//       }
//     } else {
//       alert("Seat already booked!");
//     }
//   }

//   // Function to update the display
//   function updateSeatsDisplay() {
//     const availableSeatsElement = document.getElementById('availableSeats');
//     const bookedSeatsElement = document.getElementById('bookedSeats');

//     availableSeatsElement.innerText = availableSeats;
//     bookedSeatsElement.innerText = bookedSeats;
//   }
let availableSeats = 40;
let bookedSeats = 0;
const seatPrice = 550; // Price per seat
const maxSeats = 4; // Maximum number of seats allowed to be selected

function selectSeat(seatId) {
  const seatButton = document.getElementById(seatId);

  if (!seatButton.classList.contains("selected")) {
    if (bookedSeats< maxSeats) {
      if (availableSeats > 0) {
        availableSeats--;
        bookedSeats++;
        seatButton.classList.add("selected");
        updateSeatsDisplay();
      } else {
        alert("No seats available!");
      }
    } else {
      alert("You can only select up to 4 seats.");
    }
  } else {
    availableSeats++;
    bookedSeats;
    seatButton.classList.remove("selected");
    updateSeatsDisplay();
  }
}

function updateSeatsDisplay() {
  const availableSeatsElement = document.getElementById("availableSeats");
  const bookedSeatsElement = document.getElementById("bookedSeats");
  const totalPriceElement = document.getElementById("totalPrice");

  availableSeatsElement.innerText = availableSeats;
  bookedSeatsElement.innerText = bookedSeats;
  totalPriceElement.innerText = "BDT " + bookedSeats*seatPrice;
}
