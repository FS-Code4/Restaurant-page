import restaurant from '/src/Restaurant.jpg'

export function generateHTML() {
        const contentDiv = document.querySelector('#content');

        const h1 = document.createElement('h1');
        h1.textContent = 'El cafe del torro';

         const paragraph = document.createElement('paragraph');
         paragraph.textContent = 'Beautiful Restaurant on the water'

         const img = document.createElement('img');
         img.src = restaurant;
         img.alt = 'Restaurant';
         

        contentDiv.append(h1, paragraph, img)
    
}
