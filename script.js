
let price = 300;


let quantityInput = document.getElementById("quantity");
let calculateBtn = document.getElementById("calculateBtn");
let error = document.getElementById("error");

calculateBtn.addEventListener("click", function () {

  error.textContent = "";
 

  let quantityValue = quantityInput.value;
  
  
  if (quantityValue === "" || Number(quantityValue) <= 0) {
    error.textContent = "Please enter a valid quantity!";
    return;
  }

  
  let quantity = Number(quantityValue);

  
  let total = price * quantity;


  let discount = 0;

  
  if (total >= 1000) {
    discount = total * 0.1;
  }


  let finalBill = total - discount;

  console.log("Total quantity is " + quantity)
  console.log("Total Bill: Rs. " + total);
  console.log("Discount: Rs. " + discount);
  console.log("Final Bill: Rs. " + finalBill);

   quantityInput.value ="";
});
