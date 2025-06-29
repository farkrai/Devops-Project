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
      // UPDATE
      return db.query(
        'UPDATE product SET title = ?, imageUrl = ?, description = ?, price = ? WHERE id = ?',
        [this.title, this.imageUrl, this.description, this.price, this.id]
      );
    } else {
      // INSERT
      return db.query(
        'INSERT INTO product (title, imageUrl, description, price) VALUES (?, ?, ?, ?)',
        [this.title, this.imageUrl, this.description, this.price]
      );
    }
  }

  static fetchAll() {
    return db.query('SELECT * FROM product');
  }

  static findById(id) {
    return db.query('SELECT * FROM product WHERE id = ?', [id]);
  }

  static deleteById(id) {
    return db.query('DELETE FROM product WHERE id = ?', [id]);
  }
};
