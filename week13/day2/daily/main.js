// const largeNumber = 356;

// export {largeNumber};



// exercise 2(3-4)

// const largeNumber = 356;
// module.exports = {largeNumber}


// exercise 3


const largeNumber = 356;

function getCurrentDate() {
  const now = new Date();
  console.log("now:", now);
  return now;
}

module.exports = { largeNumber, getCurrentDate };