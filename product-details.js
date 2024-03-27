export function render(data) {
    console.log(data)
    const container = document.createElement('div')
    container.classList.add('container', 'py-4')
    container.innerHTML = `
    <h1>More info about product ${data.title}</h1>
    <img src="${data.category.image}" alt="${data.title}" style="max-width: 300px">
    <p class="lead">${data.description}</p>
    <p class="display-3">${data.price}</p>
    `
    return container
}