const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://localhost:8000'
  : 'https://localhost:8000';

export default PAYMENT_SERVER_URL;
