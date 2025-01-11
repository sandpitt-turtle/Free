"use strict";
const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
];
function calculateTotalPrice(freelancers) {
  return freelancers.reduce((total, freelancer) => total + freelancer.price, 0);
}
function calculateAveragePrice(freelancers) {
  const totalPrice = calculateTotalPrice(freelancers);
  return totalPrice / freelancers.length;
}
function addFreelancer() {
  const newFreelancers = [
    { name: "Carol", price: 70, occupation: "Programmer" },
    { name: "Noodle McNoodle", price: 25, occupation: "Chef" },
    { name: "Actualleigh Ashleigh", price: 51, occupation: "Player of Games" },
    { name: "Taylor Taylors", price: 43, occupation: "Cat Whisperer" },
    { name: "Daniel Daniels", price: 81, occupation: "Watcher of Anime" },
    { name: "Ronald McDonald", price: 43, occupation: "Burglar of Hamburgers" },
    { name: "Prof. Spark", price: 76, occupation: "Expert Frogger Player" },
  ];

  const freelancerToAdd =
    newFreelancers[Math.floor(Math.random() * newFreelancers.length)];
  freelancers.push(freelancerToAdd);

  renderFreelancer(freelancerToAdd);
  displayAveragePrice();
}
function displayAveragePrice() {
  const averagePrice = calculateAveragePrice(freelancers);

  const averagePriceElement = document.querySelector("#average-price");

  if (averagePriceElement) {
    averagePriceElement.innerHTML = `Average Price: $${averagePrice.toFixed(
      2
    )}`;
  }
}
function renderFreelancer(freelancer) {
  const freelancerlist = document.querySelector("#freelancers");
  if (!freelancerlist) {
    console.error("Element with id 'freelancers' not found");
    return;
  }

  const freelancerElement = document.createElement("li");
  freelancerElement.innerHTML = `<p>Name: ${freelancer.name}</p>
                                   <p>Occupation: ${freelancer.occupation}</p>
                                   <p>Price: $${freelancer.price}</p>`;

  freelancerlist.appendChild(freelancerElement);
}

setInterval(() => {
  addFreelancer();
}, 1000);
