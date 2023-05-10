// console.log("Number of categories:", document.querySelector("#categories").children.length);
console.log("Number of categories:", document.querySelector("#categories").childElementCount);
const categoriesEl = document.querySelectorAll("li.item"); 

// console.log(categoriesEl);

// categoriesEl.forEach(categoryEl => {
//     console.log(`Category: ${categoryEl.firstElementChild.textContent}`);

//     console.log(`Elements: ${categoryEl.lastElementChild.children.length}`);
// })

categoriesEl.forEach(categoryEl => {
    console.log(`Category: ${categoryEl.firstElementChild.textContent}`);
    console.log(`Elements: ${categoryEl.lastElementChild.childElementCount}`);
});


