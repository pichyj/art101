// Authors: Pichy Jumpholwong, Shimao Zhou, Zibo Chen
// Created: 18 May 2022
// License: Public Domain


//Input the ingredients
//In an HTML document, the document.createElement() method creates the HTML element specified by tagName,
//or an HTMLUnknownElement if tagName isn't recognized.

// document.getElementById("add").onclick  = function() {
//
//     var input = document.createElement("ingredient1"); //not sure if this is correct
//     var input2 = document.createElement("ingredient2");
//     var input3 = document.createElement("ingredient3");
//     var vegetables = ["carrot", "scallion", "potato", "onion", "zucchini", "corn", "cucumber", "broccoli",
//     "pumpkin", "cauliflower", "asparagus", "arugula", "kale", "lettuce", "eggplant", "squash", "cabbage"];
//     var fruit = ["tomato", "avocado", "lime", "lemon"];
//     var meat = ["bacon", "beef", "pork", "chicken", "fish", "duck", "egg"];
//     var dairy = ["butter", "milk", "cream", "yogurt",];
//     document.getElementById("list-ingredients").append(input);
//
//
//   // done button
//   const doneButton = document.querySelector('input[type="button"]');
  // submitButton.addEventListener('click',recipeModule.handleSubmit.bind(recipeModule));

// when click enter next line allows bullet point list
// $(".list").focus(function() {
//   if(document.getElementById('list').value === ''){
//     document.getElementById('ist').value +='• ';
//   }
// });
//
// $('.container').on('keydown', 'input', function(e) {
//   if (e.keyCode === 13) {
//     e.preventDefault();
//     e.stopImmediatePropagation();
//         //code here
//   }
// });



//<select vegetables="my_menu" size="10">
//  option value="carrot_value">carrot</option>
//  option value="scallion_value">scallion</option>
//  option value="potato"_value">potato</option>
//  option value="onion_value">onion</option>
//  option value="canned_value">canned</option>
//</select>





//Button Click


//filter
// if(vegetables.include(input)||vegetables.include(input1)||vegetables.include(input3)){
//
// }
// else if(fruit.include(input)||fruit.include(input1)||fruit.include(input3){
//
// }
// else if(meat.include(input)||meat.include(input1)||meat.include(input3) {
//
// }
// else if(diary.include(input)||diary.include(input1)||diary.include(input3) {
//
// }
// else {
//   console.log("Sorry, we did not find any recipes.")
// }

//Links to external websites



//Appending results

const recipeModule = ( () => {
  const veggieSelection = document.querySelector('select[id="veggie-recipe"]');
  const diarySelection = document.querySelector('select[id="dairy-recipe"]');
  const meatSelection = document.querySelector('select[id="protein-recipe"]');
  const fruitSelection = document.querySelector('select[id="fruit-recipe"]');
  const resultContainer = document.querySelector('.result-container');
  const ingredients = document.querySelector('.ingredients');

  return  {
      //HANDLE SUBMIT FUNCTIONs
      handleSubmit: function(e) {
          e.preventDefault();
          //Get values from all selects
          const veggieValue = veggie-recipe.value;
          const diaryValue = diary-recipe.value;
          const proteinValue = protein-recipe.value;
          const fruitValue = fruit-recipe.value;
          //call
          this.handleFetch(veggieValue, diaryValue, proteinValue, fruitValue);
      },

      handleFetch: async function(veggieValue, diaryValue, proteinValue, fruitValue) {
          const dataRequest = await fetch(https://www.edamam.com/results/recipes/?search=${vegetableValue}&app_id=08ab47ee&app_key=fa5814a32eb2669676885dff6d983c44&health=${diaryValue}&diary=${meatValue}&to=30));
          const dataResponse = await dataRequest.json()
          console.log(dataResponse);
          const dataResults =  dataResponse.hits;

          this.render(dataResults);
      },
render: function(data) {
          const html = data.map((item) => {
              return this.renderResult(item);
          }).join('');

          resultContainer.innerHTML = html;
      },

      // return a <li> item
      renderResult: function(data) {
          //Title
          const title = data.recipe.label;
          //Labels
          const label = data.recipe.dietLabels.map(tag => {
              return <span>${tag}</span>
          }).join('');
          //Image
          const image = data.recipe.image;
          //Tags
          const tags = data.recipe.healthLabels.map(tag => {
          return <span>${tag}</span>
          }).join('');

          //Ingredients

          const ingred = data.recipe.ingredientLines.map(ingredient => {
          return <li class="ingredient">${ingredient}</li>;
          }).join('');

          //Link
          const link = data.recipe.url;

          return
              <div class="pill">
              <p class="title">${title}</p>
              <span class="label">${label}</span>
              <img src="${image}" alt="Recipe Image">
              <div class="tags">${tags}</div>
              <ol>
              ${ingred}
              </ol>
              <a href="${link}" target="_blank">Go to recipe</a>
              </div>

          }
      }

})();

const submitButton = document.querySelector('input[type="button"]');
submitButton.addEventListener('click',recipeModule.handleSubmit.bind(recipeModule));
