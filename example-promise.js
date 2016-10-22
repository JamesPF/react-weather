// function getTempCallback (location, callback) {
//   // Success case - no error, just a temp
//   callback(undefined, 78);
//   // If there's an error - no temp
//   callback('City not found');
// }

// getTempCallback('Philadelphia', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });

// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     resolve(79);
//     reject('City not found');
//   });
// }

function addPromise (a,b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('These are not both numbers.');
    }
  });
}

addPromise(2,3).then(function (sum) {
  console.log('Success: ' + sum);
}, function (err) {
  console.log('Error: ' + err);
})