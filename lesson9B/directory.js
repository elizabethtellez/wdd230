const requestURL = "./directory.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const business = jsonObject["business"];
    business.forEach(displayProphets);
  });

function displayProphets(business) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let image = document.createElement("img");
  let addresses = document.createElement("p");
  let phones = document.createElement("p");
  let URL = document.createElement("a");
  let name = document.createElement("p");

  //birthPlaca and birthDate
  addresses.textContent = business.addresses;
  phones.textContent = business.phones;
  URL.textContent = business.websites;
  name.textContent = business.name;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
  image.setAttribute("src", business.imageURL);
  image.setAttribute("alt", "Portait of " + business.name);
  image.setAttribute("loading", "lazy");
  image.setAttribute("class", "imagesSection");

  URL.setAttribute("href", business.websites);

  name.setAttribute("class", "hidden");
  name.setAttribute("id", "names");

  // Add/append the section(card) with the h2 element
  card.appendChild(name);
  card.appendChild(image);
  card.appendChild(addresses);
  card.appendChild(phones);
  card.appendChild(URL);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.containerSection").appendChild(card);
}
let listType = document.querySelector(".containerSection");

function displayListAdd() {
  listType.classList.add("listRows");

  let sectionList = document.querySelectorAll("section");
  let nameShow = document.querySelectorAll("#names");
  let sectionImage = document.querySelectorAll(".imagesSection");

  for (const image of sectionImage) {
    image.classList.add("hidden");
  }

  for (const name of nameShow) {
    name.classList.remove("hidden");
  }

  for (const list of sectionList) {
    list.classList.add("sectionList");
  }
}

function displayListRemove() {
  listType.classList.remove("listRows");

  let sectionImage = document.querySelectorAll(".imagesSection");
  let nameShow = document.querySelectorAll("#names");
  let sectionList = document.querySelectorAll("section");

  for (const list of sectionList) {
    list.classList.remove("sectionList");
  }

  for (const name of nameShow) {
    name.classList.add("hidden");
  }

  for (const image of sectionImage) {
    image.classList.remove("hidden");
  }
}
