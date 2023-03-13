const story = document.getElementById("story");
      const shuffleButton = document.getElementById("lib-button");

      const stories = [
"Once upon a time, there was a {{adjective}} {{noun}} named {{person}} who loved to {{verb}} in {{place}}.",
"The {{noun}} was {{adjective}} and it belonged to {{person}} who always wanted to {{verb}} it at {{place}}.",
"There was a {{adjective}} {{noun}} who always wanted to visit {{place}} and {{person}} helped them {{verb}} there."
];


      shuffleButton.addEventListener("click", () => {
        event.preventDefault();
        const randomIndex = Math.floor(Math.random() * stories.length);
        const chosenStory = stories[randomIndex];
        
        const noun = document.getElementById("noun").value.trim();
        const adjective = document.getElementById("adjective").value.trim();
        const person = document.getElementById("person").value.trim();
        const verb = document.getElementById("verb").value.trim();
        const place = document.getElementById("place").value.trim();

        const formattedStory = chosenStory
          .replace("{{noun}}", noun)
          .replace("{{adjective}}", adjective)
          .replace("{{person}}", person)
          .replace("{{verb}}", verb)
          .replace("{{place}}", place);

        if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill in all the values.");
        return;
        } else story.textContent = formattedStory;
        })