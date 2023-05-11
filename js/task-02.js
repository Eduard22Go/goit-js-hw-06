const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = ingredients.map(ingredient => {
  const liEl = document.createElement("li");
  
  liEl.classList.add("item");
  liEl.textContent = ingredient;

  return liEl;
});

const ingredientsEl = document.querySelector("#ingredients");
// console.log(ingredientsEl);
ingredientsEl.append(...listEl);



