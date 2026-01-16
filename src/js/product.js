import { getParam } from './utils.mjs';
import ProductData from './ProductData.mjs';
import ProductDetails from './ProductDetails.mjs';

const dataSource = new ProductData('tents');
let productID = getParam('product');

// If no query parameter, try to get the product ID from the addToCart button's data-id
if (!productID) {
  const addToCartBtn = document.getElementById('addToCart');
  if (addToCartBtn) {
    productID = addToCartBtn.dataset.id;
  }
}

const product = new ProductDetails(productID, dataSource);
product.init();

// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
