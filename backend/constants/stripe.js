const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_test_XW4rXP54K4s1L9aWtuzaZZi7'
    : 'sk_test_XW4rXP54K4s1L9aWtuzaZZi7';

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
