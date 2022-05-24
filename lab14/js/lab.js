// Authors: Pichy Jumpholwong and Zac Nakamura
// Created: 23 May 2022
// License: Public Domain

function filter(array, conditionFunction) {
      var validValues = [];
      for (var index = 0; index < array.length; index++) {
        //console.log(i);
        if (conditionFunction(array[index])) {
          // console.log(theArray);
          validValues.push(array[index]);
          // console.log(theArray);
        }
      }
    }

    var cart = [
  {
    "id": "123456",
    "name": "banana",
    "image": "56fca57eb239dc38e355c86b-1459398061689-2013-Le-Tour-de-Langkawi-Stage-5-3.jpg",
    "price": 12,
    "discount_price": 8,
    "qty": 4
  },
  {
    "id": "123",
    "name": "Christ come",
    "image": "56fcb471b239dc38e355c86c-1459401869191-klcc.jpg",
    "price": 12.9,
    "discount_price": 11.9,
    "qty": 4
  }
]
    cart = filter(cart, function(e) {
      return e.id !== '123';
    });

    console.log(cart);
