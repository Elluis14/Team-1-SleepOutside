
import { renderListWithTemplate } from "./utils.mjs";

function getBrandSlug(brandName) {
    if (brandName === "The North Face") return "northface";
    return brandName.toLowerCase().replace(/\s+/g, '-');
}

function getProductSlug(nameWithoutBrand) {
    return nameWithoutBrand.split(' ')[0].toLowerCase();
}

function getPersonCount(nameWithoutBrand) {
    const match = nameWithoutBrand.match(/(\d+)-Person/);
    return match ? match[1] : '';
}

function generatePageName(product) {
    const brand = getBrandSlug(product.Brand.Name);
    const productSlug = getProductSlug(product.NameWithoutBrand);
    const count = getPersonCount(product.NameWithoutBrand);
    return `${brand}-${productSlug}-${count}`;
}

function productCardTemplate(product) {
    return `
    <li class="product-card">
      <a href="product_pages/${generatePageName(product)}.html">
        <img src="${product.Image.replace('../images/', 'images/')}" alt="${product.Name}">
        <h2>${product.Brand.Name}</h2>
        <h3>${product.Name}</h3>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
    </li>
    `;
}

export default class ProductList {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const list = await this.dataSource.getData();
        this.renderList(list);
    }

    renderList(list) {
        // const htmlStrings = list.map(productCardTemplate);
        // this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));

        // apply use new utility function instead of the commented code above
        renderListWithTemplate(productCardTemplate, this.listElement, list);

    }

}
