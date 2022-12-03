const productsList = document.getElementById('productsList');
const searchBar = document.getElementById('searchBar');
let hpProducts = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toUpperCase();

    const filteredProducts = hpProducts.filter((product) => {
        return (
            product.title.toUpperCase().includes(searchString)
           
        );
    });
    displayProducts(filteredProducts);
});

const loadProducts = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        hpProducts = await res.json();
        displayProducts(hpProducts);
    } catch (err) {
        console.error(err);
    }
};

const displayProducts = (products) => {
    const htmlString = products
        .map((product) => {
            return `
           <div class="product">
            <div class='card'>
            <div class='card-body'>
               
                <img style="width:100px;height:100px;" src="${product.image}"></img>
                <p style="font-size:20px;color:black">${product.title}</p>
                <p style="color:red">ID: ${product.id}</p>
                <p style="color:green">PRICE: ${product.price}$</p>
            </div>
            </div>
            </div>
            
        `;
        })
        .join('');
    productsList.innerHTML = htmlString;
};

loadProducts();
