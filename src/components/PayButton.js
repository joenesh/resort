import React, { useContext } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import { useParams } from "react-router-dom";
import { RoomContext } from "../context";


export default function PayButton(props) {
  const { slug } = useParams(); // 👈 THIS replaces match.params
  const { getRoom } = useContext(RoomContext);

  const room = getRoom(slug);

  const { price } = room;

  return (
    <PayPalScriptProvider
      options={{
        "client-id": 'ARQfQJi9N9DP4Bq6xnsimvMZqCDPhUR2OMFFREHvxZP_jT5tLjLGVjD241nDy2Wf5Y7sSBeo3Q9dV3Me',
        currency: "USD",
      }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: price,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            console.log("Payment successful", details);
            props.clearCart();
            props.history.push("/");
          });
        }}
        onError={(err) => {
          console.log("Error:", err);
        }}
        onCancel={(data) => {
          console.log("Cancelled:", data);
        }}
      />
    </PayPalScriptProvider>
  );
}