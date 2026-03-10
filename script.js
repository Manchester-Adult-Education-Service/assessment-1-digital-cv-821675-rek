const nameHeading = document.querySelector('h1');
const hour = new Date().getHours();
const year = new Date().getFullYear();
const time = new Date().toLocaleTimeString();
const mainContainer = document.querySelector('main');
const headerBar = document.querySelector('header');
const subTitles = document.querySelectorAll('h2');

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

document.querySelectorAll('h2')
        .forEach(el => el.style.fontSize += 2);

document.getElementById('theme-btn').addEventListener('click', function() { 
    if (document.body.style.backgroundColor === 'rgb(30, 27, 75)') {
        document.body.style.backgroundColor = 'pink';
        mainContainer.style.backgroundColor = 'white';
        headerBar.style.backgroundColor = 'white';
        subTitles.forEach(i => i.style.backgroundColor = hwb(195, 0.68, 0.1));
    } else {
        document.body.style.backgroundColor = 'rgb(30, 27, 75)';
        mainContainer.style.backgroundColor = "#1e293b";
        headerBar.style.backgroundColor = "#1e293b";
        subTitles.forEach(i => i.style.backgroundColor = "#1e293b");
    }
 });

const allSkills = document.querySelectorAll('li');
allSkills.forEach(skill => {
  if (skill.textContent.includes("Python")) {
    skill.style.color = "#ea580c"; // Professional Orange
    skill.style.fontWeight = "bold";
  }
});
