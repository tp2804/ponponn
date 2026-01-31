// ====== CART STORAGE ======
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function formatMoney(n) {
  return Number(n).toLocaleString("vi-VN") + "₫";
}

// ====== RENDER CART ======
function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total");

  let cart = getCart();
  cartItems.innerHTML = "";
  let subtotal = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Giỏ hàng trống</p>";
    subtotalEl.textContent = "0₫";
    totalEl.textContent = "0₫";
    return;
  }

  cart.forEach((item, index) => {
    let price = Number(item.price) || 0;
    let qty = Number(item.quantity) || 1;
    let itemTotal = price * qty;

    subtotal += itemTotal;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" width="70">
        <div class="item-info">
          <div class="item-name">${item.name}</div>
          <div class="item-price">
            ${formatMoney(price)} × ${qty}
          </div>
        </div>
        <div class="qty-box">
          <button onclick="changeQty(${index}, -1)">-</button>
          <span>${qty}</span>
          <button onclick="changeQty(${index}, 1)">+</button>
        </div>
      </div>
    `;
  });

  subtotalEl.textContent = formatMoney(subtotal);
  totalEl.textContent = formatMoney(subtotal);
}

// ====== CHANGE QTY ======
function changeQty(index, change) {
  let cart = getCart();
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart(cart);
  renderCart();
}

function goCheckout() {
  let cart = getCart();

  if (cart.length === 0) {
    alert("Giỏ hàng đang trống!");
    return;
  }

  localStorage.setItem("checkoutType", "cart"); // 🔥 ĐÁNH DẤU ĐI TỪ GIỎ
  window.location.href = "thanhtoan.html";
}

// INIT
renderCart();
