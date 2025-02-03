function addPaintAndSupplies(totalCost, callback) {

let cost = prompt("Enter the cost for the paint and supplies :");

cost = parseFloat(cost);

if (cost > 100)

    cost *= 1.1;
    console.log(cost)


// Get a handle for the paint paragraph

let paintArea = document.querySelector(".paint");

paintArea.innerHTML = `Paint $ ${cost.toFixed(2)}`;

callback(totalCost + cost);

return (totalCost + cost);

}


function addFloorCovering(totalCost, callback) {

    let cost = prompt("Enter the cost for the floor coverings :");

cost = parseFloat(cost);

if (cost < 500)
{
    cost *= .85;
    console.log(cost)



let floorArea = document.querySelector(".floor");

floorArea.innerHTML = `Floor $ ${cost.toFixed(2)}`;

callback(totalCost + cost);

return (totalCost + cost);
}
else if (cost > 500 + cost < 2000){
    let floorArea = document.querySelector(".floor");

floorArea.innerHTML = `Floor $ ${cost.toFixed(2)}`;

callback(totalCost + cost);

return (totalCost + cost);
}
else (cost > 2000);{
    console.log("Disqualified")
    floorArea.innerHTML = `Disqualified`;
    
    }
}


function addFurniture(totalCost, callback){

    let cost = prompt("Enter the cost for all the furniture :");

cost = parseFloat(cost);
if (cost < 500)
{cost *= .90;
    console.log(cost)
let furnitureArea = document.querySelector(".furniture");

furnitureArea.innerHTML = `Furniture $ ${cost.toFixed(2)}`;

callback(totalCost + cost);

return (totalCost + cost);}

else if (cost >500 + cost < 2000){
    let furnitureArea = document.querySelector(".furniture");

furnitureArea.innerHTML = `Furniture $ ${cost.toFixed(2)}`;

callback(totalCost + cost);

return (totalCost + cost);
}
else (cost > 2000);{
console.log("Disqualified")
furnitureArea.innerHTML = `Disqualified`;

}
}
const updateTotals = (cost) => {

// Get a handle for the furniture paragraph

let totalsArea = document.querySelector(".totalCost");

totalsArea.innerHTML = `Total $ ${cost.toFixed(2)}`;

}



let totalCost = 0;



totalCost = addPaintAndSupplies(totalCost, updateTotals);
totalCost = addFloorCovering(totalCost, updateTotals);
totalCost = addFurniture(totalCost, updateTotals);
