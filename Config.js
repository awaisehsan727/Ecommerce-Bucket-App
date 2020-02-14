import WooCommerceAPI from 'react-native-woocommerce-api';
export default WooCommerce = new WooCommerceAPI({
  url: 'https://bktstaging.devzonesolutions.com', // Your store URL
  ssl: true,
  consumerKey: 'ck_04f60a0f9ff393bf09ee503c70770194ac8d2d13', // Your consumer secret
  consumerSecret: 'cs_73ec96bff3b762d1bcfb74cac0e9c4258e30242c', // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v2', // WooCommerce WP REST API version
  queryStringAuth: true
});