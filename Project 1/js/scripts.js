    var price = 800,
        studentDiscount = .30,
        sPrice = price - (price * studentDiscount),
        RegPriceEl = document.getElementById('RegPrice'),
        StudentPriceEl = document.getElementById('StudentPrice');
        RegPriceEl.textContent = price.toFixed(2);
        StudentPriceEl.textContent = sPrice.toFixed(2);

    //document.getElementById('RegPrice').textContent = "5 + 6";
    //document.getElementById('StudentPrice').textContent = "somestong";
