const db = require('../util/database');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    if (this.id) {
      // UPDATE product
      return db.query(
        'UPDATE products SET title = ?, imageUrl = ?, description = ?, price = ? WHERE id = ?',
        [this.title, this.imageUrl, this.description, this.price, this.id]
      );
    } else {
      // INSERT product
      return db.query(
        'INSERT INTO products (title, imageUrl, description, price) VALUES (?, ?, ?, ?)',
        [this.title, this.imageUrl, this.description, this.price]
      );
    }
  }

  static fetchAll() {
    return db.query('SELECT * FROM products');
  }

  static findById(id) {
    return db.query('SELECT * FROM products WHERE id = ?', [id]);
  }

  static deleteById(id) {
    return db.query('DELETE FROM products WHERE id = ?', [id]);
  }
};
