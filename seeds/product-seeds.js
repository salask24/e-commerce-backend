const { Product } = require('../models');

const productData = [
    {
        product_name: 'Vintage Graphic Tee',
        price: 14.99,
        stock: 15,
        category_id: 1,
    },
    {
        product_name: 'Nike Air Max',
        price: 110.0,
        stock: 25,
        category_id: 4,
    },
    {
        product_name: 'San Francisco Baseball Hat',
        price: 25.99,
        stock: 12,
        category_id: 5,
    },
    {
        product_name: 'Levis Mom Jeans',
        price: 80.00,
        stock: 50,
        category_id: 3,
    },
    {
        product_name: 'Skirt',
        price: 29.99,
        stock: 22,
        category_id: 2,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;