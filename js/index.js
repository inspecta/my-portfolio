const miic = document.getElementById('miic');
const cyber = document.getElementById('cyber');
const microverse = document.getElementById('microverse');

//Works
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
// }