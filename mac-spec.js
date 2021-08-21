//make memory type function
function memoryType(mtype) {
    const memoryTypeField = document.getElementById('memory-total-prize');
    if (mtype == '8gb') {
        memoryTypeField.innerText = 0;
    }
    else if (mtype == '16gb') {
        memoryTypeField.innerText = 180;
    }
    totalPrice();
}

//make storage type function
function storageType(storage) {
    const storageTypeField = document.getElementById('storage-total-prize');
    if (storage == '256gb') {
        storageTypeField.innerText = 0;
    }
    else if (storage == '512gb') {
        storageTypeField.innerText = 100;
    }
    if (storage == '1tb') {
        storageTypeField.innerText = 180;
    }
    totalPrice();
}

//make delivary charge function
function deliveryCharge(charge) {
    const deliveryChargeField = document.getElementById('delivery-charge');
    if (charge == 'free') {
        deliveryChargeField.innerText = 0;
    }
    else if (charge == 'paid') {
        deliveryChargeField.innerText = 20;
    }
    totalPrice();
}

function totalPrice() {
    const bestField = document.getElementById('best-total');
    const bestTotal = parseFloat(bestField.innerText);

    const memoryField = document.getElementById('memory-total-prize');
    const memoryTotal = parseFloat(memoryField.innerText);

    const storageField = document.getElementById('storage-total-prize');
    const storageTotal = parseFloat(storageField.innerText);

    const delivaryField = document.getElementById('delivery-charge');
    const delivaryTotal = parseFloat(delivaryField.innerText);

    const totalCost = bestTotal + memoryTotal + storageTotal + delivaryTotal;

    //update total price in html
    const totalPriceField = document.getElementById('total-price');
    totalPriceField.innerText = totalCost;

    //bottom total price in html
    const bottomTotalPriceField = document.getElementById('final-total-price');
    bottomTotalPriceField.innerText = totalCost;

    document.getElementById('promo-button').addEventListener('click', function () {
        const promoInputField = document.getElementById('promo-input');
        const promoInput = promoInputField.value;
        if (promoInput == 'stevekaku') {
            const discount = totalCost * 20 / 100;
            bottomTotalPriceField.innerText = totalCost - discount;
        }
      

        promoInputField.value = ' ';
    });
}
