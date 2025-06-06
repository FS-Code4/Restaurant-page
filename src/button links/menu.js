/*
Fill with bullet point list of menu items
*/

export function generateMenu() {
    const contentDiv = document.querySelector('#content');

    const h2 = document.createElement('h2');
    h2.textContent = 'Regular options';

    const item1 = document.createElement('li');
    item1.textContent = 'Chicken Tacos with choice of sauce ~ 10$'

    const item2 = document.createElement('li')
    item2.textContent = 'Burrito Wrap with choice of meat ~ 12$'

    const item3 = document.createElement('li')
    item3.textContent = 'Chicken with rice ~ 9.50$'

    const h3 = document.createElement('h3');
    h3.textContent = 'Drinks'

    const item4 = document.createElement('li');
    item4.textContent = 'Coca Cola ~ 1.50$'

    const item5 = document.createElement('li');
    item5.textContent = 'Jarritos ~ 3$'

    const item6 = document.createElement('li');
    item6.textContent = 'Ice tea ~ 2$'

    contentDiv.append(h2,item1, item2, item3, h3, item4, item5, item6)
}