const works = [
  {
    id: 1,
    company: 'Cyber Dynamics',
    class: 'microverse',
    title: 'Backend Developer',
    date: 'May 2017 - March 2021',
    roles: [
      'Implemented efficient and scalable backend architectures for multiple \
      applications, resulting in improved performance, and reduced downtime. \
      As a result, we received a 95% user satisfaction rating.',
      'Proposed new ideas and communicated effectively about an update or change \
      to a project. This improved the project’s user experience and resulted in a \
      20% increase in customer engagement',
      'Trained and mentored 15+ interns. Helped them improve their skills and \
      coding abilities. They were able to make significant contributions to the company projects.',
    ],
  },
  {
    id: 2,
    company: 'Onooli',
    class: 'miic',
    title: 'Software Engineer',
    date: 'March 2021 - July 2022',
    roles: [
      'I was involved in the development and launching of backend APIs. I helped\
       in the design and development of robust and reliable APIs that met needs \
       of fintech startups.',
      ' Improved performance and scalability by using cutting-edge frameworks. \
      This in turn reduced the time and cost required to develop APIs.',
    ],
  },
  {
    id: 3,
    company: 'Epsilon Ug Ltd',
    class: 'cyber',
    title: 'IT Support Engineer',
    date: 'April 2014 - March 2017',
    roles: [
      'I streamlined installations, configurations, and troubleshooting of software, \
      hardware, and networks',
      'I developed comprehensive training programs that improved staff computer \
      usage, performance, and productivity.',
      'I developed an employee Clock-in application that replaced the manual \
      registration book'
    ],
  }
];

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