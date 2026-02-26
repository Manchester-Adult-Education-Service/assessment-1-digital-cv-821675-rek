const nameHeading = document.querySelector('h1');
const hour = new Date().getHours();
const year = new Date().getFullYear();
const time = new Date().toLocaleTimeString();

if (hour<12) {
    nameHeading.textContent = "Good Morning, Rekha";
} else if (hour<18) {
    nameHeading.textContent = "Good Afternoon, Rekha";
} else {
    nameHeading.textContent = "Good Evening, Rekha";
}   

console.log("The current hour is: " + hour);

document.getElementById('copyright').textContent = `Copyright @ ${year} Rekha`

const personalStatement = document.getElementsByClassName('highlight');
if (personalStatement && personalStatement.style) {
    personalStatement.style.backgroundColor = '#bfff00'
}

alert('Thank you for visiting my portfolio!');

document.querySelectorAll('h1')
        .forEach(el => el.style.fontSize += 2);

document.getElementById('theme-btn').addEventListener('click', function() { 
console.log(document.body.style.backgroundColor);
    if (document.body.style.backgroundColor === 'rgb(30, 27, 75)') {
        document.body.style.backgroundColor = 'pink';
    } else {
        document.body.style.backgroundColor = 'rgb(30, 27, 75)';
    }
 });