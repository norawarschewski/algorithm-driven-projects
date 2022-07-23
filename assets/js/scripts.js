var dataset; // ist glaube ich überflüssig

fetch("../data/projects.json")
  .then((response) => response.json())
  .then((data) => setup(data));

function setup(data) {
  data.sort(() => Math.random() - 0.9);
  dataset = [...data]; // s.o.

  for (let i = 0; i < data.length; i++) {
    // const statt let bei sich nicht verändernden Variablen
    const project = data[i];
    // Container als <a> statt <div>
    const singleProject = document.createElement("a");
    // href- und target-Attribut bestimmen
    singleProject.href = project.url;
    singleProject.target = "_blank";

    const img = document.createElement("img");
    if (project.img !== false) {
      img.src = `../assets/img/${project.img}`;
    } else {
      img.src = "../assets/img/placeholder.jpg";
    }
    singleProject.appendChild(img);

    // let title = document.createElement("h2");
    // title.innerHTML = project.title;
    // singleProject.appendChild(title);

    // let designer = document.createElement("p");
    // title.innerHTML = project.designer;
    // singleProject.appendChild(designer);

    const parent = document.getElementById("projectGrid");
    parent.appendChild(singleProject);
  }
}
