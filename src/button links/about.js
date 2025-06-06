/*
just a heading 'What you should expect'
followed by a <p> of text saying what it is about

*/

export function generateAbout() {
    const contentDiv = document.querySelector('#content');

    const h4 = document.createElement('h4')
    h4.textContent = 'About Saint leClerc'

    const description = document.createElement('p')
    description.textContent = 'The restaurant offers a dining experience filled with flavor and warmth. The chefs create a diverse menu that celebrates local ingredients, with options ranging from classic dishes to innovative fusion options. The inviting atmosphere is suitable for gatherings, friendly get-togethers, or a romantic evening.'
    description.classList.add('description')

    contentDiv.append(h4,description)
}