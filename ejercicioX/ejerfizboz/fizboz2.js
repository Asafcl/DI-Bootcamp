function fizzbuzz(num) {
  for (i = 1; i <= 100; i++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("fizz and buzz");
    } else if (num % 3 === 0) {
      console.log("fizz");
    } else if (num % 5 === 0) {
      console.log("buzz");
    }else
    console.log(num);
  }
}

fizzbuzz(10);
