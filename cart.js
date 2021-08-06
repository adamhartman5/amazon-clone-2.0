function getCartItems() {
    db.collection("cart-items").onSnapshot((snapshot) => {
        let cartItems = [];
        snapshot.forEach(doc => {
            cartItems.push({
                id: doc.data().id,
                image: doc.data().image,
                name: doc.data().name,
                brand: doc.data().brand,
                rating: doc.data().rating,
                price: doc.data().price,
            })
        })
    })
}