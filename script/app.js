// navbar status
let getNavbarStatus = false;
// targets the menu icon
let getToggleNavIcon = document.querySelector('#toggleNavIcon');

// event listener which toggles navigation menu on small screens
getToggleNavIcon.addEventListener('click', () => {

  let getNavbar = document.querySelector('.sm-navbar');
  
  let getNavbarUl = document.querySelector('.sm-navbar ul');

  if (getNavbarStatus === false) {

    getNavbar.style.width = '80%';
    
    getNavbarUl.style.visibility = 'visible';

    getNavbarStatus = true;

  } else if (getNavbarStatus === true) {

    getNavbar.style.width = '0';

    getNavbarUl.style.visibility = 'hidden';

    getNavbarStatus = false;

  };

});

// targets empty space when nav menu is opened
let getExitNavMenu = document.querySelector('#exit-nav');

// event listener which closes navigation menu on small screens
getExitNavMenu.addEventListener('click', () => {

  let getNavbar = document.querySelector('.sm-navbar');

  let getNavbarUl = document.querySelector('.sm-navbar ul');

  if (getNavbarStatus === true) {

    getNavbar.style.width = '0';

    getNavbarUl.style.visibility = 'hidden';

    getNavbarStatus = false;

  };

});


// light and dark theme toggle


const getThemeToggle = document.getElementsByClassName('theme-btn');

// get document body
const body = document.body;

// getting theme status in localStorage
const savedLocalStorage = localStorage.getItem('theme', 'light');

// localStorage to check if the theme is dark
if (savedLocalStorage === 'light') {
  body.classList.add('light-theme');
  document.querySelector('#nav').classList.add('light-theme');
  document.querySelector('#sm-navbar').classList.add('light-theme');
} else {
  body.classList.add('dark-theme');
  document.querySelector('#nav').classList.add('dark-theme');
  document.querySelector('#sm-navbar').classList.add('dark-theme');
}

for (let i = 0; i < getThemeToggle.length; i++) {
  
  getThemeToggle[i].addEventListener('click', () => {
    
    if (body.classList.contains('dark-theme')) {
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
      document.querySelector('#nav').classList.remove('dark-theme');
      document.querySelector('#nav').classList.add('light-theme');
      document.querySelector('#sm-navbar').classList.remove('dark-theme');
      document.querySelector('#sm-navbar').classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
      document.querySelector('#nav').classList.remove('light-theme');
      document.querySelector('#nav').classList.add('dark-theme');
      document.querySelector('#sm-navbar').classList.remove('light-theme');
      document.querySelector('#sm-navbar').classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    }

  });
  
}