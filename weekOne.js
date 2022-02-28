// let message = "my name is malik muhammad jahangir\nI'm a computer programmer";
// console.log(message);
// console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++');
// let message2 = `my name is malik muhammad jahangir
// I'm a computer programmer`;
// console.log(message2);


///////////////////////////////////////////////////////////////////////////////////////////
// const cheetah = {
//     name: 'Cheetah',
//     scientificName: 'Acinonyx jubatus',
//     lifespan: '10-12 years',
//     speed: '68-75 mph',
//     diet: 'carnivore',
//     summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
//     fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
// };

// creates an animal trading card
// function createAnimalTradingCardHTML(animal) {
//     const cardHTML = `<div class="card">
//         <h3 class="name">${animal.name}</h3>
//         <img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
//         <div class="description">
//             <p class="fact">${animal.fact}</p>
//             <ul class="details">
//                 <li><span class="bold">Scientific Name</span>: ${animal.scientificName}</li>
//                 <li><span class="bold">Average Lifespan</span>: ${animal.lifespan}</li>
//                 <li><span class="bold">Average Speed</span>: ${animal.speed}</li>
//                 <li><span class="bold">Diet</span>: ${animal.diet}</li> 
//             </ul>
//             <p class="brief">${animal.summary}</p>
//         </div>
//     </div>`;

//     return cardHTML;
// }

// console.log(createAnimalTradingCardHTML(cheetah));


//////////////////////////////////////////////////////////////////////////////////////////


// const circle = {
//     radius: 10,
//     color: 'orange',
//     getArea: function() {
//       return Math.PI * this.radius * this.radius;
//     },
//     getCircumference: function() {
//       return 2 * Math.PI * this.radius;
//     }
//   };
  
//   let {radius, getArea, getCircumference} = circle;


// console.log(getArea()); // here Nan Becase this.radius is not work in OBJ, it work in class..

/////////////////////////////////////////////////////////////////////////////////////////
// destructuring technique...
// const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

// const [one, , , two , , , ,three] = things;

// const colors = `List of Colors
// 1. ${one}
// 2. ${two}
// 3. ${three}`;

// console.log(colors);

/////////////////////////////////////////////////////////////////////////////////////////
// const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// // your code goes here
// for(const day of days){
//     console.log(day.charAt(0).toUpperCase() + day.slice(1));
// }



/////////////////////////////////////////////////////////////////////////////////////////
// Rest parameter
// const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
// const [total, subtotal, tax, ...items] = order;
// console.log(total, subtotal, tax, items);
// // -------------------------------------------------
// function average(...numbers) {
//     let total = 0;
//     for(const num of numbers){
//         total += num;
//     }
//     if (numbers.length === 0 ) {
//         return total;
//     }
//     return total/numbers.length;
// }

// console.log(average(2, 6));
// console.log(average(2, 3, 3, 5, 7, 10));
// console.log(average(7, 1432, 12, 13, 100));
// console.log(average());
/////////////////////////////////////////////////////////////////////////////////////////
//



/////////////////////////////////////////////////////////////////////////////////////////

