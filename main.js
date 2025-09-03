// Sample data (replace with a projects.json fetch later)
const projects = [
    {
      title: "Web Storefront",
      description: "A full-stack storefront built with HTML, Bootstrap, Node.js, and MongoDB.",
      link: "https://github.com/judeMusolino/web-storefront"
    },
    {
      title: "ERP Database Schema",
      description: "An ERP schema and ER diagram designed for a packaging manufacturing company.",
      link: "https://github.com/judeMusolino/erp-database"
    }
  ];
  
  const cabinet = document.getElementById("cabinet");
  const fileView = document.getElementById("file-view");
  
  // Render folders
  projects.forEach(project => {
    const folder = document.createElement("project-folder");
    folder.title = project.title;
    folder.description = project.description;
    folder.link = project.link;
    cabinet.appendChild(folder);
  });
  
  // Listen for opening a file
  cabinet.addEventListener("open-file", e => {
    const { title, description, link } = e.detail;
    const file = document.createElement("project-file");
    file.title = title;
    file.description = description;
    file.link = link;
    fileView.innerHTML = "";
    fileView.appendChild(file);
    fileView.classList.remove("hidden");
  });
  
  // Listen for closing a file
  fileView.addEventListener("close-file", () => {
    fileView.classList.add("hidden");
    fileView.innerHTML = "";
  });
  