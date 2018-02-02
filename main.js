var userProfileBtn = document.querySelector('.user-profile-btn');
var userProfileMenu = document.querySelector('.user-profile-menu');
var primaryLinksArr = Array.from(document.querySelectorAll('.primary-link'));
var secondaryNav = document.getElementById('secondary-nav');

for (var i = 0; i < primaryLinksArr.length; i++) {
  primaryLinksArr[i].addEventListener('click', toggleSecondaryNav);
}
userProfileBtn.addEventListener('click', toggleUserMenu);

function toggleUserMenu() {
  userProfileMenu.classList.toggle('active');
  userProfileBtn.classList.toggle('active');
}

function toggleSecondaryNav(e) {
  var link = e.target;
  for (var i = 0; i < primaryLinksArr.length; i++) {
    if(primaryLinksArr[i] !== link) {
      primaryLinksArr[i].classList.remove('active');
    }
  }
  if (link.classList.contains('active')) {
    link.classList.remove('active');
    secondaryNav.classList.remove('active');
    secondaryNav.tabIndex = -1;
    secondaryNav.setAttribute('aria-hidden', 'false');
  } else {
    link.classList.add('active');
    secondaryNav.classList.add('active');
    secondaryNav.tabIndex = 0;
    secondaryNav.setAttribute('aria-hidden', 'false');
  }
}
