import { useState } from "react";

export const Home = () => {
  //let name = 'mario'

  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {

    name === 'mario' ? (setAge(30)) : (setAge(25));
    name === 'mario' ? setName('luigi') : setName('mario')
  }

//     if (name === "mario") {
//       setName("luigi");
//       setAge(30);
//     } else {
//       setName("mario");
//       setAge(25);
//     }
//   };

  return (
    <div className="home">
      <h2>homePage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};
