const Product = require('../models/product');

// POST /api/add-product
exports.apiAddProduct = (req, res, next) => {
  console.log("🛠️ /api/add-product was hit");
  const { title, imageUrl, price, description } = req.body;
  const product = new Product(null, title, imageUrl, description, price);
  product.save()
    .then(() => res.status(201).json({ message: 'Product created' }))
    .catch(err => {
      console.error("❌ Error saving product:", err.message);
      res.status(500).json({ error: err.message });
    });
};


// GET /api/products
exports.apiGetProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([products, _]) => res.status(200).json(products))
    .catch(err => res.status(500).json({ error: err.message }));
};
