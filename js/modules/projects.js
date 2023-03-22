const projects = [
  {
    id: 1,
    name: 'Book Store CMS',
    description: 'A content management system for books developed using React, Redux, and API calls. Add a new book using the POST API method, GET stored books, and also DELETE unwanted books. For API calls, I used the AXIOS Library.',
    tools: ['ReactJs', 'Redux', 'APIs', 'Jest', 'HTML/CSS'],
    links: ['https://github.com/inspecta/Dex-Books', 'https://bookstore-cms-derrick.netlify.app'],
    bg: 'BookStore.png',
  },
  {
    id: 2,
    name: 'Microverse Monthly Assembly',
    description: "Microverse monthly assembly; is the capstone project of my first module at Microverse using HTML semantic practices, and DOM Manipulation to dynamically generate speakers' content. Responsive and designed using the Mobile- first design. Its a replica of the CC Global Summit Korea conference in 2015.'",
    tools: ['JavaScript', 'HTML5', 'CSS3'],
    links: ['https://github.com/inspecta/Capstone-web-project', 'https://inspecta.github.io/Capstone-web-project/'],
    bg: 'MicroverseZoomAssembly.png',
  },
  {
    id: 3,
    name: 'YouFlex',
    description: 'A capstone JavaScript application that utilizes 2 APIs to display movies and enables users to like and comment on their favorite movies. The application consists of the Homepage that contains the list of movies and a popup window that displays details of a specific movie, its likes, and comments.',
    tools: ['JavaScript', 'WebPack', 'RestAPIs', 'HTML5', 'CSS3'],
    links: ['https://github.com/Khaled-AlKhateeb/YouFlex', 'https://khaled-alkhateeb.github.io/YouFlex/'],
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
  projectsBg.style.backgroundImage = `url(../../images/projects/${project.bg})`;

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