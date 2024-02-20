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
const currentBookingSeatNumber=document.getElementById('booking-seat');
const currentBookingSeat=currentBookingSeatNumber.innerText;
const newBookingSeat=parseInt(currentBookingSeat);
const bookingSeat=newBookingSeat +1
currentBookingSeatNumber.innerText=bookingSeat;
