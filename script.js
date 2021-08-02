function getItems(){
    db.collection("items").get().then((querySnapshot) => {
        let items = [];
        querySnapshot.forEach((doc) => {
            items.push({
                id: doc.id,
                image: doc.data().image,
                name: doc.data().name,
                brand: doc.data().brand,
                rating: doc.data().rating,
                price: doc.data().price,
            })
        });
        generateItems(items);
    });
}

function generateItems(items) {
    let itemsHTML = "";
    items.forEach((item) => {
        itemsHTML += `
            <div class="main-product mr-5">
                <div class="product-image w-48 h-52 bg-white rounded-lg">
                    <img class="w-full h-full object-contain p-4" src="${item.image}">
                </div>
                <div class="product-name text-blue-400 font-bold mt-2 text-sm">
                    ${item.name}
                </div>
                <div class="product-make text-gray-50 font-bold">
                    ${item.brand}
                </div>
                <div class="product-rating text-yellow-500 my-1">
                    ⭐⭐⭐⭐⭐ ${item.rating}
                </div>
                <div class="product-price font-bold text-blue-400 text-lg">
                    $${item.price}
                </div>
                <div class="add-to-cart h-8 w-28 bg-yellow-500 flex items-center justify-center text-gray-700 rounded text-md cursor-pointer hover:bg-yellow-600">
                    Add to cart
                </div>
            </div>`
    })

    document.querySelector(".main-section-products").innerHTML = itemsHTML;
}

getItems();