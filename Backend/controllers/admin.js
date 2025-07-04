const Product = require('../models/product');

// GET: Add Product
exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

// POST: Add Product
exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, price, description } = req.body;
  const product = new Product(null, title, imageUrl, description, price);
  product
    .save()
    .then(() => res.redirect('/admin/products'))
    .catch(err => console.log(err));
};

// GET: Edit Product Page
exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) return res.redirect('/');

  const prodId = req.params.productId;
  Product.findById(prodId)
    .then(([rows]) => {
      const product = rows[0];
      if (!product) return res.redirect('/');
      res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: true,
        product: product
      });
    })
    .catch(err => console.log(err));
};

// POST: Edit Product
exports.postEditProduct = (req, res, next) => {
  const { productId, title, imageUrl, price, description } = req.body;
  const updatedProduct = new Product(productId, title, imageUrl, description, price);
  updatedProduct
    .save()
    .then(() => res.redirect('/admin/products'))
    .catch(err => console.log(err));
};

// GET: Product List
exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then(([products]) => {
      res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    })
    .catch(err => console.log(err));
};

// POST: Delete Product
exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId)
    .then(() => res.redirect('/admin/products'))
    .catch(err => console.log(err));
};
