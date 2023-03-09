
        const h1 = document.querySelector('h1');
        console.log(h1.textContent);
    
        const paragraphs = document.querySelectorAll('p');
        const lastParagraph = paragraphs[paragraphs.length-1];
        lastParagraph.remove();
    
        const h2 = document.querySelector('h2');
        h2.addEventListener('click', () => {
            h2.style.backgroundColor = 'red';
        });
    
        const h3 = document.querySelector('h3');
        h3.addEventListener('click', () => {
            h3.style.display = 'none';
        });
    
        const boldBtn = document.querySelector('#bold-btn');
        boldBtn.addEventListener('click', () => {
            paragraphs.forEach(p => {
                p.style.fontWeight = 'bold';
            });
        });
    
        const getRandomSize = () => Math.floor(Math.random() * 101);
    
        h1.addEventListener('mouseenter', () => {
            h1.style.fontSize = `${getRandomSize()}px`;
        });
    
        paragraphs[1].addEventListener('mouseenter', () => {
            paragraphs[1].classList.add('fade');
        });