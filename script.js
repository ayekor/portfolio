const toggle = document.querySelector('#toggle');
const nav = document.querySelector('.nav');
const portfolioContainer = document.querySelector('#portfolio');
const modal = document.querySelector('.modal-wrapper');
let menuOpen = false;

toggle.addEventListener('click', () => {
  if (!menuOpen) {
    toggle.classList.add('open');
    menuOpen = true;
  } else {
    toggle.classList.remove('open');
    menuOpen = false;
  }
  nav.classList.toggle('open');
});
/* popup-window */
const data = [
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
    liveVersion: 'https://app.powerbi.com/view?r=eyJrIjoiYzJiOGRhZjgtOGYzOS00NTA4LWE1M2UtMmI2NTY1MzZhMGQ0IiwidCI6ImQ5NDZmYzkzLWFmNzAtNGU4Yy1hYmRjLTZlOWFhNDQxYmUwZSIsImMiOjF9',
    sourceLink: 'https://github.com/ayekor/HR-Requests-Tracker',
  },
  /*
  {
    id: 2,
    title: 'To-Do List',
    sub_title: 'Daily Activity',
    project_type: 'Front End Dev',
    project_date: '2023',
    img: 'todolist.png',
    description:
      'To-do-list is a project done for the activity To Do list: list structure of the Microverse Program. The goal is to learn use WEBPACK, JavaScript ES6, and UNIT TESTING using JEST.',
    tags: ['html', 'css', 'javascript'],
    liveVersion: 'https://queenterjuma.github.io/To-do-list.github.io/dist/',
    sourceLink: 'https://github.com/QueenterJuma/To-do-list.github.io',
  },
  {
    id: 3,
    title: 'CORPORATE VALUE CHAIN INNOVATION AND R&D LEADERS LIVEWORX 2023',
    sub_title: 'HTML/CSS CAPSTONE',
    project_type: 'Front End Dev',
    project_date: '2023',
    img: '@tric.png',
    description:
      'The goal of this project is to create a UI Capstone project and use Flexbox to place elements on the page. Also, adding images and backgrounds to enhance the look of the website.',
    tags: ['html', 'css', 'javascript'],
    liveVersion: 'https://queenterjuma.github.io/Capstone_one.github.io/',
    sourceLink: 'https://github.com/QueenterJuma/Capstone_one.github.io',
  },
  {
    id: 4,
    title: 'AWESOME BOOKS',
    sub_title: 'BOOK STORE',
    project_type: "'Front End Dev",
    project_date: '2023',
    img: 'owesome.png',
    description:
      'Awesome-book is a basic website that allows users to add/remove books from a list.',
    tags: ['html', 'css', 'javascript'],
    liveVersion: 'https://queenterjuma.github.io/-Awsome-book/',
    sourceLink: 'https://github.com/QueenterJuma/-Awsome-book',
  },
  */
];

function listAllProjects() {
  let projectHtml = '';
  data.forEach((project) => {
    let tagsHtml = '';
    if (project.tags.length) {
      project.tags.forEach((tag) => {
        tagsHtml += `<li><a href="#">${tag}</a></li>`;
      });
    }
    projectHtml += `<div class="card-container one">
        
        <div class="card-content">
          <h3>${project.title}</h3>
          <ul class="institution">
            <li><a href="#" class="canopy">${project.sub_title}</a></li>
            <div class="dot"></div>
            <li><a href="#" class="year">${project.project_type}</a></li>
            <div class="dot"></div>
            <li><a href="#" class="year">${project.project_date}</a></li>
          </ul>
          <p>
           ${project.description}
          </p>
          <ul class="tech">
            ${tagsHtml}
          </ul>
           <a href = "#linked" ><button id="${project.id}">See Project</button></a>
         
        </div>

        <div class="card-image">
          <img class="mob" src="./image/${project.img}" alt="${project.img}" />
        </div>
      </div>
      `;
  });
  portfolioContainer.innerHTML = projectHtml;
}

listAllProjects();

function findProject(id) {
  const project = data.find((project) => project.id === Number(id));
  let technologiesHtml = '';
  if (project.tags.length) {
    project.tags.forEach((technology) => {
      technologiesHtml += `<li><a href="#">${technology}</a></li>`;
    });
  }
  modal.innerHTML = `
  <div class="modal-card">
  <div class="modal-header">
      <h1 class="modal-title">${project.title}</h1>

      <button title="close button" type="button" class="modal-close-btn">
          <img src="image/close-btn.png" alt="close" width="100%" />
      </button>
  </div>
  <div class="project-additional-info modal-additional-info">
      <h5>${project.sub_title}</h5>
      <div class="dot"></div>
      <p>${project.project_type}</p>
      <div class="dot"></div>
      <p><time datetime="${project.project_date}">${project.project_date}</time></p>
  </div>
            
  <div class="modal-content">
      <div class="project-information-2">
          <ul class="tech">
              ${technologiesHtml}
          </ul>

          <div class="modal-actions">

              <a target="_blank" type="button" href="${project.liveVersion}" class="button">
                <button id="${project.id}">
                live link
                  <img 
                      src="./image/see_live.svg"
                      width="21px"
                      alt="see live"
                  />
                </button>
              </a>

              <a type="button" href="${project.sourceLink}" class="button">

              <button id="${project.id}">
                Project files
                <imgsrc="./image/github_in_button.svg" width="21px" alt="github" />
              </button>
              </a>
          </div>

           <div class="divider"></div>

      </div>

  </div>


  <p class="project-description">
  </p>
 

  <!-- <div class="project-image-container" style="background-image: url('./image/${project.img}');"></div> -->
</div>
  `;
  modal.classList.remove('close');
  document.body.classList.add('hidescrollbar');
  modal.addEventListener('click', (e) => {
    if (e.target.parentElement.classList.contains('modal-close-btn')) {
      modal.classList.add('close');
      modal.innerHTML = '';
      document.body.classList.remove('hidescrollbar');
    }
  });
}

portfolioContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const button = e.target;
    const id = button.getAttribute('id');
    findProject(id);
  }
});

modal.addEventListener('click', (e) => {
  if (e.target.parentElement.classList.contains('popup-cancel')) {
    modal.classList.add('close');
  }
});

/* form-validation */
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  const validError = document.getElementById('validError');
  const email = form.elements[1].value;
  if (email.toLowerCase() !== email) {
    validError.style.display = 'block';
    e.preventDefault();
  }
});
