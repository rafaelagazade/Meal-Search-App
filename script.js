const srcBtn = document.querySelector(".btn");
const mealList = document.querySelector(".meal");
const closePopUp = document.querySelector(".closePop-up");
const popUp = document.querySelector(".pop-upMain");
const popUpName = document.querySelector(".popUp-name");
const popUpInfo = document.querySelector(".info");
const popUpImg = document.querySelector(".img-popup img ");
const srcBtn2 = document.querySelector(".btn2");
const body = document.querySelector("body");
const header = document.querySelector(".header");

const searchBar = document.querySelector(".search-bar");
const srcClose = document.querySelector(".btnClose");

const clearRes = document.querySelector(".clear-result");
const mealBox = document.querySelector(".meal");

srcBtn.addEventListener("click", () => {
  searchBar.classList.add("search-bar-active");
  srcClose.classList.add("btnClose-active");
  srcBtn.classList.add("btn-active");
  srcBtn2.style.opacity = "1";
});

srcClose.addEventListener("click", () => {
  searchBar.classList.remove("search-bar-active");
  srcClose.classList.remove("btnClose-active");
  srcBtn.classList.remove("btn-active");
  srcBtn2.classList.remove("active");
  srcBtn2.style.opacity = "0";
  searchBar.value = "";
});

srcBtn2.addEventListener("click", getMealList);

function getMealList() {
  clearRes.style.display = "block";
  let searchResult = searchBar.value;
  /* search input outpur */
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchResult}`)
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += ` 
                    <div class="meal-item" data-id = ${meal.idMeal} >

                        <div class="meal-img">
                            <img src="${meal.strMealThumb}" alt="food">
                        </div>

                        <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <button id="${meal.idMeal}" class="recipe-btn">Get Recipe</button>
                        </div>

                    </div> `;
        });
        body.style.gap = "30px";
      } else {
        body.style.gap = "0";
        html = `<div class="alert">
    <div class="word">
      <p>Sorry , we didn't findy any meal !</p>
    </div>
  </div>`;
      }
      mealList.innerHTML = html;
      const recipe = document.querySelectorAll(".recipe-btn");

      clearRes.style.display = "block";

      recipe.forEach((item) => {
        item.addEventListener("click", () => {
          const getBtnId = item?.getAttribute("id");
          data.meals.forEach((meal) => {
            if (meal.idMeal == getBtnId) {
              popUp.style.display = "flex";
              popUpName.innerHTML = meal.strMeal;
              popUpImg.setAttribute("src", meal.strMealThumb);
            }
          });
        });
      });
    });
}

function getMealListDefault() {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=`)
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `
                    <div class="meal-item" data-id = ${meal.idMeal} >

                        <div class="meal-img">
                            <img src="${meal.strMealThumb}" alt="food">
                        </div>

                        <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <button id=${meal.idMeal} class="recipe-btn">Get Recipe</button>
                        </div>

                    </div> `;
        });
      } else {
        body.style.gap = "0";
        html = `<div class="alert">
    <div class="word">
      <p>Sorry , we didn't findy any meal !</p>
    </div>
  </div>`;
      }
      mealList.innerHTML = html;
      const recipe = document.querySelectorAll(".recipe-btn");

      recipe.forEach((item) => {
        item.addEventListener("click", () => {
          const getBtnId = item?.getAttribute("id");
          data.meals.forEach((meal) => {
            if (meal.idMeal == getBtnId) {
              popUp.style.display = "flex";
              popUpName.innerHTML = meal.strMeal;
              popUpImg.setAttribute("src", meal.strMealThumb);
            }
          });
        });
      });
    });
}

window.addEventListener("load", getMealListDefault);

window.addEventListener("load", () => {
  clearRes.style.display = "none";
});

clearRes.addEventListener("click", () => {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=`)
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `
                    <div class="meal-item" data-id = ${meal.idMeal} >

                        <div class="meal-img">
                            <img src="${meal.strMealThumb}" alt="food">
                        </div>

                        <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <button id=${meal.idMeal} class="recipe-btn">Get Recipe</button>
                        </div>

                    </div> `;
        });
      } else {
        body.style.gap = "0";
        html = `<div class="alert">
    <div class="word">
      <p>Sorry , we didn't findy any meal !</p>
    </div>
  </div>`;
      }
      mealList.innerHTML = html;
      const recipe = document.querySelectorAll(".recipe-btn");

      recipe.forEach((item) => {
        item.addEventListener("click", () => {
          const getBtnId = item?.getAttribute("id");
          data.meals.forEach((meal) => {
            if (meal.idMeal == getBtnId) {
              popUp.style.display = "flex";
              popUpName.innerHTML = meal.strMeal;
              popUpImg.setAttribute("src", meal.strMealThumb);
            }
          });
        });
      });
    });
  mealBox.innerHTML = "";
  clearRes.style.display = "none";
});

closePopUp.addEventListener("click", () => {
  popUp.style.display = "none";
});
