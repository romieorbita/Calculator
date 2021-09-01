let numbers = document.querySelectorAll(".numbers");

numbers.forEach(number => number.addEventListener('click', clicked));

function clicked(e){
    console.log('CLICKED!')
};



