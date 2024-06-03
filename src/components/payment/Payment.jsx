import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const Payment= ()=>{
//  It accepts an object for passing query parameters and data attributes to the JS SDK script. Use camelCase for the object keys
const initialOptions={
    clientId:"test",
    currency:"USD",
    intent:"capture"
}
    return(
        <div className="fixed bottom-5 right-5 z-10 flex items-center justify-center">
            <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons style={{layout:"horizontal",height:50}}/>
            </PayPalScriptProvider>
        </div>
    )
}

export default Payment;