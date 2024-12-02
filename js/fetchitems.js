fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
      const productHTML = `
        <li>
          <figure>
            <a class="aa-product-img" href="#"><img src="${product.image}" alt="${product.name}"></a>
            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
            <figcaption>
              <h4 class="aa-product-title"><a href="#">${product.name}</a></h4>
              <span class="aa-product-price">$${product.price}</span>${product.discounted_price ? `<span class="aa-product-price"><del>$${product.discounted_price}</del></span>` : ''}
            </figcaption>
          </figure>
          ${product.badge ? `<span class="aa-badge aa-${product.badge.toLowerCase()}" href="#">${product.badge}!</span>` : ''}
        </li>
      `;
      productContainer.innerHTML += productHTML;
    });
  })
  .catch(error => console.error('Error loading products:', error))