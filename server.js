const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const session = require('express-session');
const bcrypt = require('bcrypt'); 

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'public', 'views')); 
app.set('view engine', 'ejs');


// Session middleware
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'Aneri@.2911', // Replace with your MySQL password
    database: 'ecommerce_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

// Cart: Initialize cart using session
app.use((req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = [];
    }
    next();
});

// Routes
app.get('/', (req, res) => {
    res.render('index');
});


app.get('/index', (req, res) => {
    res.render('index');
});




app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/products', (req, res) => {
    const query = 'SELECT * FROM Products';
    const cart = req.session.cart || [];
    const total = cart.reduce((acc, item) => acc + (item.Cost * item.quantity), 0);

    db.query(query, (err, results) => {
        if (err) throw err;
        res.render('products', { products: results, cartTotal: total });
    });
});

// Add product to cart
app.post('/add-to-cart', (req, res) => {
    const { productID } = req.body;
    const query = 'SELECT * FROM Products WHERE ID = ?';
    db.query(query, [productID], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            const product = results[0];
            const existingProduct = req.session.cart.find(item => item.ID === productID);

            if (existingProduct) {
                existingProduct.quantity += 1; // Increase quantity
            } else {
                req.session.cart.push({ ...product, quantity: 1 });
            }
        }
        res.redirect('/products');
    });
});

// Update quantity of product in the cart
app.post('/update-quantity', (req, res) => {
    const { productID, action } = req.body;

    // Find the product in the cart
    const product = req.session.cart.find(item => item.ID === productID);
    
    if (product) {
        if (action === 'increase') {
            product.quantity += 1;  // Increase the quantity
        } else if (action === 'decrease') {
            product.quantity -= 1;  // Decrease the quantity
            if (product.quantity <= 0) {
                req.session.cart = req.session.cart.filter(item => item.ID !== productID); // Remove from cart if quantity is 0
            }
        }
    }

    res.redirect('/cart');  // Redirect back to the cart page
});

// Remove product from cart
app.post('/remove-from-cart', (req, res) => {
    const { productID } = req.body;
    req.session.cart = req.session.cart.filter(item => item.ID !== productID);
    res.redirect('/cart');
});

// View cart
app.get('/cart', (req, res) => {
    const cart = req.session.cart;
    const total = cart.reduce((acc, item) => acc + (item.Cost * item.quantity), 0);
    const tax = total * 0.07;  // 7% tax
    const shipping = total * 0.01;  // 1% shipping fee
    const grandTotal = total + tax + shipping;
    res.render('cart', { cart, total, tax, shipping, grandTotal });
});

// Add product page
app.get('/add-product', (req, res) => {
    res.render('addProduct');
});

// Add product to DB
app.post('/add-product', (req, res) => {
    const { ID, Name, Description, Cost } = req.body;
    const query = 'INSERT INTO Products (ID, Name, Description, Cost) VALUES (?, ?, ?, ?)';
    db.query(query, [ID, Name, Description, Cost], (err) => {
        if (err) throw err;
        res.redirect('/products');
    });
});

// Checkout route
app.get('/checkout', (req, res) => {
    const cart = req.session.cart;
    const total = cart.reduce((acc, item) => acc + (item.Cost * item.quantity), 0);
    const tax = total * 0.07; // 7% tax
    const shipping = total * 0.01; // 1% shipping fee
    const grandTotal = total + tax + shipping; // Final grand total

    res.render('checkout', { cart, total, tax, shipping, grandTotal });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Access your project at: http://localhost:${port}`);
});
