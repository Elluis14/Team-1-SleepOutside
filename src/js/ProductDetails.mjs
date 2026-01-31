function productDetailsTemplate(product) {
  document.querySelector("h2").textContent = product.Brand.Name;
  document.querySelector("h3").textContent = product.NameWithoutBrand;

  const productImage = document.getElementById("productImage");
  productImage.src = product.Image;
  productImage.alt = product.NameWithoutBrand;

  // --- LÓGICA DE DESCUENTO ---
  const priceElement = document.getElementById("productPrice");
  const discount = product.ListPrice - product.FinalPrice;

  if (discount > 0) {
    const percentOff = Math.round((discount / product.ListPrice) * 100);
    // Mostramos el precio final, el original tachado y el porcentaje
    priceElement.innerHTML = `
      <span class="discount-price">$${product.FinalPrice}</span>
      <span class="original-price"><strike>$${product.ListPrice}</strike></span>
      <span class="discount-badge">-${percentOff}%</span>
    `;
  } else {
    priceElement.textContent = `$${product.FinalPrice}`;
  }
  // ---------------------------

  document.getElementById("productColor").textContent = product.Colors[0].ColorName;
  document.getElementById("productDesc").innerHTML = product.DescriptionHtmlSimple;
  document.getElementById("addToCart").dataset.id = product.Id;
}
