const miic = document.getElementById('miic');
const cyber = document.getElementById('cyber');
const microverse = document.getElementById('microverse');

const cyberWorks = document.querySelector('.cyber-work');
const miicWorks = document.querySelector('.miic-work');
const microverseWorks = document.querySelector('.microverse-work');

microverse.addEventListener('click', () => {
  microverseWorks.style.display = 'block';
  microverse.classList.add('active');
  miicWorks.style.display = 'none';
  miic.classList.remove('active');
  cyber.classList.remove('active');
  cyberWorks.style.display = 'none';
});

miic.addEventListener('click', () => {
  microverseWorks.style.display = 'none';
  miicWorks.style.display = 'block';
  cyberWorks.style.display = 'none';
  microverse.classList.remove('active');
  miic.classList.add('active');
  cyber.classList.remove('active');
});

cyber.addEventListener('click', () => {
  microverseWorks.style.display = 'none';
  miicWorks.style.display = 'none';
  cyberWorks.style.display = 'block';
  microverse.classList.remove('active');
  miic.classList.remove('active');
  cyber.classList.add('active');
});

//View Github Profile
const githubUrl = document.querySelector('.btn-course');
githubUrl.addEventListener('click', () => {
  window.open('https://github.com/inspecta/', '_blank');
});

const hamburgerMenu = document.querySelector('.fa-bars');
const closeMenu = document.querySelector('.fa-close');
const menu = document.querySelector('.nav-list');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.style.display = 'none';
  closeMenu.style.display = 'block';
  menu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  hamburgerMenu.style.display = 'block';
  closeMenu.style.display = 'none';
  menu.style.display = 'none';
});

menu.addEventListener('click', () => {
  if (window.innerWidth < 768) {
    menu.style.display = 'none';
    closeMenu.style.display = 'none';
    hamburgerMenu.style.display = 'block';
  }
});

/*
  * Toggle display modes
*/
const toggleButton = document.getElementById('toggle-mode');
const currentMode = localStorage.getItem('mode');

if (currentMode === 'dark') {
  document.body.classList.add('dark');
  toggleButton.classList.add('dark');
  toggleButton.setAttribute('aria-pressed', 'true');
  toggleButton.querySelector('.toggle__text').textContent = 'Dark';
} else {
  document.body.classList.add('light');
  toggleButton.classList.add('light');
  toggleButton.querySelector('.toggle__text').textContent = 'Light';
}

toggleButton.addEventListener('click', () => {
  const body = document.body;
  const isDark = body.classList.contains('dark');

  if (isDark) {
    body.classList.replace('dark', 'light');
    toggleButton.classList.replace('dark', 'light');
    toggleButton.querySelector('.toggle__icon').style.transform = 'translateX(0%)';
    toggleButton.querySelector('.toggle__text').textContent = 'Light';
    localStorage.setItem('mode', 'light');
  } else {
    body.classList.replace('light', 'dark');
    toggleButton.classList.replace('light', 'dark');
    toggleButton.querySelector('.toggle__icon').style.transform = 'translateX(100%)';
    toggleButton.querySelector('.toggle__text').textContent = 'Dark';
    localStorage.setItem('mode', 'dark');
  }

  toggleButton.setAttribute('aria-pressed', !isDark);
  toggleButton.blur();
});

/*
  * Email
*/

const sendEmail = () => {
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let subject = "New Message from Portfolio";

  let link = "mailto:" + email + "?subject=" + subject + "&body=" + message;
  window.open(link, '_blank');
}
