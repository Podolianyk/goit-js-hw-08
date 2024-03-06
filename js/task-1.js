const allList = document.querySelectorAll(".item") // отримую доступ до всіх li з класом item, повертає масив посилань

// console.log(allList);
console.log(`Number of categories: ${allList.length}`); 

const allTitle = document.querySelectorAll("h2") // отримую доступ до всіх h2, повертає масив посилань
// console.log(allTitle);
allTitle.forEach(function (title) {
    const titleName = title.textContent
    console.log(`Category: ${titleName}`);
    const categoriesNames = title.parentElement.querySelectorAll("ul > li");
    console.log(`Elements: ${categoriesNames.length}`);
})














