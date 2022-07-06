const time = process.argv.slice(2);
const timer = () => {
  for (const elm of time) { 
    const delay = Number(elm)
    if (delay > 0 && (typeof delay === "number")) { 
      setTimeout(() => {
      process.stdout.write('\x07');
    }, 1000 * delay);
    }
  }
};

timer();



// const time = process.argv.slice(2);
// const timer = () => {
//   for (const elm of time) {
//     setTimeout(() => {
//       process.stdout.write('\x07');
//     }, 1000 * elm);
//   }
// };

// timer();