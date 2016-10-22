var names = ['James', 'Mike', 'Kim', 'Yadi'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrow', name);
// });
//
// names.forEach((name) => console.log('arrow 2', name));
//
// var returnMe = (name) => name + '!';

// console.log(returnMe('James'));

// var person = {
//   name: 'James',
//   greet: function (name) {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

function add (a,b) {
  return a + b;
}

var addStatement = (a, b) => { return a+b; };

var addExpression = (a, b) => a+b;

console.log(add(1,3));
console.log(add(9,0));
console.log(addStatement(1,2));
console.log(addExpression(4,4));
