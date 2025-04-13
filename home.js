document.addEventListener("DOMContentLoaded", () => {
  const products = [
    {
      image: "laptop.jpeg",
      alt: "Laptops",
      name: "Laptops",
      description: "Powerful laptops for work and gaming.",
      price: "₹79,999",
    },
    {
      image: "headphones.jpeg",
      alt: "Headphones",
      name: "Headphones",
      description: "High-quality audio experience.",
      price: "₹3,999",
    },
    {
      image: "smartwatch.jpeg",
      alt: "Smartwatches",
      name: "Smartwatches",
      description: "Stay connected with smart technology.",
      price: "₹7,499",
    },
    {
      image: "tv.avif",
      alt: "TV",
      name: "Television",
      description: "Powerful television for watching.",
      price: "₹99,999",
    },
    {
      image: "airpod.avif",
      alt: "Airpods",
      name: "Airpods",
      description: "Lovely experience of listening to music.",
      price: "₹3,000",
    },
    {
      image: "headphones.jpeg",
      alt: "Headphones",
      name: "Headphones",
      description: "High-quality audio experience.",
      price: "₹3,999",
    },
    {
      image: "smartwatch.jpeg",
      alt: "Smartwatches",
      name: "Smartwatches",
      description: "Stay connected with smart technology.",
      price: "₹7,499",
    },
    {
      image: "laptop.jpeg",
      alt: "Laptops",
      name: "Laptops",
      description: "Powerful laptops for work and gaming.",
      price: "₹79,999",
    },
  ];

  const productGrid = document.getElementById("productGrid");

  // Populate the product grid with products
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.alt}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p class="price">${product.price}</p>
      <a href="order.html" class="btn order-now">Order now</a>
      <a href="cart.html" class="btn add-to-cart">Add to cart</a>
    `;
    productGrid.appendChild(productCard);
  });

  // Add to Cart functionality
  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const productElement = btn.parentElement;
      const product = {
        name: productElement.querySelector("h3").textContent,
        description: productElement.querySelector("p").textContent,
        price: productElement.querySelector(".price").textContent,
        image: productElement.querySelector("img").getAttribute("src"),
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));

      alert(`${product.name} added to cart!`);
    });
  });

  // Order Now functionality — direct order
  document.querySelectorAll(".order-now").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // prevent default anchor click behavior
      const productElement = btn.parentElement;
      const product = {
        name: productElement.querySelector("h3").textContent,
        description: productElement.querySelector("p").textContent,
        price: productElement.querySelector(".price").textContent,
        image: productElement.querySelector("img").getAttribute("src"),
      };

      // Save this product as single order product
      localStorage.setItem("orderProduct", JSON.stringify(product));

      // Redirect to order page
      window.location.href = "order.html";
    });
  });
});
