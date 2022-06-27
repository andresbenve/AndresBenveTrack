module.exports = {
  images: {
    domains: [
      "raw.githubusercontent.com",
      "fakestoreapi.com",
      "links.papareact.com",
    ],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
  },
};

{
  /*Never a private key, because the will be expose in github */
}
