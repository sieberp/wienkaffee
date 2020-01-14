"use strict";

require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type"
};

exports.handler = async (event, context) => {
  if (!event.body || event.httpMethod !== "POST") {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "invalid http method"
      })
    };
  }

  const data = JSON.parse(event.body);

  if (!data.stripeToken || !data.stripeAmt || !data.stripeIdempotency) {
    console.error("Required information missing.");
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "missing information"
      })
    };
  } //stripe payment processing


  try {
    await stripe.customers.create({
      email: data.stripeEmail,
      source: data.stripeToken
    }).then(customer => {
      console.log(`starting the charges, amt: ${data.stripeAmt}, email: ${stripe.Email}`);
      return stripe.charges.create({
        currency: "eur",
        amount: data.stripeAmt,
        receipt_email: data.stripeEmail,
        customer: customer.id,
        description: "Sample Charge"
      }, {
        idempotency_key: data.stripeIdempotency
      }).then(result => {
        console.log(`Charge created: ${result}`);
      });
    });
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        status: "it works!!"
      })
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: err
      })
    };
  }
};