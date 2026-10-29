// Toggle Mobile Menu
function toggleMenu() {
  const navMobile = document.getElementById("navMobile")
  navMobile.classList.toggle("active")
}

// Handle Form Submit
function handleSubmit(event) {
  event.preventDefault()
  const formData = new FormData(event.target)
  const data = Object.fromEntries(formData.entries())
  console.log("Formulario enviado:", data)
  alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.")
  event.target.reset()
}

// Filter Products by Category
function filterCategory(category) {
  const buttons = document.querySelectorAll(".category-btn")
  const products = document.querySelectorAll(".product-card")

  // Update active button
  buttons.forEach((btn) => {
    btn.classList.remove("active")
    if (btn.textContent.toLowerCase().includes(category) || (category === "all" && btn.textContent === "TODOS")) {
      btn.classList.add("active")
    }
  })

  // Filter products
  products.forEach((product) => {
    const productCategory = product.getAttribute("data-category")
    if (category === "all" || productCategory === category) {
      product.style.display = "flex"
    } else {
      product.style.display = "none"
    }
  })
}
