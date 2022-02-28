// const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) { 
//     return name.toUpperCase();
//   });
//   const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
//     name => name.toUpperCase()
//   );
//   console.log(upperizedNames);
//////////////////////////////////////
// const squares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(square =>square * square);

// console.log(...squares);
//////////////////////////////////////

// constructor
// function IceCream() {
//     this.scoops = 0;
//   }
  
//   // adds scoop to ice cream
//   IceCream.prototype.addScoop = function() {
//       const cone = this;
//     setTimeout(function() {
//       cone.scoops++;
//       console.log('scoop added!');
//     }, 0.5);
//   };
  
//   const dessert = new IceCream();
//   dessert.addScoop();
//   console.log(dessert.scoops);

//////////////////////////////////////
// Defaults and destructuring arrays
/////////////////////////////////////
// function createGrid([width = 5, height = 5]) {
//     return `Generates a ${width} x ${height} grid`;
//   }
  
//   createGrid([]); // Generates a 5 x 5 grid
//   createGrid([2]); // Generates a 2 x 5 grid
//   createGrid([2, 3]); // Generates a 2 x 3 grid
//   createGrid([undefined, 3]); // Generates a 5 x 3 grid


//////////////////////////////////////////
// function createSundae({scoops = 1, toppings = ['Hot Fudge']} = {}) {
//     const scoopText = scoops === 1 ? 'scoop' : 'scoops';
//     return `Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`;
//   }
//   console.log(createSundae());
//   console.log(createSundae({scoops:2, toppings: ['water']}));



/////////////////////////////////////////////////////
// function houseDescriptor({houseColor = 'green', shutterColors = ['red']} = {}) {
//     return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
//   }

// console.log(houseDescriptor({houseColor: 'red', shutterColors: ['white', 'gray', 'pink']}));  
// console.log(houseDescriptor({houseColor: 'red'}));  
// console.log(houseDescriptor({}));



// function buildHouse({floors=1, color='red', walls='brick'}={}) {
//      return `Your house has ${floors} floor(s) with ${color} ${walls} walls.`   
// }

// console.log(buildHouse()); // Your house has 1 floor(s) with red brick walls.
// console.log(buildHouse({})); // Your house has 1 floor(s) with red brick walls.
// console.log(buildHouse({floors: 3, color: 'yellow'})); // Your house has 3 floor(s) with yellow brick walls.
///////////////////////////////////////////////////////////
// class Animal {
//     constructor(name = 'Sprinkles', energy = 100) {
//       this.name = name;
//       this.energy = energy;
//     }
  
//     eat(food) {
//       this.energy += food / 3;
//     }
//   }
// console.log(typeof(Animal));
////////////////////////////////////////////////////////////
// class Plane {
//     constructor(numEngines) {
//       this.numEngines = numEngines;
//       this.enginesActive = false;
//     }
  
//     static badWeather(planes) {
//       for (let plane of planes) {
//         plane.enginesActive = false;
//       }
//     }
  
//     startEngines() {
//       console.log('starting engines…');
//       this.enginesActive = true;
//     }
//   }
//   let plane1 = new Plane()
//   let plane2 = new Plane()
//   let plane3 = new Plane()
// //   See how badWeather() has the word static in front of it while startEngines() doesn't? 
// // That makes badWeather() a method that's accessed directly on the Plane class, so you can call it like this:
//   Plane.badWeather([plane1, plane2, plane3]);

//////////////////////////////////////////////////////////////
class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
	}
}
class Bicycle extends Vehicle {
    constructor(color, wheels, horn){
         super(color, wheels = 2, horn = 'honk honk');
         this.color = color;
         this.wheels = wheels;
         this.horn = horn;
    }
}

// your code goes here


const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk

