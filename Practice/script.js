// 1. First we define the Promise
let p = new Promise((resolve, reject) => {
  if (1 + 1 === 5) {
    // How should it behave if resolved
    resolve('you are a Math genius!');
  } else {
    // How should it behave if rejected
    reject('You better learn some Math!');
  }
});

// 2. Then (no pun intended) we run the Promise
p.then(message => {
  // Whatever code you want to call when the Promise is successful
  console.log(`I guess ${message}`);
}).catch(message => {
  // Catch the error, in case the Promise is rejected
  console.log(`Hey, kid! ${message}`);
});
