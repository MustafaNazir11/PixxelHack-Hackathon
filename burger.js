// === Burger Data ===
const burgers = [
  {
    name: "Cheese Burger",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg",
    description: "A timeless classic, the cheese burger was first introduced in the 1920s and has remained a fan favorite for its simplicity and flavor.",
    ingredients: ["Beef", "Cheese", "Lettuce", "Tomato", "Bun"],
    nutrition: { kcal: 500, protein: "25g", fat: "30g", carbs: "35g" }
  },
  {
    name: "Double Patty",
    img: "https://cdn.uengage.io/uploads/6670/image-257742-1677054193.jpeg",
    description: "Inspired by American diners, the double patty burger doubles the meat for twice the satisfaction. A hearty favorite since the 1950s.",
    ingredients: ["Double Beef", "Cheese", "Onion", "Pickles", "Bun"],
    nutrition: { kcal: 750, protein: "40g", fat: "45g", carbs: "40g" }
  },
  {
    name: "Veggie Delight",
    img: "https://www.realsimple.com/thmb/z3cQCYXTyDQS9ddsqqlTVE8fnpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg",
    description: "A modern vegetarian twist that became popular with the rise of plant-based diets. Loved by health-conscious burger lovers.",
    ingredients: ["Veggie Patty", "Lettuce", "Tomato", "Avocado", "Bun"],
    nutrition: { kcal: 400, protein: "15g", fat: "18g", carbs: "45g" }
  },
  {
    name: "Spicy Zinger",
    img: "images/burger4.jpg",
    description: "Originating in the 90s, the spicy zinger added heat and crunch to the burger world. A hit among spice lovers worldwide.",
    ingredients: ["Fried Chicken", "Spicy Mayo", "Lettuce", "Bun"],
    nutrition: { kcal: 600, protein: "30g", fat: "35g", carbs: "45g" }
  }
];

// === DOM Injection Logic ===
const productList = document.getElementById("productList");

burgers.forEach((burger, index) => {
  const row = document.createElement("div");
  row.className = "product-row";
  if ((index + 1) % 2 === 0) row.classList.add("even");

  row.innerHTML = `
    <img src="${burger.img}" alt="${burger.name}" class="product-img">
    <div class="product-info">
      <h2 class="burger-title">${burger.name}</h2>
      <div class="product-default">
        <p class="desc">${burger.description}</p>
      </div>
      <div class="product-hover">
        <table>
          <tr><th>Ingredients</th><td>${burger.ingredients.join(", ")}</td></tr>
          <tr><th>Calories</th><td>${burger.nutrition.kcal} kcal</td></tr>
          <tr><th>Protein</th><td>${burger.nutrition.protein}</td></tr>
          <tr><th>Fat</th><td>${burger.nutrition.fat}</td></tr>
          <tr><th>Carbs</th><td>${burger.nutrition.carbs}</td></tr>
        </table>
      </div>
    </div>
  `;

  productList.appendChild(row);
});
