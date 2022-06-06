// Authors: Pichy Jumpholwong, Shimao Zhou, Zibo Chen, Travis Carlson
// Created: 18 May 2022
// License: Public Domain


// All used global data
var recipesArray = [];
fetch('js/recipes.json')
  .then(response => response.json())
  .then(data => recipesArray = data);
var recipeDictionary = {};
var ingredientInput = [];
var outputArray = [];
console.log("Version 1.1.0");
var veggie = document.getElementById('veggie-recipe');
var fruit = document.getElementById('fruit-recipe');
var protien = document.getElementById('protein-recipe');
var dairy = document.getElementById('dairy-recipe');
var grain = document.getElementById('grain-recipe');
var misc = document.getElementById('misc-recipe');
var outputEl = document.getElementById('output');


//Turns the imported recipe data into a dictionary organized by ingredients
function dictionizeRecipes(){
  recipeDictionary = {};
  recipeDictionary["None"] = [];
  for (i = 0; i < recipesArray.length; i++){
    for (k = 0; k < recipesArray[i].ingredients.length; k++){
      if (recipeDictionary[recipesArray[i].ingredients[k]]==null){
        recipeDictionary[recipesArray[i].ingredients[k]]=[];
      }
      recipeDictionary[recipesArray[i].ingredients[k]].push(recipesArray[i]);
    }
  }
}

//Gets ingredient input from site elements, stores into ingredientInput array, might change if the website changes
function getInput(){
  ingredientInput[0] = veggie.options[veggie.selectedIndex].value;
  ingredientInput[1] = fruit.options[fruit.selectedIndex].value;
  ingredientInput[2] = protien.options[protien.selectedIndex].value;
  ingredientInput[3] = dairy.options[dairy.selectedIndex].value;
  ingredientInput[4] = grain.options[grain.selectedIndex].value;
  ingredientInput[5] = misc.options[misc.selectedIndex].value;
}

//Build array based on ingredientInput, lightly sorted
function buildOutput(){
  for (m = 0; m < outputArray.length; m++){
    outputArray[m].priority = 0;
  }
  outputArray = [];
  for (i = 0; i < ingredientInput.length; i++){
    if (recipeDictionary[ingredientInput[i]] == null){
      recipeDictionary[ingredientInput[i]] = [];
    }
    for (k = 0; k < recipeDictionary[ingredientInput[i]].length; k++){
      if (outputArray.length==0){
        outputArray[0] = recipeDictionary[ingredientInput[i]][k];
      }
      else{
        var exists = false;
        for (n = 0; n < outputArray.length; n++){
          if (outputArray[n].name==recipeDictionary[ingredientInput[i]][k].name){
            exists = true;
            outputArray[n].priority += 1;
          }
        }
        if (!exists){
          outputArray[outputArray.length] = recipeDictionary[ingredientInput[i]][k];
        }
      }
    }
  }
}

//Build array based
function sortOutput(){
  for (i = 0; i < outputArray.length - 1; i++){
    for (k = 0; k < outputArray.length - i - 1; k++){
      if (outputArray[k].priority < outputArray[k + 1].priority){
        var temp = outputArray[k];
        outputArray[k] = outputArray[k + 1];
        outputArray[k + 1] = temp;
      }
    }
  }
}

//Probably a nicer way to  do this, but oh well
function buildSite(){
  outputEl.innerHTML = '';
  for (i = 0; i < outputArray.length; i++){
    var tempRecipe = document.createElement("div");
    tempRecipe.setAttribute("class", "recipebox");

    var tempImage = document.createElement('img');
    tempImage.setAttribute("src", outputArray[i].image);
    tempImage.setAttribute("class", "recipeimage");
    tempRecipe.appendChild(tempImage);

    var tempTextBox = document.createElement("div");
    tempTextBox.setAttribute("class", "recipetextbox");

    var tempHyperLink = document.createElement('a');
    tempHyperLink.setAttribute("href", outputArray[i].hyperlink);

    var tempTitle = document.createElement('p');
    tempTitle.innerHTML = outputArray[i].name;

    if (i==0){
      tempTitle.innerHTML += ' - BEST MATCH';
    }
    tempHyperLink.appendChild(tempTitle);
    tempTextBox.appendChild(tempHyperLink);
    var ingredientList = "Ingredients:";
    for (k = 0; k < outputArray[i].ingredients.length; k++){
      ingredientList += " " + outputArray[i].ingredients[k] + ",";
    }
    var tempIngredientList = document.createElement('p');
    tempIngredientList.innerHTML = ingredientList.slice(0, -1);
    var tempDescription = document.createElement('p');
    tempDescription.innerHTML = outputArray[i].description;
    tempTextBox.appendChild(tempIngredientList);
    tempTextBox.appendChild(tempDescription);
    tempRecipe.appendChild(tempTextBox);
    outputEl.appendChild(tempRecipe);
  }
}

function processOutput(){
  getInput();
  dictionizeRecipes();
  buildOutput();
  sortOutput();
  buildSite();
}


var buttonEl = document.getElementById("submit");
buttonEl.addEventListener("click", processOutput);
