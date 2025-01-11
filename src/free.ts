const freelancers = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
];

function calculateTotalPrice(freelancers: price) {
  return freelancers.reduce((total, freelancer) => total + freelancer.price, 0);
}

function calculateAveragePrice(freelancers: string) {
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

  // Push the new freelancer to the freelancers arraycleat
  const freelancerToAdd =
    newFreelancers[Math.floor(Math.random() * newFreelancers.length)];
  freelancers.push(freelancerToAdd);

  // Render the most recently added freelancer
  renderFreelancer(freelancerToAdd);
  displayAveragePrice();
}

function displayAveragePrice() {
  // Calculate the average price using the existing function
  const averagePrice = calculateAveragePrice(freelancers);

  // Find the element where you want to display the average price
  const averagePriceElement = document.querySelector("#average-price");

  // If the element exists, update it with the new average price
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

  // Create a new list item for the freelancer
  const freelancerElement = document.createElement("li");
  freelancerElement.innerHTML = `<p>Name: ${freelancer.name}</p>
                                   <p>Occupation: ${freelancer.occupation}</p>
                                   <p>Price: $${freelancer.price}</p>`;

  // Append this freelancer to the list
  freelancerlist.appendChild(freelancerElement);
}

// Add a new freelancer every 1 second
setInterval(() => {
  addFreelancer();
}, 1000);
