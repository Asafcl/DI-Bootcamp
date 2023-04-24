// //exercise 1
// // ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result); //bread, carrot, potato, chicken, apple, orange

// // ------2------
// const country = "USA";
// console.log([...country]);// USA, is 'U', 'S', 'A'

// // ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);// undefined,undefined


//exercise 2

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


    //  exercise 2.1

// const welcomeStudents =[]

// users.map(function(user,index) {
//         welcomeStudents[index]= `welcome ${user.firstName}`
// })

// console.log(welcomeStudents)

    //exercise 2.2

    // let result = users.filter(user => user.role === 'Full Stack Resident')
    // console.log(result)

   
    // exercise 2.3

    // let result = users.filter(user => (user.role === 'Full Stack Resident'))
    // .map( user => ` ${user.lastName}`)

    // console.log(result)


    // exercise 3

    // const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

    //     let result = epic.reduce((acum,word) => {
    //         return acum =`${acum} ${word}`
    //     })

    //     console.log (result)

    // exercise 4

    const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

        
               
         const cursePassed = students.filter(student => (student.isPassed))
        .forEach(student => console.log(`good job ${student.name} you passed the course in ${student.course}`))
        
        