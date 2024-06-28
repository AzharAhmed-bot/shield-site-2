import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { clientId, amount, intent, currency } from "../../temp";
import toast, { Toaster } from 'react-hot-toast';

const Payment = () => {
    const initialOptions = {
        clientId: clientId,
        currency: currency,
        intent: intent,
    };

    const createOrder = (_data, actions) => {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: amount
                }
            }],
        });
    };

    const onApprove = (_data, actions) => {
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
                    createOrder={(data, actions) => createOrder(data, actions)}
                    onApprove={(data, actions) => onApprove(data, actions)}
                />
            </PayPalScriptProvider>
        </div>
    );
};

export default Payment;
