// menu.js
const menuData = {
  burger: [
    { name: "Cheese Burger", price: "$5.99", desc: "Grilled patty with melted cheese", ingredients: "Beef, cheese, bun, lettuce, tomato" },
    { name: "Double Patty", price: "$7.99", desc: "Double the meat, double the flavor", ingredients: "Beef, cheese, bun, onion" },
    { name: "Veggie Delight", price: "$4.99", desc: "Healthy and delicious veggie burger", ingredients: "Lettuce, tomato, veggie patty, sauce" },
    { name: "Spicy Zinger", price: "$6.50", desc: "Crispy and spicy chicken burger", ingredients: "Chicken, chili mayo, lettuce, bun" }
  ],
  appetizers: [
    { name: "Garlic Bread", price: "$3.99", desc: "Toasted bread with garlic butter", ingredients: "Bread, butter, garlic, herbs" },
    { name: "Mozzarella Sticks", price: "$5.50", desc: "Crispy cheese-filled snack", ingredients: "Mozzarella, breadcrumbs, marinara" },
    { name: "Chicken Wings", price: "$6.99", desc: "Spicy and saucy wings", ingredients: "Chicken, BBQ sauce, spices" },
    { name: "Nachos", price: "$4.50", desc: "Corn chips with cheese dip", ingredients: "Tortilla, cheese, salsa, jalapenos" }
  ],
  pizza: [
    { name: "Margherita", price: "$8.00", desc: "Classic pizza with tomato and cheese", ingredients: "Tomato, mozzarella, basil" },
    { name: "Pepperoni", price: "$9.00", desc: "Loaded with spicy pepperoni", ingredients: "Pepperoni, cheese, dough" },
    { name: "BBQ Chicken", price: "$9.50", desc: "BBQ sauce and grilled chicken", ingredients: "Chicken, BBQ sauce, onions" },
    { name: "Veg Supreme", price: "$8.50", desc: "Topped with fresh veggies", ingredients: "Peppers, onion, olives, tomato" }
  ],
  mexican: [
    { name: "Tacos", price: "$4.99", desc: "Crunchy tacos with filling", ingredients: "Beef, lettuce, cheese, tortilla" },
    { name: "Burrito", price: "$6.50", desc: "Big burrito with beans and rice", ingredients: "Rice, beans, meat, salsa" },
    { name: "Quesadilla", price: "$5.75", desc: "Cheese stuffed tortilla", ingredients: "Tortilla, cheese, jalapenos" },
    { name: "Nachos Grande", price: "$6.99", desc: "Loaded nachos with all toppings", ingredients: "Cheese, beans, beef, sour cream" }
  ],
  desserts: [
    { name: "Chocolate Lava Cake", price: "$4.50", desc: "Molten center chocolate cake", ingredients: "Chocolate, flour, butter, sugar" },
    { name: "Cheesecake", price: "$5.25", desc: "Creamy and sweet", ingredients: "Cream cheese, biscuit, sugar" },
    { name: "Ice Cream Trio", price: "$3.99", desc: "3 scoops of your choice", ingredients: "Milk, sugar, flavors" },
    { name: "Brownie", price: "$3.50", desc: "Rich chocolate brownie", ingredients: "Chocolate, nuts, flour" }
  ],
  drinks: [
    { name: "Cola", price: "$1.99", desc: "Chilled fizzy drink", ingredients: "Carbonated water, sugar, caffeine" },
    { name: "Orange Juice", price: "$2.50", desc: "Freshly squeezed", ingredients: "Orange, ice, sugar" },
    { name: "Milkshake", price: "$3.25", desc: "Flavored thick shake", ingredients: "Milk, ice cream, flavoring" },
    { name: "Lemonade", price: "$2.00", desc: "Refreshing lemon drink", ingredients: "Lemon, sugar, soda" }
  ]
};

function showMenu(category) {
  const container = document.getElementById('menu-details');
  const items = menuData[category].map(item => `
    <div class="product-card" onmouseover="this.querySelector('.ingredients').style.opacity=1" onmouseout="this.querySelector('.ingredients').style.opacity=0">
      <h3>${item.name}</h3>
      <p class="desc">${item.desc}</p>
      <p class="price">${item.price}</p>
      <p class="ingredients">Ingredients: ${item.ingredients}</p>
    </div>
  `).join('');

  container.innerHTML = `
    <h2>${category.toUpperCase()} MENU</h2>
    <div class="product-grid">${items}</div>
  `;
  container.scrollIntoView({ behavior: 'smooth' });
}
