import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Payment = () => {
    // It accepts an object for passing query parameters and data attributes to the JS SDK script. Use camelCase for the object keys
    const initialOptions = {
        clientId: "AcgG9iQl8K50o8O1CNMMDAkuzDHtsxZTEju1g_EkY8b8lgb56YUU98RodO7a2xqxNru6qhdPu5zZCWBw",
        currency: "USD",
        intent: "capture"
    };

    // Create Order function to set up the transaction details
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: "10.00" 
                }
            }],
            application_context: {
                shipping_preference: "NO_SHIPPING"
            }
        });
    }

    // Handle the approval of the transaction
    const onApprove = (data, actions) => {
        return actions.order.capture().then(details => {
            alert("Transaction completed by " + details.payer.name.given_name);
        });
    };

    return (
        <div className="fixed bottom-5 right-5 z-50 flex items-center justify-center">
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                    style={{ layout: "horizontal", height: 50 }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                />
            </PayPalScriptProvider>
        </div>
    );
};

export default Payment;
