var ticket = 0;

function ticketIncrement() {
    ticket++;
    document.getElementById('ticket-number').value = ticket;
    if (ticket >= 0) {
        document.getElementById('ticket-total').innerHTML = ticket * 1;
    }
}
function ticketDecrement() {
    ticket--;
    if(ticket < 0) {
        ticket = 0
    }
    document.getElementById('ticket-number').value = ticket;
    if (ticket >= 0) {
        document.getElementById('ticket-total').innerHTML = ticket * 1;
    }
}

// FOR FOOD
var food = 0;
function foodIncrement() {
    food++;
    document.getElementById('food-number').value = food;
}
function foodDecrement() {
    food--;
    document.getElementById('food-number').value = food;
}

// FOR DRINK
var drink = 0;
function drinkIncrement() {
    drink++;
    document.getElementById('drink-number').value = drink;
}
function drinkDecrement() {
    drink--;
    document.getElementById('drink-number').value = drink;
}

// FOR TOTALS
var ticketPrice = 1000;
// var ticketTotal = ticketPrice * 4;




// totalAmount = ticketTotals(3)





   
