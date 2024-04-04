const addBtn = document.getElementById("addBtn");

class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.id = 0;
    this.activities = [];
  }

  getAllActivities() {
    return this.activities;
  }

  createActivity(title, description, imgUrl) {
    this.id++;
    const activity = new Activity(this.id, title, description, imgUrl);
    this.activities.push(activity);
    return activity;
  }

  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
    RefreshActivities();
  }
}

const repository = new Repository();

const convertirAHTML = (activity) => {
  const { id, title, description, imgUrl } = activity;

  const cardContent = document.createElement("div");
  cardContent.classList.add("card_content");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete_button");
  deleteBtn.innerHTML = "×";

  deleteBtn.addEventListener("click", () => repository.deleteActivity(id));

  const h2 = document.createElement("h2");
  h2.classList.add("card_title");
  h2.innerText = title;

  const p = document.createElement("p");
  p.classList.add("card_description");
  p.innerText = description;

  const img = document.createElement("img");
  img.src = imgUrl;
  img.alt = title;

  const divCard = document.createElement("div");
  divCard.classList.add("card");

  cardContent.appendChild(h2);
  cardContent.appendChild(p);

  divCard.appendChild(img);
  divCard.appendChild(deleteBtn);
  divCard.appendChild(cardContent);


  return divCard;
};

const RefreshActivities = () => {
  const cardsContainer = document.getElementById("cards_container");
  cardsContainer.innerHTML = "";
  const actividades = repository.getAllActivities();

  const newContent = actividades.map((actividad) => convertirAHTML(actividad));

  newContent.forEach((content) => cardsContainer.appendChild(content));
};

function CheckInputs() {
  const titleInput = document.getElementById("title");
  const descriptionInput = document.getElementById("description");
  const imageUrlInput = document.getElementById("imageUrl");

  if (
    titleInput.value.trim() === "" ||
    descriptionInput.value.trim() === "" ||
    imageUrlInput.value.trim() === ""
  ) {
    alert("No se han ingresado todos los datos");
    return;
  }

  repository.createActivity(
    titleInput.value.trim(),
    descriptionInput.value.trim(),
    imageUrlInput.value.trim()
  );
  RefreshActivities();

  titleInput.value = "";
  descriptionInput.value = "";
  imageUrlInput.value = "";
}

addBtn.addEventListener("click", CheckInputs);
