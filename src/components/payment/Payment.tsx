import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { clientId, amount, intent, currency, shippingPreference } from "../../temp";
import toast, { Toaster } from 'react-hot-toast';

const Payment = () => {
    const initialOptions = {
        clientId: clientId,
        currency: currency,
        intent: intent,
    };

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: amount
                }
            }],
            application_context: {
                shipping_preference: shippingPreference
            }
        });
    }

    const onApprove = (data, actions) => {
        return actions.order.capture().then(details => {
            toast.success("Transaction completed by " + details.payer.name.given_name);
        });
    };

    return (
        <div className="fixed bottom-5 right-5 z-50 flex items-center justify-center">
            <Toaster />
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
