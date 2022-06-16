const requestURL =
  "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
  });

function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement("section");
  let h2 = document.createElement("h2");
  let image = document.createElement("img");
  let birthDate = document.createElement("p");
  let birthPlace = document.createElement("p");

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = prophet.name + " " + prophet.lastname;

  //birthPlaca and birthDate
  birthDate.innerHTML = "<b>Date of Birth: </b>" + prophet.birthdate;
  birthPlace.innerHTML = "<b>Place of Birth: </b>" + prophet.birthplace;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values.
  image.setAttribute("src", prophet.imageurl);
  image.setAttribute(
    "alt",
    "Portait of " +
      prophet.name +
      " " +
      prophet.lastname +
      " - " +
      prophet.order +
      "th Latter-day President"
  );
  image.setAttribute("loading", "lazy");

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(birthDate);
  card.appendChild(birthPlace);
  card.appendChild(image);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}
