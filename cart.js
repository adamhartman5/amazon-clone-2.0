function getCartItems() {
    db.collection("cart-items").onSnapshot((snapshot) => {
        let cartItems = [];
        snapshot.forEach(doc => {
            cartItems.push({
                id: doc.id,
                ...doc.data()
            })
        })
        generateCartItems(cartItems);
    })
}

function decreaseCount(itemId) {
    let cartItem = db.collection("cart-items").doc(itemId);
    cartItem.get().then(function(doc) {
        if (doc.exists) {
            if (doc.data().quantity > 1) {
                cartItem.update({
                    quantity: doc.data().quantity - 1
                })
            }
        }
    })
}

function increaseCount(itemId) {
    let cartItem = db.collection("cart-items").doc(itemId);
    cartItem.get().then(function(doc) {
        if(doc.exists) {
            if(doc.data().quantity > 0) {
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            }
        }
    })
}

function generateCartItems(cartItems) {
    let itemsHTML = "";
    cartItems.forEach((item) => {
        itemsHTML += `
        <div class="cart-item flex items-center pb-4 border-b border-blue-400">
        <div class="cart-item-image w-40 h-24 bg-gray-700 p-4 rounded-lg">
            <img class="w-full h-full object-contain" src="${item.image}">
        </div>
        <div class="cart-item-details flex-grow">
            <div class="cart-item-title font-bold text-sm text-blue-400">
                ${item.name}
            </div>
            <div class="cart-item-brand text-sm text-blue-400">
                ${item.brand}
            </div>
        </div>
        <div class="cart-item-counter w-48 flex items-center">
            <div data-id="${item.id}" class="cart-item-decrease cursor-pointer text-blue-400 bg-gray-700 rounded h-6 w-6 flex justify-center items-center hover:bg-gray-50 mr-2">
                <i class="fas fa-chevron-left fa-xs"></i>
            </div>
            <h4 class="text-blue-400">x${item.quantity}</h4>
            <div data-id="${item.id} "class="cart-item-increase cursor-pointer text-blue-400 bg-gray-700 rounded h-6 w-6 flex justify-center items-center hover:bg-gray-50 ml-2">
                <i class="fas fa-chevron-right fa-xs"></i>
            </div>
        </div>
        <div class="cart-item-total-cost w-48 flex font-bold text-blue-400">
            $${item.price * item.quantity}
        </div>
        <div class="cart-item-delete w-10 font-bold cursor-pointer text-gray-50 hover:text-blue-400">
            <i class="fas fa-times"></i>
        </div>
    </div>
        `
    })

    document.querySelector(".cart-items").innerHTML = itemsHTML;
    createEventListeners();
}

function createEventListeners() {
    let decreaseButtons = document.querySelectorAll(".cart-item-decrease");
    let increaseButtons = document.querySelectorAll(".cart-item-increase");

    decreaseButtons.forEach((button) => {
        button.addEventListener("click", function (){
            decreaseCount(button.dataset.id);
        })
    })

    increaseButtons.forEach(button) => {
        button.addEventListener("click", function() {
            increaseCount(button.dataset.id);
        })
    }
}

getCartItems()