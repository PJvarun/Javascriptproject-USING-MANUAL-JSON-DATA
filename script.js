const product=[
{
    id:1,
    image:"img/cat-1.jpg",
    title:"Headphones",
    price:'$20'
},
{
    id:2,
    image:"img/cat-2.jpg",
    title:"smartwatch",
    price:'$30'
},
{
    id:3,
    image:"img/cat-3.jpg",
    title:"microphone",
    price:'$40'
},
{
    id:4,
    image:"img/cat-4.jpg",
    title:"microphone",
    price:'$50'
},
{
    id:5,
    image:"img/cat-5.jpg",
    title:"smartwatch",
    price:'$30'
},
{
    id:6,
    image:"img/cat-6.jpg",
    title:"microphone",
    price:'$40'
},
{
    id:7,
    image:"img/cat-7.jpg",
    title:"microphone",
    price:'$50'
},
{
    id:8,
    image:"img/cat-8.jpg",
    title:"microphone",
    price:'$50'
},
]

const categaries = [...new Set(product.map((item)=>
    {return item}))]
    let cart = document.getElementById('root')
    cart.innerHTML =categaries.map((item)=>{
        var {image,title,price}= item;
        return(
            `<div class="box">
            <div class="img-box">
            <img src=${image}></img>
           </div>
           
           <div class="left">
           <p>${title}</p>
           <h2>${price}</h2>
           <button> Add to cart</button>
           </div>
           </div>`
        )
    }).join("")