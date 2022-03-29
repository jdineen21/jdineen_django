// Get the modal
var modals = document.getElementsByClassName("modals");

// Get the button that opens the modal
var btns = document.getElementsByClassName("project_button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks on the button, open the modal
btns[0].onclick = function() {
    modals[0].style.display = "block";
}

btns[1].onclick = function() {
    modals[1].style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modals[0].style.display = "none";
}

span[1].onclick = function() {
    modals[1].style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modals[0]) {
        modals[0].style.display = "none";
    }

    if (event.target == modals[1]) {
        modals[1].style.display = "none";
    }
}