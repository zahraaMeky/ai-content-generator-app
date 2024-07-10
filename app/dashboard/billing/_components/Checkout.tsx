"use client";
import { useEffect } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast, useToast } from "@/components/ui/use-toast"

interface CheckoutProps {
  plan: string;
  amount: number;
  credits: string;
  buyerEmail: string;
}

const Checkout: React.FC<CheckoutProps> = ({
  plan,
  amount,
  credits,
  buyerEmail,
}) => {


  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount.toString(),
            currency_code: "USD",
          },
        },
      ],
    });
  };

  const onApprove = (data: any, actions: any) => {
    return actions.order.capture().then((details: any) => {
        console.log("paypalResonse",data)
        toast({
        title: "Order placed!",
        description: `Transaction completed by ${details.payer.name.given_name}`,
        duration: 5000,
        className: "success-toast",
      });
    });
  };

  const onError = (err: any) => {
    toast({
      title: "Order failed!",
      description: "An error occurred during the transaction.",
      duration: 5000,
      className: "error-toast",
    });
    console.error("PayPal Checkout onError", err);
  };

  const onCheckout = async (event: React.FormEvent) => {
    event.preventDefault();
    
    const transaction = {
      plan,
      amount,
      credits,
      buyerEmail,
    };

    console.log("Transaction details:", transaction);
  };

  return (
        <PayPalButtons
          style={{
            color: 'gold',
            shape: 'rect',
            label: 'pay',
            height: 50,
          }}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onError}
        />
  );
};

export default Checkout;
