const requestURL = "./temples.json";

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
  let dedicated = document.createElement("p");
  let location = document.createElement("p");
  let temail = document.createElement("p");
  let address = document.createElement("p");
  let telephone = document.createElement("p");
  let templeClosure = document.createElement("p");

  // Change the textContent property of the h2 element to contain the prophet's full name
  h2.textContent = prophet.name + " " + prophet.lastname;

  //birthPlaca and birthDate
  dedicated.innerHTML = "<b>Dedicated: </b>" + prophet.dedicated;
  location.innerHTML = "<b>Location: </b>" + prophet.location;
  temail.innerHTML = "<b>Email: </b>" + prophet.temail;
  address.innerHTML = "<b>Address: </b>" + prophet.address;
  telephone.innerHTML = "<b>Phone: </b>" + prophet.telephone;
  templeClosure.innerHTML = "<b>Temple Closure: </b>" + prophet.templeClosure;

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
  card.appendChild(dedicated);
  card.appendChild(location);
  card.appendChild(image);
  card.appendChild(temail);
  card.appendChild(address);
  card.appendChild(telephone);
  card.appendChild(templeClosure);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector("div.cards").appendChild(card);
}
