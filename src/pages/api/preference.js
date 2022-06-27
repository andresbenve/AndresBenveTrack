// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: process.env.MERCADOPAGO,
});

export default function handler(req, res) {
  const { title, picture_url, quantity, price } = req.query;
  // res.end(`title: ${title}, price: ${price},quantity:${quantity}`
  let preference = {
    items: [
      {
        id: 1234,
        title,
        picture_url,
        description: "Dispositivo móvil de Tienda e-commerce",
        quantity: Number(quantity),
        unit_price: Number(price),
      },
    ],
    shipping: {
      mode: "me2",
      dimensions: "30x30x30,500",
      //default_shipping_method: 501045,
      local_pick_up: false,
      free_shipping: false,
      free_methods: [],
    },
    // payer: {
    //   phone: {
    //     area_code: "11",
    //     number: Number(22223333),
    //   },
    //   address: {
    //     zip_code: "1111",
    //     street_name: "Falsa",
    //     street_number: Number(123),
    //   },
    //   email: "test_user_81131286@testuser.com",
    //   name: "Lalo",
    //   surname: "Landa",
    // },
    // payer: {
    //   id: 123,
    //   nickname: "TEST45I5GYIH",
    //   password: "qatest6730",
    //   site_status: "active",
    //   site_id: "MLA",
    //   email: "test_user_123@testuser.com",
    //   date_created: "2022-02-01T12:00:00.000-04:00",
    //   date_last_updated: "2022-02-01T12:00:00.000-04:00",
    // }, // dudoso si apagar o no
    back_urls: {
      success: "https://benve-rho.vercel.app",
      failure: "https://benve-rho.vercel.app/checkout",
      pending: "https://benve-rho.vercel.app/checkout",
    },
    auto_return: "approved",
    payment_methods: {
      excluded_payment_methods: [
        {
          id: "amex",
        },
      ],
      excluded_payment_types: [
        {
          id: "atm",
        },
      ],
      installments: 6,
    },
    external_reference: "andres_benve@hotmail.com",
    notification_url: "https://benve-rho.vercel.app//api/webhook",
  };
  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      //console.log(response);
      // Este valor reemplazará el string "<%= global.id %>" en tu HTML global.id = response.body.id;
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      // console.log("console manda error")
      res.status(200).json({ err: error });
    });
}
