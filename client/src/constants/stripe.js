const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_6AR4PEHWz2hpWCEdGGUWc5oA'
  : 'pk_test_6AR4PEHWz2hpWCEdGGUWc5oA';

export default STRIPE_PUBLISHABLE;
