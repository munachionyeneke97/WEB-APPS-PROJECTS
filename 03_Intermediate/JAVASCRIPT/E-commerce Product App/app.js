const lastElement = document.getElementById("foot");
let increment = 0;

lastElement.innerHTML = `
<div class="number">
  <img src="icon-minus.svg" alt="" class="decrease"/>
  <span class="zero">0</span>
  <img src="icon-plus.svg" alt="" class="increase"/>
</div>
<button id="add-cart"><img src="icon-cart.svg" alt="" class="cart-svg"/>Add to cart</button>
`;

const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const zeroNo = document.querySelector(".zero");

increaseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  increment++;
  zeroNo.textContent = increment;
});

decreaseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (increment === 0) {
    increment;
  } else {
    increment--;
    zeroNo.textContent = increment;
  }
});

const cartBtn = document.querySelector(".cart-img");
const addToCart = document.querySelector("#add-cart");
const cartModal = document.querySelector("#cart-modal");
const cartNo = document.querySelector(".cart-number");
const cartContent = document.querySelector(".cart-content");

cartBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cartModal.classList.toggle("show");
});

addToCart.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (increment > 0) {
    const totalPrice = 125.0 * increment;
    cartNo.textContent = increment;
    cartNo.style.cssText = "display: block;";
    cartContent.innerHTML = `
    <div class="first-item">
      <div>
        <img src="image-product-1-thumbnail.jpg" alt="" class="small-img" />
      </div>
      <div class="cart-text">
        <p class="text">Fall Limited Edition Sneakers</p>
        <p class="price-total">$125.00 * ${increment} <span class="bold-price">$${totalPrice}</span></p>
      </div>
      <div class="delete">
        <img src="icon-delete.svg" alt="" class="delete-btn" />
      </div>
    </div>
    <div class="second-item">
      <button class="payment-btn">Checkout</button>
    </div>
    `;
    const deleteBtn = document.querySelector(".delete");

    deleteBtn.addEventListener("click", () => {
      cartNo.style.cssText = "display: none;";
      cartContent.innerHTML = `
        <div class="cart-content">
          <p class="cart-words">Your cart is empty.</p>
        </div>
      `;
    });
  } else if (increment === 0) {
    cartNo.style.cssText = "display: none;";
    cartContent.innerHTML = `
      <div class="cart-content">
        <p class="cart-words">Your cart is empty.</p>
      </div>
    `;
  }
});

const nextIcon = document.querySelector(".next-icon");
const prevIcon = document.querySelector(".previous-icon");
const xIcon = document.querySelector(".x-icon");
const wholeModal = document.querySelector("#modal-container");
const openModal = document.querySelector(".main-img");
const modalImage = document.querySelector(".modal-img-1");
const smallImg1 = document.querySelector(".m-img-1");
const smallImg2 = document.querySelector(".m-img-2");
const smallImg3 = document.querySelector(".m-img-3");
const smallImg4 = document.querySelector(".m-img-4");
const images = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];
let currentImage = 0;

smallImg1.addEventListener("click", (e) => {
  currentImage = 0;
  modalImage.src = images[currentImage];
  smallImg1.style.cssText = "border: 3px solid hsl(26, 100%, 55%)";
  smallImg2.style.cssText = "border: none";
  smallImg3.style.cssText = "border: none";
  smallImg4.style.cssText = "border: none";
});

smallImg2.addEventListener("click", (e) => {
  currentImage = 1;
  modalImage.src = images[currentImage];
  smallImg2.style.cssText = "border: 3px solid hsl(26, 100%, 55%)";
  smallImg1.style.cssText = "border: none";
  smallImg3.style.cssText = "border: none";
  smallImg4.style.cssText = "border: none";
});

smallImg3.addEventListener("click", (e) => {
  currentImage = 2;
  modalImage.src = images[currentImage];
  smallImg3.style.cssText = "border: 3px solid hsl(26, 100%, 55%)";
  smallImg1.style.cssText = "border: none";
  smallImg2.style.cssText = "border: none";
  smallImg4.style.cssText = "border: none";
});

smallImg4.addEventListener("click", (e) => {
  currentImage = 3;
  modalImage.src = images[currentImage];
  smallImg4.style.cssText = "border: 3px solid hsl(26, 100%, 55%)";
  smallImg1.style.cssText = "border: none";
  smallImg2.style.cssText = "border: none";
  smallImg3.style.cssText = "border: none";
});

nextIcon.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentImage === 0) {
    currentImage = 1;
    modalImage.src = images[currentImage];
    smallImg2.style.cssText = "border: 3px solid hsl(26, 100%, 55%)";
    smallImg1.style.cssText = "border: none";
    smallImg3.style.cssText = "border: none";
    smallImg4.style.cssText = "border: none";
  } else if (currentImage === 1) {
    currentImage = 2;
    modalImage.src = images[currentImage];
    smallImg3.style.cssText = "border: 3px solid hsl(26, 100%, 55%)";
    smallImg1.style.cssText = "border: none";
    smallImg2.style.cssText = "border: none";
    smallImg4.style.cssText = "border: none";
  } else if (currentImage === 2) {
    currentImage = 3;
    modalImage.src = images[currentImage];
    smallImg4.style.cssText = "border: 3px solid hsl(26, 100%, 55%)";
    smallImg1.style.cssText = "border: none";
    smallImg2.style.cssText = "border: none";
    smallImg3.style.cssText = "border: none";
  }
});

prevIcon.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentImage === 3) {
    currentImage = 2;
    modalImage.src = images[currentImage];
    smallImg3.style.cssText = "border: 3px solid hsl(26, 100%, 55%)";
    smallImg1.style.cssText = "border: none";
    smallImg2.style.cssText = "border: none";
    smallImg4.style.cssText = "border: none";
  } else if (currentImage === 2) {
    currentImage = 1;
    modalImage.src = images[currentImage];
    smallImg2.style.cssText = "border: 3px solid hsl(26, 100%, 55%)";
    smallImg1.style.cssText = "border: none";
    smallImg3.style.cssText = "border: none";
    smallImg4.style.cssText = "border: none";
  } else if (currentImage === 1) {
    currentImage = 0;
    modalImage.src = images[currentImage];
    smallImg1.style.cssText = "border: 3px solid hsl(26, 100%, 55%)";
    smallImg2.style.cssText = "border: none";
    smallImg3.style.cssText = "border: none";
    smallImg4.style.cssText = "border: none";
  }
});

xIcon.addEventListener("click", (e) => {
  e.preventDefault();
  wholeModal.style.cssText = "visibility: hidden";
});

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  wholeModal.style.cssText = "visibility: visible";
});
