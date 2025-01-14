type Freelancer = {
  name: string;
  price: number;
  occupation: string;
};

const freelancers: Freelancer[] = [
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Bob", price: 50, occupation: "Teacher" },
];

function calculateTotalPrice(freelancers: Freelancer[]): number {
  return freelancers.reduce((total, freelancer) => total + freelancer.price, 0);
}

function calculateAveragePrice(freelancers: Freelancer[]): number {
  const totalPrice = calculateTotalPrice(freelancers);
  return totalPrice / freelancers.length;
}

function addFreelancer(): void {
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

function displayAveragePrice(): void {
  const averagePrice = calculateAveragePrice(freelancers);

  const averagePriceElement =
    document.querySelector<HTMLDivElement>("#average-price");

  if (averagePriceElement) {
    averagePriceElement.innerHTML = `Average Price: $${averagePrice.toFixed(
      2
    )}`;
  }
}

function renderFreelancer(freelancer: Freelancer): void {
  const freelancerlist =
    document.querySelector<HTMLUListElement>("#freelancers");
  if (!freelancerlist) {
    console.error("Element with id 'freelancers' not found");
    return;
  }

  const freelancerElement = document.createElement("li");

  const nameElement = document.createElement("p");
  nameElement.textContent = `Name: ${freelancer.name}`;

  const occupationElement = document.createElement("p");
  occupationElement.textContent = `Occupation: ${freelancer.occupation}`;

  const priceElement = document.createElement("p");
  priceElement.textContent = `Price: $${freelancer.price}`;

  freelancerElement.appendChild(nameElement);
  freelancerElement.appendChild(occupationElement);
  freelancerElement.appendChild(priceElement);

  freelancerlist.appendChild(freelancerElement);
}

freelancers.forEach((freelancer) => renderFreelancer(freelancer));
displayAveragePrice();

setInterval(() => {
  addFreelancer();
}, 2500);
