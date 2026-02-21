const hamburgerBtn = document.querySelector('#hamburger-btn');
const siteNav = document.querySelector('.site-nav');
const projectsGrid = document.querySelector('#projects');
const overlayWrapper = document.querySelector('.overlay-wrapper');
let isMenuOpen = false;

hamburgerBtn.addEventListener('click', () => {
  if (!isMenuOpen) {
    hamburgerBtn.classList.add('open');
    isMenuOpen = true;
  } else {
    hamburgerBtn.classList.remove('open');
    isMenuOpen = false;
  }
  siteNav.classList.toggle('open');
});

/* project data */
const projectData = [
  {
    id: 1,
    title: 'HR Requests Tracker',
    sub_title: 'To track issues',
    project_type: 'Power BI',
    project_date: '2023',
    img: 'Project1.png',
    description:
      'The HR Request Tracker consists of a Google Form that allows employees to submit their concerns, which are automatically stored in a connected Google Sheet. This sheet is accessible to the HR team, who can update only the status of each request. Power BI then provides insights into the submitted requests—such as pending issues, the most frequent types of requests by department, category trends, and how often different issues are logged over time.',
    tags: ['google sheet', 'power bi'],
    liveVersion: 'https://app.powerbi.com/view?r=eyJrIjoiYTQxMzRmMWYtNTNkMC00NzA1LWFkYzEtN2Y4YjlhNTA3YTdhIiwidCI6ImQ5NDZmYzkzLWFmNzAtNGU4Yy1hYmRjLTZlOWFhNDQxYmUwZSIsImMiOjF9',
    sourceLink: 'https://github.com/ayekor/HR-Requests-Tracker',
  },
];

function renderProjects() {
  let allCardsHtml = '';

  projectData.forEach((project) => {
    let tagsHtml = '';
    project.tags.forEach((tag) => {
      tagsHtml += `<li><a href="#">${tag}</a></li>`;
    });

    allCardsHtml += `
      <div class="project-card one">
        <div class="card-body-text">
          <h3>${project.title}</h3>
          <ul class="meta-row">
            <li><a href="#" class="card-subtitle">${project.sub_title}</a></li>
            <div class="bullet-dot"></div>
            <li><a href="#" class="meta-year">${project.project_type}</a></li>
            <div class="bullet-dot"></div>
            <li><a href="#" class="meta-year">${project.project_date}</a></li>
          </ul>
          <p>${project.description}</p>
          <ul class="tag-list">${tagsHtml}</ul>
          <a href="#linked">
            <button id="${project.id}">See Project</button>
          </a>
        </div>
        <div class="card-img">
          <img class="mob" src="./image/${project.img}" alt="${project.img}" />
        </div>
      </div>
    `;
  });

  projectsGrid.innerHTML = allCardsHtml;
}

renderProjects();

function openProjectModal(id) {
  const project = projectData.find((p) => p.id === Number(id));

  let tagsHtml = '';
  project.tags.forEach((tag) => {
    tagsHtml += `<li><a href="#">${tag}</a></li>`;
  });

  overlayWrapper.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <h1 class="modal-title">${project.title}</h1>
        <button title="close button" type="button" class="modal-close-btn">
          <img src="image/close-btn.png" alt="close" width="100%" />
        </button>
      </div>

      <div class="modal-additional-info">
        <h5>${project.sub_title}</h5>
        <div class="bullet-dot"></div>
        <p>${project.project_type}</p>
        <div class="bullet-dot"></div>
        <p><time datetime="${project.project_date}">${project.project_date}</time></p>
      </div>

      <div class="modal-content">
        <div class="project-info-panel">
          <ul class="tag-list">${tagsHtml}</ul>
          <div class="modal-actions">
            <a target="_blank" href="${project.liveVersion}" class="button">
              <button id="${project.id}">
                live link
                <img src="./image/see_live.svg" width="21px" alt="see live" />
              </button>
            </a>
            <a href="${project.sourceLink}" class="button">
              <button id="${project.id}">
                Project files
                <img src="./image/github_in_button.svg" width="21px" alt="github" />
              </button>
            </a>
          </div>
          <div class="divider"></div>
        </div>
      </div>

      <p class="project-desc-text"></p>
    </div>
  `;

  overlayWrapper.classList.remove('close');
  document.body.classList.add('hidescrollbar');

  overlayWrapper.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('modal-close-btn')) {
      overlayWrapper.classList.add('close');
      overlayWrapper.innerHTML = '';
      document.body.classList.remove('hidescrollbar');
    }
  });
}

projectsGrid.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const projectId = e.target.getAttribute('id');
    openProjectModal(projectId);
  }
});

overlayWrapper.addEventListener('click', (e) => {
  if (e.target.parentElement.classList.contains('popup-cancel')) {
    overlayWrapper.classList.add('close');
  }
});

/* form validation */
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  const emailError = document.getElementById('emailValidError');
  const emailValue = contactForm.elements[1].value;
  if (emailValue.toLowerCase() !== emailValue) {
    emailError.style.display = 'block';
    e.preventDefault();
  }
});
