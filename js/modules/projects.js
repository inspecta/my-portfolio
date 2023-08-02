const projects = [
  {
    id: 4,
    name: 'Bridal Cars Reservation',
    description: 'Bridal cars is a full-stack application that allows users to\
     reserve a bridal car. Using this app, users can log in by typing their \
     usernames and passwords. Once logged in, they can see all the available cars,\
      and the car details and can reserve a car',
    tools: ['Ruby on Rails', 'React', 'Redux', 'RESTful API', 'HTML/CSS'],
    links: [
      'https://github.com/inspecta/bridal-cars-backend',
      'https://storied-madeleine-8f057b.netlify.app/'
    ],
    bg: 'BridalCarReservation.png',
  },
  {
    id: 6,
    name: 'Player Ratings',
    description: 'React app that helps the user to collect ratings of football \
    players after a game. Rate your players out of 10 depending on how they \
    performed in the game. Delete, edit or update any player rating. Developed \
    using React, and the app state is managed using React Hooks.',
    tools: ['React', 'TailwindCSS'],
    links: [
      'https://github.com/inspecta/player-ratings',
      'https://rating-players-derrick.netlify.app/'
    ],
    bg: 'player-ratings.png',
  },
  {
    id: 2,
    name: 'Blog',
    description: 'A blog web app. A user will be able to login into the application (Credentials: Username and Password). The logged in user can create posts. These posts will be listed and readers of these posts will be empowered to interact with the posts by either adding comments or even liking the posts.',
    tools: ['Ruby on Rails', 'JavaScript', 'HTML', 'TailwindCSS', 'RSpec/Capybara'],
    links: [
      'https://github.com/inspecta/Blog',
      ''
    ],
    bg: 'blog.png',
  },

  {
    id: 5,
    name: 'Microverse Monthly Assembly',
    description: "Microverse monthly assembly; is the capstone project of my first module at Microverse using HTML semantic practices, and DOM Manipulation to dynamically generate speakers' content. Responsive and designed using the Mobile- first design. Its a replica of the CC Global Summit Korea conference in 2015.'",
    tools: ['JavaScript', 'HTML5', 'CSS3'],
    links: [
      'https://github.com/inspecta/Capstone-web-project',
      'https://inspecta.github.io/Capstone-web-project/'
    ],
    bg: 'MicroverseZoomAssembly.png',
  },
  {
    id: 3,
    name: 'YouFlex',
    description: 'A capstone JavaScript application that utilizes 2 APIs to display movies and enables users to like and comment on their favorite movies. The application consists of the Homepage that contains the list of movies and a popup window that displays details of a specific movie, its likes, and comments.',
    tools: ['JavaScript', 'WebPack', 'RestAPIs', 'HTML5', 'CSS3'],
    links: [
      'https://github.com/Khaled-AlKhateeb/YouFlex',
      'https://khaled-alkhateeb.github.io/YouFlex/'
    ],
    bg: 'YouFlex.png'
  }
]

const projectsSection = document.querySelector('.projects-div');
projects.map((project) => {
  const projectContainer = document.createElement('div');
  projectContainer.classList.add('projects-container');
  projectsSection.appendChild(projectContainer);

  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project-info');
  projectContainer.appendChild(projectDiv);

  const projectsBg = document.createElement('div');
  projectsBg.classList.add('projects-bg');
  projectContainer.appendChild(projectsBg);
  projectsBg.style.backgroundImage = `url(../../images/${project.bg})`;

  const featuredProject = document.createElement('p');
  featuredProject.setAttribute('class', 'featured');
  projectDiv.appendChild(featuredProject);
  featuredProject.appendChild(document.createTextNode('Featured Project'));

  const projectHeader = document.createElement('h2');
  projectHeader.setAttribute('class', 'project-header color-2');
  projectDiv.appendChild(projectHeader);
  projectHeader.appendChild(document.createTextNode(project.name));

  const projectDescription = document.createElement('p');
  projectDescription.setAttribute('class', 'description color-2');
  projectDiv.appendChild(projectDescription);
  projectDescription.appendChild(document.createTextNode(project.description));

  const projectTools = document.createElement('ul');
  projectTools.classList.add('project-tools');
  projectDiv.appendChild(projectTools);

  project.tools.map((tool) => {
    const projectToolsList = document.createElement('li');
    projectToolsList.setAttribute('class', 'tools-list color-1 none');
    projectTools.appendChild(projectToolsList);
    projectToolsList.appendChild(document.createTextNode(tool));
  })

  const projectLinks = document.createElement('div');
  projectDiv.appendChild(projectLinks);
  projectLinks.classList.add('links');

  const github = document.createElement('i');
  projectLinks.appendChild(github);
  github.setAttribute('class', 'fa fa-github');
  github.setAttribute('title', 'Source Code');
  github.addEventListener('click', () => {
    window.open(project.links[0], '_blank');
  });

  const live = document.createElement('i');
  projectLinks.appendChild(live);
  live.setAttribute('class', 'fa fa-share-square-o');
  live.setAttribute('title', 'Live Demo');
  live.addEventListener('click', () => {
    window.open(project.links[1], '_blank');
  })
});