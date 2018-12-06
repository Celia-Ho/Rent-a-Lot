const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_6AR4PEHWz2hpWCEdGGUWc5oA';

export default STRIPE_PUBLISHABLE;
