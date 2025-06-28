const db = require('../util/database');
const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.query(
      'INSERT INTO product (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById(id) {
    return db.query('DELETE FROM product WHERE id = ?', [id]);
  }

  static fetchAll() {
    return db.query('SELECT * FROM product');
  }

  static findById(id) {
    return db.query('SELECT * FROM product WHERE id = ?', [id]);
  }
};
