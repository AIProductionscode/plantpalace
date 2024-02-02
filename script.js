// const toastTrigger = document.getElementById('feedback-toast-btn')
// const toastLiveExample = document.getElementById('feedback-toast')

// if (toastTrigger) {
//   const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
//   toastTrigger.addEventListener('click', () => {
//     toastBootstrap.show()
//   })
// }

let addcart = document.querySelector(".btn-addcart");

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}

else {
    ready();
}

//Making function
function ready() {
    //Remove item from cart
    var RemoveCartButtons = document.getElementsByClassName('cart-remove')
    console.log(RemoveCartButtons)
    for (var i = 0; i < RemoveCartButtons.length; i++) {
        var button = RemoveCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    // Quantity changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0; i<quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged); 
    }
    //Add to cart
    var addCart = document.getElementsByClassName('add-cart')
    for (var i = 0; i<addCart.length; i++){
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }
}

//Remove Items from cart
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateTotal();
}

//Quantity Changes 
function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || InputEvent.value <=0)
    {
        input.value = 1;
    }
    updateTotal();
}

//Add to cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-image')[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();
}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemNames = cartItems.getElementsByClassName('cart-product-title');
    for (var i = 0; i<cartItemNames.length; i++){
        alert('Item added to cart');
        return;
    }


var cartBoxContent = `
<img src="images/g2.jpg" class="cart-image">

<div class="detail-box">
    
    <div class="me-auto py-3 row">
        <h5 class="pry-font product-title cart-product-title grey-col col-9" style="text-align: left;">Monstera
            Deliciosa</h5>
        <h3 class="pry-font cart-price sec-col col-3 justify-content-end">$63.554</h3>
    </div>

    <div class="row d-flex py-1">
        <div class="col justify-content-start">
            <input type="number" style="width: 10vw;" value="1" class="cart-quantity">
        </div>
        <!--Remove cart-->
    </div>
</div><!--Detail box-->
<img src="images/delete.png" class="icon cart-remove" alt="delete">`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
}

//Update Total 
function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i<cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
        
        //if price contains decimal (cents) value
        total = Math.round(total *100)/100


        document.getElementsByClassName('total-price')[0].innerText = '$' + total;
    }
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("product");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}