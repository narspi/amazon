const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const transformedItems = items.map((item) => ({
    quantity: item.count,
    price_data: {
      currency: "gbp",
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        description: item.description,
        images: [item.image],
      },
    },
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_options: [
        {
          shipping_rate: "shr_1N45sxBFClRVem5CmjvAVl2o",
        },
      ],
      shipping_address_collection: {
        allowed_countries: ["GB", "US", "CA"],
      },
      line_items: transformedItems,
      mode: "payment",
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/checkout`,
      metadata: {
        email,
        images: JSON.stringify(items.map((item) => item.image)),
      },
    });
    res.status(200).json({ id: session.id });
  } catch (err) {
    res.status(err.statusCode || 500).json(err.message);
  }
};
