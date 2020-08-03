const minusBtn1 = document.getElementById("minusBtn1");
const plusBtn1 = document.getElementById("plusBtn1");
const minusBtn2 = document.getElementById("minusBtn2");
const plusBtn2 = document.getElementById("plusBtn2");

const successBtn = document.getElementById("success-button");
const removeOne = document.getElementById("removeProductOne");
const removeTwo = document.getElementById("removeProductTwo");

const productOnePrice = 1219;
const productTwoPrice = 59;

const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");

updateCost();

successBtn.addEventListener("click", ()=>{
        if(document.getElementById("total").innerText === "0"){
            alert("Product Count is empty!");
        }else{
            document.getElementById("cart").style.display ="none";
            document.getElementById("success-item").style.display = "block";
        }
        
        
})
removeOne.addEventListener("click", () =>{
    if(document.getElementById("productTwoArea").style.display ==="none"){
        document.getElementById("cart").style.display ="none";
        document.getElementById("no-item").style.display = "block";

    }else{
        document.getElementById("productOneArea").style.display ="none";
    }
})
removeTwo.addEventListener("click", () =>{
    
    if(document.getElementById("productOneArea").style.display ==="none"){
        document.getElementById("cart").style.display ="none";
        document.getElementById("no-item").style.display = "block";

    }else{
        document.getElementById("productTwoArea").style.display ="none";
    }
})



minusBtn1.addEventListener("click", () =>{
    minusFunction("inputOne", "productOne", productOnePrice);
});


plusBtn1.addEventListener("click", () =>{
    plusFunction("inputOne", "productOne", productOnePrice);

});
minusBtn2.addEventListener("click", () =>{
    minusFunction("inputTwo", "productTwo", productTwoPrice);
});
plusBtn2.addEventListener("click", () =>{
    plusFunction("inputTwo", "productTwo", productTwoPrice);
});


inputOne.addEventListener("change", ()=>{
    inputPriceUpdate("inputOne", "productOne", productOnePrice);
})
inputTwo.addEventListener("change", ()=>{
    inputPriceUpdate("inputTwo", "productTwo", productTwoPrice);
})

function inputPriceUpdate(productCountId, productCostId, productPrice){
    const currentInput = document.getElementById(productCountId).value;
    const currentInputValue = parseInt(currentInput);
    if(currentInputValue >= 0) {
        const finalProductCost = currentInputValue * productPrice;
        document.getElementById(productCostId).innerText =  finalProductCost;   
    }
    updateCost();
}





function minusFunction(productCountId, productCostId, productPrice ){
    const currentInput = document.getElementById(productCountId).value;
    const currentInputValue = parseInt(currentInput);
    if(currentInputValue > 0) {
        document.getElementById(productCountId).value = currentInputValue - 1;
        updateProductCost(productCostId, (-1)*productPrice);
    }

    updateCost();


}

function plusFunction(productCountId, productCostId, productPrice){
    const currentInput = document.getElementById(productCountId).value;
    const currentInputValue = parseInt(currentInput);
    document.getElementById(productCountId).value = currentInputValue + 1;
    updateProductCost(productCostId, productPrice);
    updateCost();

}

function updateProductCost(productCostId, productPrice){
const productCurrentCost = document.getElementById(productCostId).innerText;
    const productCurrentCostValue = parseFloat(productCurrentCost);
    const finalProductCost = productCurrentCostValue + productPrice;
    document.getElementById(productCostId).innerText =  finalProductCost;
   
  
}

function updateCost(){
    const productTwo = document.getElementById("productTwo").innerText;
    const productOne = document.getElementById("productOne").innerText;
    let productOneNumber = parseFloat(productOne);
    let productTwoNumber = parseFloat(productTwo);
    const subtotal = productOneNumber + productTwoNumber;
    document.getElementById("subtotal").innerText = subtotal;
    const taxCost = (subtotal*10)/100;
    document.getElementById("tax").innerText = (subtotal*10)/100;
    document.getElementById("total").innerText =  subtotal + taxCost;
}