// Set date
var countdownDate = new Date(
    "January 1, 2022 00:00:00"
).getTime(); /* hrs: min: sec */

// Update the count down every 1 second
var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countdownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element
    document.querySelector("#d").innerText = addZero(days);
    document.querySelector("#h").innerText = addZero(hours);
    document.querySelector("#m").innerText = addZero(minutes);
    document.querySelector("#s").innerText = addZero(seconds);

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown-box").innerHTML =
            "<span class='cdi'>Happy New Year!!</span>";
        document.querySelector(".title").innerText = "";
    }
}, 1000);

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function isMobile() {
    if (window.innerWidth < 775) {
        return true;
    } else {
        return false;
    }
}


// Oneline-submit From Dynamic Height/ Width
const onelineSubmit = document.querySelector('.oneline-submit');
const onelineSubmitInput = document.querySelector('.oneline-submit .form-control');
const onelineSubmitBtn = document.querySelector('.oneline-submit .btn');
const onelineSubmitWidth = onelineSubmit.scrollWidth;
const inputWidth = onelineSubmitInput.scrollWidth;
const inputHeight = onelineSubmitInput.scrollHeight;
const btnWidth = onelineSubmitBtn.scrollWidth;
const btnHeight = onelineSubmitBtn.scrollHeight;

onelineSubmitInput.style.height = `${btnHeight}px`;
onelineSubmitInput.style.width = `calc(${onelineSubmitWidth}px - ${btnWidth}px`;

//Subscibe JS

const scriptURL = 'https://script.google.com/macros/s/AKfycbyD4HG46T-4Pik07FGjCsI0aU249wwS3oHSEX1bn94DI_w_WNi0/exec';
const form = document.forms['submit-to-google-sheet'];
let date = form.querySelector('input[name="date"]');


form.addEventListener('submit', e => {
    e.preventDefault();

    date.value = new Date();
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            let msg = document.querySelector('.msg');
            msg.innerHTML = `Thank you for subscribing! <i class='bx bxs-like'></i>`;
            setTimeout(() => {
                msg.innerHTML = '';
            }, 3000);
        })
        .catch(error => {
            let err = document.querySelector('.error');
            err.innerHTML = error.message + "<i class='bx bx-sad' ></i>";
            setTimeout(() => {
                err.innerHTML = '';
            }, 3000);

        })

    onelineSubmitInput.value = '';
})
