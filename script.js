let chemicals = {
    A: {
        price: 100,
        demand: 24
    },

    B: {
        price: 150,
        demand: 13
    },

    C: {
        price: 80,
        demand: 41
    }
};


function buyChemical(chemical) {

    // Increase demand
    chemicals[chemical].demand += 1;

    // Increase price by 5%
    chemicals[chemical].price =
        Math.round(chemicals[chemical].price * 1.05);

    // Update price
    document.getElementById("price-" + chemical).textContent =
        "₹" + chemicals[chemical].price;

    // Update demand
    document.getElementById("demand-" + chemical).textContent =
        chemicals[chemical].demand;
}
