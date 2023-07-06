const product = [
    {
        id: 0,
        image: './image/new.jpg',
        title: 'My neww product',
        price: 230,
    },
    {
        id: 1,
        image: './image/new.jpg',
        title: 'My neww product',
        price: 2330,

    },
    {
        id: 2,
        image: './image/new.jpg',
        title: 'My neww dddproduct',
        price: 230,

    },
    {
        id: 3,
        image: './image/new.jpg',
        title: 'My neww product',
        price: 230,

    },
    {
        id: 4,
        image: './image/new.jpg',
        title: 'My neww product',
        price: 230,

    },
    {
        id: 5,
        image: './image/new.jpg',
        title: 'My neww product',
        price: 230,

    },
];
const categories = product.map((item) => item.title);

let i = 0;
document.getElementById('root').innerHTML = product.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class ='img-box'>
                <img class ='image' src='${image}'></img>
            </div>
            <div class='bottom'>
                <p>${title}</p>
                <h2>$ ${price}.00</h2>
                <button onclick='addtocart(${i++})'>Add to cart</button>
            </div>
        </div>`
    );
}).join('');

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
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "your cart is e mpty";
        document.getElementById('total').innerHTML = "$ " + 0 + ".00"
    } else
        document.getElementById('cartItem').innerHTML = cart.map((item) => {
            var { image, title, price } = item;
            total = total + price
            document.getElementById("total").innerHTML = "$ " + total + '.00'
            return (
                `<div class = 'cart-item'>
                <div class= 'row-img'>
                    <img class= 'rowimg' src = ${image}>
                </div>
                <p style = 'font-size: 12px;'>${title}</p>
                <h2 style= 'font-size:15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            )
        }).join('')
}

