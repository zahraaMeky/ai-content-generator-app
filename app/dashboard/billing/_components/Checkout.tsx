"use client";
import { useEffect,useContext } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast, useToast } from "@/components/ui/use-toast"
import { UserSubscription } from "@/utils/Schema";
import { db } from "@/utils/dbConnection";
import moment from "moment";
import { UserSubscriptionContext } from "@/app/context/UserSubscriptionContext";
import { Button } from "@/components/ui/button";
interface CheckoutProps {
  plan: string;
  amount: number;
  credits: string;
  buyerEmail: string;
  userName:string
}

const Checkout: React.FC<CheckoutProps> = ({
  plan,
  amount,
  credits,
  buyerEmail,
  userName
}) => {
  const {userSubscription,setUserSubscription} = useContext(UserSubscriptionContext);

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
        console.log("paypalResonse",data.paymentID,data.payerID,data.orderID)
        if(data){
          saveSubscription(data.paymentID)
          toast({
            title: "Order placed!",
            description: `Transaction completed by ${details.payer.name.given_name}`,
            duration: 5000,
            className: "success-toast",
          });
        }
      
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

  const saveSubscription = async(paymentId:string)=>{
    const result = await db.insert(UserSubscription).values({
      email:buyerEmail,
      userName:userName,
      planID:plan,
      paymentID:paymentId,
      joinDate:moment().format("DD/MM/YYYY"),
      active:true
  })
    console.log('result from saveSubscription',result)
  }
  return (
    <div>
      {userSubscription ? (
        <Button className="w-full">Active</Button>
      ) : (
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
      )}
    </div>
  );
};

export default Checkout;
