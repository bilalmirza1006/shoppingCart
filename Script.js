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



// const product = [
//     {
//         id: 0,
//         image: './image/new.jpg',
//         title: 'My neww product',
//         price: 240,
//     },
//     {
//         id: 1,
//         image: './image.new2.jpg',
//         title: 'My neww product',
//         price: 250,
//     },
//     {
//         id: 2,
//         image: './image.2(1).jpg',
//         title: 'My neww product',
//         price: 230,
//     },
//     {
//         id: 3,
//         image: './image.2(1).jpg',
//         title: 'My neww product',
//         price: 230,
//     },
//     {
//         id: 4,
//         image: './image.2(1).jpg',
//         title: 'My neww product',
//         price: 230,
//     },
//     {
//         id: 5,
//         image: './image.2(1).jpg',
//         title: 'My neww product',
//         price: 230,
//     },
// ];

// const categories = product.map((item) => item.title);

// let i = 0;
// document.getElementById('root').innerHTML = product.map((item) => {
//     var { image, title, price } = item;
//     return (
//         `<div class='box'>
//             <div class ='img-box'>
//                 <img class ='image' src='${image}'></img>
//             </div>
//             <div class='bottom'>
//                 <p>${title}</p>
//                 <h2>$ ${price}.00</h2>
//                 <button onclick='addtocart(${i++})'>Add to cart</button>
//             </div>
//         </div>`
//     );
// }).join('');
// const categories = product.map((item) => { return item })
// let i = 0;
// document.getElementById('root').innerHTML = categories.map((item) => {
//     var { image, title, price } = item;
//     return (
//         `<div class='box'>
//             <div class ='img-box'>
//                 <img class ='image' src = ${image}</img>
//             </div>
//             console.log('new', image)
//         <div class = 'bottom'>
//             <p>${title}</p>
//             <h2>$ ${price}.00</h2>` +
//         "<button onclick = 'addtocart(" + (i++) + ")'>Add to cart</button>" +
//         `</div>
//          </div>`
//     )
// }).join('')





