function openCabinet() {
    document.getElementById('cabinet-screen').classList.add('hidden');
    document.getElementById('projects-screen').classList.remove('hidden');
  }
  
  // Back button
  function backToProjects() {
    document.getElementById('file-screen').classList.add('hidden');
    document.getElementById('projects-screen').classList.remove('hidden');
  }
  
  // Load folders
  const projects = [
    {
      title: "Web Storefront",
      description: "A full-stack store app built with Node.js, Express, and MongoDB.",
      link: "https://github.com/judeMusolino/web-storefront"
    },
    {
      title: "ERP Database",
      description: "Designed a schema and ER diagram for a manufacturing ERP system.",
      link: "https://github.com/judeMusolino/erp-database"
    }
  ];
  
  const grid = document.getElementById('projects-grid');
  projects.forEach(p => {
    const el = document.createElement('project-folder');
    el.title = p.title;
    el.description = p.description;
    el.link = p.link;
    grid.appendChild(el);
  });
  
  // Listen for open-project event
  document.addEventListener('open-project', (e) => {
    const { title, description, link } = e.detail;
    const fileScreen = document.getElementById('file-screen');
    const fileContent = document.getElementById('file-content');
    fileContent.innerHTML = `<project-file title="${title}" description="${description}" link="${link}"></project-file>`;
    document.getElementById('projects-screen').classList.add('hidden');
    fileScreen.classList.remove('hidden');
  });
  