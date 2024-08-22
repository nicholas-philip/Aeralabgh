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