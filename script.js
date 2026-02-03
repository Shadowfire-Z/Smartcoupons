document.getElementById("gps-btn").addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
    document.getElementById("gps-status").textContent = "Fetching location...";
  } else {
    alert("Geolocation not supported by your browser.");
  }
});

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  document.getElementById("gps-status").textContent = `Location detected: ${lat.toFixed(2)}, ${lon.toFixed(2)}`;
  
  // Simulated coupon data (replace with API calls later)
  const coupons = [
    { brand: "Domino's", code: "DOM50", discount: "Flat 50% off" },
    { brand: "Zomato", code: "ZOM100", discount: "₹100 off orders above ₹499" },
    { brand: "Swiggy", code: "SWIGGY30", discount: "30% off first 3 orders" },
    { brand: "Amazon", code: "AMZ20", discount: "20% off electronics" },
    { brand: "Flipkart", code: "FLIP15", discount: "15% off fashion" }
  ];

  displayCoupons(coupons);
}

function error() {
  document.getElementById("gps-status").textContent = "GPS access denied. Showing general coupons.";
  const coupons = [
    { brand: "Domino's", code: "DOM20", discount: "20% off pizzas" },
    { brand: "Amazon", code: "AMZ10", discount: "10% off sitewide" }
  ];
  displayCoupons(coupons);
}

function displayCoupons(coupons) {
  const section = document.getElementById("coupon-section");
  section.classList.remove("hidden");

  const list = document.getElementById("coupon-list");
  list.innerHTML = "";

  coupons.forEach(c => {
    const card = document.createElement("div");
    card.className = "coupon-card";
    card.innerHTML = `
      <h3>${c.brand}</h3>
      <p><strong>Code:</strong> ${c.code}</p>
      <p>${c.discount}</p>
    `;
    list.appendChild(card);
  });
}