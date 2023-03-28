const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

   const usernames =[]
   gameInfo.forEach(player =>{
    usernames.push(player.username + '!')
   })
   console.log(usernames)

//    exercise 2

const winers =[]
gameInfo.forEach(player =>{
    if(player.score > 5){
        winers.push(player.username)
    }
});
console.log(winers)

// exercise 3

const TotalScore = gameInfo.reduce((acc,player) =>{
    return acc + player.score},0);
console.log(TotalScore)