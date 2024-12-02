fetch('js/products.json')
  .then(response => response.json())
  .then(products => {
    // Määritellään kategorian sisältöalueet (vain miehet ja naiset)
    const categories = {
      men: document.getElementById('men'),     // Miehet
      women: document.getElementById('women'),  // Naiset
      shirts: document.getElementById('shirts'),
      pants: document.getElementById('pants')
    };

    // Käydään läpi kaikki tuotteet ja lisätään ne oikeaan kategoriaan
    products.forEach(product => {
      const productHTML = `
        <li>
          <figure>
            <a class="aa-product-img" href="#"><img src="${product.image}" alt="${product.name}"></a>
            <a class="aa-add-card-btn" href="#"><span class="fa fa-shopping-cart"></span>Add To Cart</a>
            <figcaption>
              <h4 class="aa-product-title"><a href="#">${product.name}</a></h4>
              <span class="aa-product-price">$${product.price}</span>
              ${product.discounted_price ? `<span class="aa-product-price"><del>$${product.discounted_price}</del></span>` : ''}
            </figcaption>
          </figure>
          <div class="aa-product-hvr-content">
            <a href="#" data-toggle="tooltip" data-placement="top" title="Add to Wishlist"><span class="fa fa-heart-o"></span></a>
            <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><span class="fa fa-exchange"></span></a>
            <a href="#" data-toggle="tooltip" data-placement="top" title="Quick View" data-toggle="modal" data-target="#quick-view-modal"><span class="fa fa-search"></span></a>                            
          </div>
          ${product.badge ? `<span class="aa-badge aa-${product.badge.toLowerCase()}">${product.badge}</span>` : ''}
        </li>
      `;

      // Lisää tuote oikeaan kategoriaan
      if (product.category.toLowerCase() === 'men') {
        categories.men.innerHTML += productHTML;
      } else if (product.category.toLowerCase() === 'women') {
        categories.women.innerHTML += productHTML;
      } else if (product.category.toLowerCase() === 'shirts') {
        categories.shirts.innerHTML += productHTML;
      } else if (product.category.toLowerCase() === 'pants') {
        categories.pants.innerHTML += productHTML;
      }
    });
  })
  .catch(error => console.error('Error loading products:', error));