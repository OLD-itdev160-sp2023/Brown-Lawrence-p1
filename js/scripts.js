function() {
    var price = 800,
        studentDiscount = .30,
        sPrice = price - (price * studentDiscount),
        RegPriceEl = document.getElementById('RegPrice'),
        StudentPriceEl = document.getElementById('StudentPrice');
        RegPriceEl.textContent = "sometext1";
        StudentPriceEl.textContent = "Sometext2";

    //document.getElementById('RegPrice').textContent = "5 + 6";
    //document.getElementById('StudentPrice').textContent = "somestong";
};