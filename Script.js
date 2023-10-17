const product = [
    {
        id: 0,
        image: './image/images (10).jpg',
        title: 'shoes',
        price: 210,
        ratingStar: 2
    },
    {
        id: 1,
        image: './image/download (5).jpg',
        title: 'shirt',
        price: 2330,
        ratingStar: 3

    },
    {
        id: 2,
        image: './image/download (9).jpg',
        title: 'shoes',
        price: 250,
        ratingStar: 1

    },
    {
        id: 3,
        image: './image/new.jpg',
        title: 'leaf',
        price: 290,
        ratingStar: 4

    },
    {
        id: 4,
        image: './image/new.jpg',
        title: 'leaf',
        price: 2220,
        ratingStar: 5

    },
    {
        id: 5,
        image: './image/new.jpg',
        title: 'leaf',
        price: 230,
        ratingStar: 2

    },
]

let i = 0
document.getElementById('root').innerHTML = product.map((item) => {
    var { image, title, price, ratingStar } = item
    return (
        `<div class='box'>
            <div class ='img-box'>
                <img class ='image' src='${image}'></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>
                <h2>Rating ${ratingStar}</h2>
                <button onclick='addtocart(${i++})'>Add to cart</button>
            </div>
        </div>`
    )
}).join('')



var cart = []

function addtocart(a) {
    cart.push({ ...product[a] })
    displaycart()
}

function delElement(a) {
    cart.splice(a, 1)
    displaycart()
}


function displaycart(a) {
    let j = 0, total = 0
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "your cart is e mpty"
        document.getElementById('total').innerHTML = "$ " + 0 + ".00"
    } else
        document.getElementById('cartItem').innerHTML = cart.map((item) => {
            var { image, title, price } = item
            total = total + price
            document.getElementById("total").innerHTML = "$ " + total + '.00'
            return (
                `<div class = 'cart-item'>
                <div class= 'row-img'>
                    <img class= 'rowimg' src = ${image}>
                </div>
                <p style = 'font-size: 12px'>${title}</p>
                <h2 style= 'font-size:15px'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            )
        }).join('')
}

const applyFilters = () => {
    const minPrice = parseFloat(document.getElementById("minPrice").value) || 0
    const maxPrice = parseFloat(document.getElementById("maxPrice").value) || Number.MAX_VALUE
    const minRating = parseFloat(document.getElementById("rattingInput").value) || 0
    const searchValue = document.getElementById("searchInput").value.toLowerCase()

    const itemList = document.getElementById("root")

    const filteredProducts = product.filter(item => {
        const meetsPriceFilter = item.price >= minPrice && item.price <= maxPrice
        const meetsRatingFilter = item.ratingStar == minRating
        const meetsSearchFilter = item.title.toLowerCase().includes(searchValue)

        return meetsPriceFilter && meetsRatingFilter && meetsSearchFilter
    })

    const filteredHTML = filteredProducts.map(item => {
        const { image, title, price, ratingStar } = item
        return `
        <div class='box'>
            <div class ='img-box'>
                <img class ='image' src='${image}'></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>
                <h2>Rating ${ratingStar}</h2>
                <button onclick='addtocart(${item.id})'>Add to cart</button>
            </div>
        </div>
    `
    }).join('')

    itemList.innerHTML = filteredHTML
}



