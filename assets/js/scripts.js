fetch("../data/projects.json")
  .then((response) => response.json())
  .then((data) => setup(data));

function setup(data) {
  data.sort(() => Math.random() - 0.9);
  dataset = [...data]; // s.o.

  for (let i = 0; i < data.length; i++) {
    const project = data[i];
    const singleProject = document.createElement("div");

    const img = document.createElement("img");
    if (project.img !== false) {
      img.src = `../assets/img/${project.img}`;
    } else {
      img.src = "../assets/img/placeholder.jpg";
    }

    const description = document.createElement("div");
    description.innerHTML += `
    <a href="${project.url}"><h2 class="title">${project.title}</h2></a> by <a href="${project.website}"><p>${project.designer}</p></a>
    `;
    singleProject.append(img, description);

    const parent = document.getElementById("projectGrid");
    parent.appendChild(singleProject);
  }
}