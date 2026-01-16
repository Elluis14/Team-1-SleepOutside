import { getLocalStorage, setLocalStorage } from './utils.mjs';

export default class ProductDetails {

  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }

 async init() {
  this.product = await this.dataSource.findProductById(this.productId);
  
    
  this.renderProductDetails();
  document
    .getElementById('addToCart')
    .addEventListener('click', this.addProductToCart.bind(this));
}

  addProductToCart() {
    const cartItems = getLocalStorage('so-cart') || [];
    cartItems.push(this.product);
    setLocalStorage('so-cart', cartItems);
  }

  renderProductDetails() {
    if (this.product) {
      productDetailsTemplate(this.product);
    } else {
      console.error('Product not found');
    }
  }
}

function productDetailsTemplate(product) {
  document.querySelector('h3').textContent = product.Brand.Name;
  document.querySelector('h2').textContent = product.NameWithoutBrand;

  const productImage = document.querySelector('img.divider');
  productImage.src = product.Image;
  productImage.alt = product.NameWithoutBrand;

  document.querySelector('.product-card__price').textContent = product.FinalPrice;
  document.querySelector('.product__color').textContent = product.Colors[0].ColorName;
  document.querySelector('.product__description').innerHTML = product.DescriptionHtmlSimple;

  document.getElementById('addToCart').dataset.id = product.Id;
}

// ************* Alternative Display Product Details Method *******************
// function productDetailsTemplate(product) {
//   return `<section class="product-detail"> <h3>${product.Brand.Name}</h3>
//     <h2 class="divider">${product.NameWithoutBrand}</h2>
//     <img
//       class="divider"
//       src="${product.Image}"
//       alt="${product.NameWithoutBrand}"
//     />
//     <p class="product-card__price">$${product.FinalPrice}</p>
//     <p class="product__color">${product.Colors[0].ColorName}</p>
//     <p class="product__description">
//     ${product.DescriptionHtmlSimple}
//     </p>
//     <div class="product-detail__add">
//       <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
//     </div></section>`;
// }

