import { parseResquestUrl } from "../utils.js";
import { getProduct } from "../api.js";
import Rating from "../components/Rating.js";
const ProductScreen = {
  // add to cart button
  afterRender: () => {
    const request = parseResquestUrl();
    document.getElementById("add-button").addEventListener("click", () => {
      document.location.hash = `/cart/${request.id}`;
    });
  },
  render: async () => {
    const request = parseResquestUrl();
    const product = await getProduct(request.id);
    if (product.error) {
      return `<div>${product.error}</div>`;
    }
    // all product details render to dom
    return `
    <div class="content">
   <div class="back-to-result">
   <a href="/#/">Back to result</a>
   </div>

   <div class="details">
   <div class="details-image">
   <img src="${product.image}" alt="${product.name}" />

   </div>

   <div class="details-info">
   <ul>

   <li>
   <h1>${product.name}</h1>
   </li>

   <li>${Rating.render({
     value: product.rating,
     text: `${product.numReviews}`,
   })}</li>
   
   <li>
   price: <strong>${product.price}</strong>
   </li>

   <li>
   Description:  <div>
   ${product.description}
   </div>
   </li>

   </ul>
   </div>
   <div class="details-action">
   <ul>
   <li>price ${product.price}</li>
   <li>${
     product.countInStock > 0
       ? `<span class="success">In stock</span>`
       : `<span class="error">Out of Stock</span>`
   } </li>
   <li>
   <button class="fw primary" id="add-button">Add to Cart</button>
   
   </li>
   </ul>


   </div>

   </div>
   
    
    </div>
    `;
  },
};

export default ProductScreen;
