const works = [
  {
    id: 1,
    company: 'Microverse',
    class: 'microverse',
    title: 'Student Mentor',
    date: 'August 2022 - Current',
    roles: ['I mentor junior web developers, providng them with technical support through code reviews.',
      'I also provide advice and motivation to these developers.',
      'I propose improvements to code organization to improve code quality and overall performance.'
    ],
  },
  {
    id: 2,
    company: 'MIIC',
    class: 'miic',
    title: 'Java Backend Developer',
    date: 'April 2021 - Dec 2022',
    roles: ['Makerere Innovation and Incubation Center',
      'Developing and deploying Rest APIs',
      'Worked with a variety of languages, platforms and frameworks including Java (Spring Boot), Postgress, Hibernate, JWT.'
    ],
  },
  {
    id: 3,
    company: 'Cyber Dynamics',
    class: 'cyber',
    title: 'Backend Developer',
    date: 'May 2017 - March 2021',
    roles: ['Designing and developing user specifications',
      'Developing and deploying Rest APIs',
      'Worked with a variety of languages, platforms and frameworks including HTML, CSS, Javascript, PHP and Spring Boot.',
      'Was also involved in application testing using Jest.'
    ],
  }];

const workPlaces = document.querySelector('.work-places');

const companiesDiv = document.createElement('div');
workPlaces.appendChild(companiesDiv);
companiesDiv.classList.add('works')

const companies = document.createElement('ul');
companies.setAttribute('class', 'companies none');
companiesDiv.appendChild(companies);

works.map((work) => {
  const companyList = document.createElement('li');
  companies.appendChild(companyList);
  companyList.setAttribute('id', work.class);
  companyList.appendChild(document.createTextNode(work.company));

  if (work.id === 1) {
    companyList.classList.add('active');
  }

  const workDiv = document.createElement('div');
  workPlaces.appendChild(workDiv);
  workDiv.setAttribute('class', `${work.class}-work`);

  const workHeader = document.createElement('h4');
  workHeader.setAttribute('class', 'white work-title');
  workDiv.appendChild(workHeader);
  workHeader.appendChild(document.createTextNode(work.title));

  const workDuration = document.createElement('p');
  workDiv.appendChild(workDuration);
  workDuration.appendChild(document.createTextNode(work.date));

  const workRoles = document.createElement('ul');
  workRoles.setAttribute('class', 'roles none');
  workDiv.appendChild(workRoles);

  work.roles.map((role) => {
    const workRolesList = document.createElement('li');
    workRoles.appendChild(workRolesList);
    workRolesList.appendChild(document.createTextNode(role));
  });
});