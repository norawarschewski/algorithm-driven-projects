var dataset;

fetch("../data/projects.json")
  .then((response) => response.json())
  .then((data) => setup(data));

function setup(data) {
  data.sort(() => Math.random() - 0.9);
  dataset = [...data];

  for (let i = 0; i < data.length; i++) {
    let project = data[i];
    let singleProject = document.createElement('div');

    const url = document.createElement("a");
    document.body.appendChild(url);

    let img = document.createElement('img');
    if (project.img != false) {
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

    let parent = document.getElementById("projectGrid");
    parent.appendChild(singleProject);
  }  
}