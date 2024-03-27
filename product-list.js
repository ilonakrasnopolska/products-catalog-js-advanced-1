export function render(data) {
    console.log(data)
    const container = document.createElement('div')
    container.classList.add(
        'container',
        'd-flex',
        'justify-content-between',
        'flex-wrap',
        'py-4'
    )

    for (const product of data) {
        //create elements
        const productCard = document.createElement('div')
        const image = document.createElement('img')
        const cardBody = document.createElement('div')
        const title = document.createElement('h5')
        const price = document.createElement('p')
        const detailsButton = document.createElement('a')

        //add styles and class name
        productCard.style.width = '18%'
        productCard.classList.add('card', 'my-2')
        image.classList.add('card-image-top')
        cardBody.classList.add('card-body')
        title.classList.add('card-title')
        price.classList.add('card-text')
        detailsButton.classList.add('btn', 'btn-primary')

        //add content
        image.src = product.category.image
        image.alt = product.title
        title.textContent = product.title
        price.textContent = product.price
        detailsButton.textContent = 'More info'
        detailsButton.href = `products/${product.id}`


        //append all
        productCard.append(image, cardBody)
        cardBody.append(title, price, detailsButton)

        container.append(productCard)

            }
    return container
}