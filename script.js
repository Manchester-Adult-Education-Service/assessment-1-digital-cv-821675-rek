const nameHeading = document.querySelector('h1');
const hour = new Date().getHours();
const year = new Date().getFullYear();
const time = new Date().getTime();
const time = new Date().toLocaleTimeString();
Document.getElementById('copyright').textContent = Copyright @ ${year} Rekha'
Document.getElementsById('copyright').textContent = Copyright @ ${time} Rekha'

if (hour<12) {
    nameHeading.textContent = "Good Morning, Rekha";
} else if (hour<18) {
    nameHeading.textContent = "Good Afternoon, Rekha";
} else {
    nameHeading.textContent = "Good Evening, Rekha";
}   

console.log("The current hour is: " + hour);

document.getElementById('copyright @ Rekha')