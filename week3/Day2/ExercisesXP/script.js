
    // <!-- mandatory excercise-->

    // !-- store you favorite food into a variable -->
    
    const favoriteFood = 'apples';

        // Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
    const favoriteMeal = "breakfast";

// now -- console.log I eat <favorite food> at every <favorite meal>

// string concatenation
console.log ('I eat ' + favoriteFood + ' at every ' + favoriteMeal);

// template literal backticks mac shift option = `

console.log (` I eat ${favoriteFood} at every ${favoriteMeal}`);



  

// part I
// using this array:
    const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

        // create a variable named myWatchedSeriesLeghth that is iqual to the number of series in the myWatchedSeries
    var myWatchedSeriesLength = myWatchedSeries.length;
    console.log (myWatchedSeriesLength);
    
    // Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
    // For example : I watched 3 series : black mirror, money heist, and the big bang theory
   
    // CONCATENATION
    const myWatchedSeriesSentence = (myWatchedSeries[0] + ", " + myWatchedSeries[1] + ", " + myWatchedSeries[2]);
    console.log (myWatchedSeriesSentence);

    // TEMPLATE LITERAL
    // const myWatchedSeriesSentence = `${myWatchedSeries[0], ${myWatchedSeries[1]}, ${myWatchedSeries[2]`};
    //  console.log(myWatchedSeriesSentence);
    // console.log a sentense usig both of the variables created above 
    // For example : I watched 3 series : black mirror, money heist, and the big bang theory
myWatchedSeries[2] ='friends';
console.log(myWatchedSeries);
    // Add, at the end of the array, the name of another series you watched.
    myWatchedSeries.push('breaking bad');
    console.log(myWatchedSeries);

    // Add, at the beginning of the array, the name of your favorite series.
    myWatchedSeries.unshift('batman');
    console.log(myWatchedSeries);
    // Delete the series “black mirror”.
    delete myWatchedSeries [1];
    console.log(myWatchedSeries);
    // Console.log the third letter of the series “money heist”.
    const moneyHeist = myWatchedSeries[2];
    console.log(moneyHeist[2]);
    // Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.
    console.log(myWatchedSeries);




    // exercise 3

    let temperature = 30;
    console.log(temperature + ' °C = ' + ((temperature)/5*9+32) + ' °F');





    // EXCERSICE 4

    let c;
    let a = 34;
    let b = 21;

    console.log(a+b) //first expression
    //1. Prediction: 55 because 34 + 21 = 55
    // Actual: 55

    a = 2;

    console.log(a+b) //second expression
    //2. Prediction: 23 because a chanche to number 2, 2 + 21 = 23
    // Actual:23

    //3. i think the c value is indeterminate
    console.log(c)
    // the resulte is undefined

    // 4.
    console.log(3 + 4 + '5');
    // the result is 75



    // EXCERSICE 5

typeof(15)
// Prediction:number 15     
// Actual: number

typeof(5.5)
// Prediction:number float      whith decimal is a float 
// Actual:number

typeof(NaN)
// Prediction:undefined      isnt a number
// Actual:number

typeof("hello")
// Prediction:string      with "" is a string
// Actual:string

typeof(true)
// Prediction:1      because true is a number 1
// Actual:boolean

typeof(1 != 2)
// Prediction:true     because 1 is diferent to 2
// Actual:boolean

"hamburger" + "s"
// Prediction:hamburgers       add a string to the first string
// Actual:hamburgers

"hamburgers" - "s"
// Prediction:undefined       the operator - is undefined
// Actual:NaN

"1" + "3"
// Prediction:13    add the string 1 and string 3 whitout space
// Actual:'13'

"1" - "3"
// Prediction:NaN    the - isnt define to operate
// Actual:-2

"johnny" + 5
// Prediction:NaN   string add number isnt compatible
// Actual:'johnny5'

"johnny" - 5
// Prediction:NaN    the sentence - isnt define to operate
// Actual:NaN

99 * "hello"  
// Prediction:NaN   the simbol * isnt define to operate
// Actual:NaN

1 != 1
// Prediction:boolean  true or false is boolean
// Actual:false

1 == "1"
// Prediction:true  is iqual the number 1 and 1
// Actual:true

1 === "1"
// Prediction:false the number 1 and 1 tring in  is diferent isnt exactly iqual
// Actual:false



    // EXCERSICE 6

    5 + "34"
// Prediction:534   add 5 to the second string
// Actual:'534'

5 - "4"
// Prediction:1     
// Actual:1

10 % 5
// Prediction:0       the remainder is 0
// Actual:0

5 % 10
// Prediction:5     the remainder is 5
// Actual:5

"Java" + "Script"
// Prediction:'JavaScript'     add string without space
// Actual:'JavaScript'

" " + " "             
// Prediction:'  '       add 2 string space
// Actual:'  '

" " + 0       
// Prediction:' 0' add a space to string 0      
// Actual:' 0'

true + true
// Prediction:true       true and true is always true
// Actual:2

true + false
// Prediction:1         (true=1 + false=0) = 1
// Actual:1

false + true
// Prediction:1        (false=0 + true = 1) = 1
// Actual:1

false - true
// Prediction:-1      (false=0 + true = -1) = -1
// Actual:-1

!true
// Prediction:false     isnt true= false
// Actual:false

3 - 4
// Prediction:-1        
// Actual:-1

"Bob" - "bill"
// Prediction:NaN    the operator - isnt define to string
// Actual:NaN

