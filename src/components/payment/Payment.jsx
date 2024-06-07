import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { client_id,amount,intent,currency,shipping_preference } from "../../temp";

const Payment = () => {
    
    
    
    const initialOptions = {
        clientId: client_id,
        currency: currency,
        intent: intent
    };

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: amount
                }
            }],
            application_context: {
                shipping_preference: shipping_preference
            }
        });
    }

    const onApprove = (data, actions) => {
        return actions.order.capture().then(details => {
            alert("Transaction completed by " + details.payer.name.given_name);
        });
    };

    return (
        <div className="fixed bottom-5 left-5 z-50 flex items-center justify-center">
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                    style={{ layout: "horizontal", height: 45 }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                />
            </PayPalScriptProvider>
        </div>
    );
};

export default Payment;
