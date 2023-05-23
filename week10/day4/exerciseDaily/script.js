// exercise 1

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });
// // expected output: Array [3, 42, "foo"]


// Promise.all([promise1 ,promise2 ,promise3])
// .then(values =>console.log(values))
// .catch(error => console.error(error))

// exercise 2


const form = document.querySelector('#cityForm');
      const resultDiv = document.querySelector('#result');

      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const parisLat = document.querySelector('#parisLat').value;
        const parisLong = document.querySelector('#parisLong').value;
        const nyLat = document.querySelector('#nyLat').value;
        const nyLong = document.querySelector('#nyLong').value;

        const url1 = `https://api.sunrise-sunset.org/json?lat=${parisLat}&lng=${parisLong}&date=today`;
        const url2 = `https://api.sunrise-sunset.org/json?lat=${nyLat}&lng=${nyLong}&date=today`;

        try {
          const [parisData, nyData] = await Promise.all([
            fetch(url1).then(res => res.json()),
            fetch(url2).then(res => res.json())
          ]);

          const parisSunrise = parisData.results.sunrise;
          const nySunrise = nyData.results.sunrise;

          resultDiv.innerHTML = `
            <p>Paris Sunrise: ${parisSunrise}</p>
            <p>New York Sunrise: ${nySunrise}</p>
          `;
        } catch (error) {
          console.error(error);
        }
      });
        //by clicking on the button we created
        //We create the variables and each one pointing to the value of each tag
        //we create 2 variables with the url of paris and new york
        
        // hay q seguir la explicacion antes de subirlo
      