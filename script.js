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

    chemicals[chemical].demand += 1;

    chemicals[chemical].price =
        Math.round(chemicals[chemical].price * 1.05);

    document.getElementById("price-" + chemical).textContent =
        "₹" + chemicals[chemical].price;

    document.getElementById("demand-" + chemical).textContent =
        chemicals[chemical].demand;

    console.log("Chemical " + chemical + " purchased!");
}
