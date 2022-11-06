const miic = document.getElementById('miic');
const cyber = document.getElementById('cyber');

//Works
const cyberWorks = document.querySelector('.cyber-work');
const miicWorks = document.querySelector('.miic-work');

miic.addEventListener('click', () => {
  miicWorks.style.display = 'block';
  cyberWorks.style.display = 'none';
  miic.classList.add('active');
  cyber.classList.remove('active');
});

cyber.addEventListener('click', () => {
  miicWorks.style.display = 'none';
  cyberWorks.style.display = 'block';
  miic.classList.remove('active');
  cyber.classList.add('active');
});