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
    items.forEach((item) => {
        
    })
}

getItems();