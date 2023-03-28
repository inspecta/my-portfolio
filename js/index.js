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
  * Email
*/

const sendEmail = () => {
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let subject = "New Message from Portfolio";

  let link = "mailto:" + email + "?subject=" + subject + "&body=" + message;
  window.open(link, '_blank');
}

/*
  * Smooth Scroll
*/
const links = document.querySelectorAll('.nav-list a');

links.forEach((link, index) => {
  link.addEventListener('click', e => {

    if (index === links.length - 1) {
      return;
    }

    e.preventDefault();

    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/*
  * Send Email
*/
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const link = "mailto:djmulinde@gmail.com"
    + "?subject=" + encodeURIComponent("Email from the Portfolio")
    + "&body=" + encodeURIComponent("Name: " + name + "\r\nEmail: " + email + "\r\nMessage: " + message);

  window.open(link, "_blank")

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
});
