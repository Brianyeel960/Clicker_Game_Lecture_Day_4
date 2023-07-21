let gold =0;
// these are the upgrades
let backpack = {
    price: 160,
    quanity : 0,
    clickValueAdded: 1,
    costIncrease: 1.2
}


function calculateClickValue(){
    // calculated the click value
    let clickValue = 1 +backpack.quanity * backpack.clickValueAdded
    return clickValue
}


function getGold() {
     let calculatedClickValue = calculateClickValue()
    gold = gold + calculatedClickValue
    console.log(gold)
    draw()
}


function draw() {
    document.getElementById("gold-count").innerText = gold
    document.getElementById("click-value").innerText = calculateClickValue()
}

function getBackpack(){
    // if the player has enough gold,
    // add 1 to the backpack quantity
    // decrease the players gold
    // increase the click value
    // increase the backpacks price
    // draw to the page
    if (gold >= backpack.price){
        backpack.quanity++
        gold -= backpack.price
        backpack.price = backpack.price * backpack.costIncrease
        draw()

    }
    else {
        alret("you dont have enough gold!")
    }
}