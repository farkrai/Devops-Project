const Product = require('../models/product');
const Cart = require('../models/cart');

// GET /api/products
exports.apiGetProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([products]) => res.status(200).json(products))
    .catch(err => res.status(500).json({ error: err.message }));
};

// POST /api/cart
exports.apiAddToCart = (req, res, next) => {
  const { productId } = req.body;
  Product.findById(productId)
    .then(([product]) => {
      if (!product[0]) return res.status(404).json({ error: 'Product not found' });
      Cart.addProduct(productId, product[0].price);
      res.status(200).json({ message: 'Added to cart' });
    })
    .catch(err => res.status(500).json({ error: err.message }));
};

// GET /api/cart
exports.apiGetCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll()
      .then(([products]) => {
        const cartProducts = [];
        for (let product of products) {
          const cartProductData = cart.products.find(
            prod => prod.id == product.id
          );
          if (cartProductData) {
            cartProducts.push({ productData: product, qty: cartProductData.qty });
          }
        }
        res.status(200).json({
          totalPrice: cart.totalPrice,
          items: cartProducts
        });
      })
      .catch(err => res.status(500).json({ error: err.message }));
  });
};
