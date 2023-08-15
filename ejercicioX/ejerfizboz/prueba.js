function fizboz(num) {
    for(i=0;i<100;i++){
  if (num % 3 === 0 && num %2===0) {
    console.log("fizz buzz");
  } else if (num % 5 === 0 && num %3 !==0) {
    console.log("buzz");
  }else if (num % 5 !== 0 && num %3 ===0) {
    console.log("fizz");
  }else
  console.log(num)
}
}

fizboz()