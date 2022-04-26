// Authors: Pichy Jumpholwong and Zac Nakamura
// Created: 24 April 2022
// License: Public Domain

//Declaring array
myTransport = ["Loop", "Metro", "Bike", "Friend's Cars", "Skateboard", "Golf Cart"];

//Declaring object for data
myMainRide = {
    make: "Volkswagen",
    model: "Beetle",
    color: "Teal",
    year: "1960",
    age: function() {
        return 2019 - age;
    }
}

//Referencing variables
// myTransport[0]
// myTransport[1]
// myTransport[2]
// myTransport[3]
// myTransport[4]
// myTransport[5]

//Referencing elements
// myMainRide.make
// myMainRide.model
// myMainRide.age

// ƒ () {
//         return 2019 - age;
//     }

//output
document.writeln("We Tokyo drifting around in: ", myTransport, "</br>");

document.writeln("Throwing it back in the: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
