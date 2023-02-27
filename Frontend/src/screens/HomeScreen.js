const HomeScreen = {
  render: async () => {
    let products = [];
    try {
      const response = await fetch("http://localhost:5000/api/products");
      if (!response || !response.ok) {
        return `<div> Error in getting data</div>`;
      }
      products = await response.json();
    } catch (error) {
      alert(`error ${error.message}`);
    }
    console.log(products);
    return `<ul class ="products">
    ${products
      .map(
        (product) => ` <li>
    <div class="product">
      <a href="/#/product/${product._id}">
        <img src="${product.image}" alt="${product.name}" />
      </a>
      <div class="product-name">
        <a href="/#/product/${product._id}">${product.name}</a>
      </div>
      <div class="product-brand">${product.brand}</div>
      <div class="product-price">${product.price}Rs</div>
    </div>
  </li>
    `
      )
      .join("\n")}
    </ul>
    `;
  },
};

export default HomeScreen;
