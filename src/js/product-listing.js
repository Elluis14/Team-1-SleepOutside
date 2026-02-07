import { loadHeaderFooter, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const category = getParam("category");
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

listing.init();

{
  // Lógica de Breadcrumb
  const breadcrumbElement = document.getElementById('breadcrumb');
  if (breadcrumbElement) {
    // Formato: Categoría -> (X items)
    breadcrumbElement.innerHTML = `${category} -> (${itemList.length} items)`;
  }
}