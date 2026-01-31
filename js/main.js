function addToCart(button) {

  let qtyInput = document.getElementById("qty");
  let qty = qtyInput ? parseInt(qtyInput.value) : 1;

  let product = {
    id: button.dataset.id,
    name: button.dataset.name,
    price: Number(button.dataset.price),
    image: button.dataset.image,
    quantity: qty
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ hàng!");
}


// ✅ HÀM THÊM GIỎ DÙNG CHUNG CHO MỌI TRANG
function addToCart(button) {

  // Nếu có ô nhập số lượng thì lấy, không có mặc định = 1
  let qtyInput = document.getElementById("qty");
  let qty = qtyInput ? parseInt(qtyInput.value) : 1;

  let product = {
    id: button.dataset.id,
    name: button.dataset.name,
    price: Number(button.dataset.price),
    image: button.dataset.image,
    quantity: qty
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity += qty; // nếu đã có thì cộng thêm
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ hàng!");
}


// ✅ GỘP TẤT CẢ DOMContentLoaded VÀO 1 CHỖ
document.addEventListener("DOMContentLoaded", function () {

  // NÚT SẢN PHẨM
  const btn = document.getElementById("btnSanPham");
  if(btn){
    btn.onclick = () => {
      window.location.href = "sanpham.html";
    };
  }

  // MENU MEGA
  const menuBtn = document.getElementById("menuBtn");
  const megaMenu = document.getElementById("megaMenu");
  const closeMenu = document.getElementById("closeMenu");
  const menuContent = document.getElementById("menuContent");

  if(menuBtn){
    fetch("menu.html")
      .then(res => res.text())
      .then(data => {
        menuContent.innerHTML = data;
      });

    menuBtn.onclick = function(e){
      e.preventDefault();
      megaMenu.style.display = "block";
    }

    closeMenu.onclick = function(){
      megaMenu.style.display = "none";
    }
  }

  // TRANG LIÊN HỆ
  const contact = document.getElementById("contactBtn");
  if(contact){
    contact.onclick = function(){
      window.location.href = "lienhe.html";
    }
  }
});