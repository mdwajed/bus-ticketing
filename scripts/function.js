function hideElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('hidden');
}

const buttons =document.querySelectorAll('.btn');
buttons.forEach(function(button){
    button.addEventListener('click',function(){
        this.style.backgroundColor = 'green'
    })
})

// seat left part.
  let availableSeats = 40; 
  let bookedSeats = 0; 

  // Function to handle seat selection
  function selectSeat(seatId) {
    const seatButton = document.getElementById(seatId);

    if (!seatButton.classList.contains('selected')) { 
      if (availableSeats > 0) { 
        availableSeats--; 
        bookedSeats++; 
        seatButton.classList.add('selected');
        updateSeatsDisplay(); 
      } else {
        alert("No seats available!");
      }
    } else {
      alert("Seat already booked!");
    }
  }

  // Function to update the display
  function updateSeatsDisplay() {
    const availableSeatsElement = document.getElementById('availableSeats');
    const bookedSeatsElement = document.getElementById('bookedSeats');

    availableSeatsElement.innerText = availableSeats; 
    bookedSeatsElement.innerText = bookedSeats; 
  }

