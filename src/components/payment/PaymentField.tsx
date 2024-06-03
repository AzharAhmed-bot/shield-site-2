import React, { useState, ChangeEvent, FormEvent } from 'react';
import project1 from "../../assets/pngs/project1.jpg";
import paystack from "../../assets/pngs/paystack.png";
import { PaystackConsumer } from 'react-paystack';

interface FormState {
  firstname: string;
  lastName: string;
  email: string;
  amount: number;
}

const PaymentFields: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    firstname: "",
    lastName: "",
    email: "",
    amount: 0
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handlePay = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitting:', form);
  }

  const onSuccess = () => {
    console.log('Payment Success for user: ');
  }

  const onClose = () => {
    console.log('Payment Closed');
  }

  const payStackProps = {
    reference: new Date().getTime().toString(),
    email: form.email,
    amount: form.amount,
    publicKey: 'pk_test_8a8e88068f3dfcb45bd681338ebae14496885f39',
    text: "Donate",
    onSuccess: onSuccess,
    onClose: onClose,
    
  };

  const isFormEmpty = Object.values(form).some(value => value === "");

  return (
    <>
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${project1})`, backgroundSize: 'cover' }}>
        <div className="flex justify-center lg:flex-row mt-20 w-auto lg:w-full max-w-4xl mx-auto">
          <div className="sm:block hidden md:w-1/2 lg:w-1/2">
            <img className="lg:w-full lg:h-full h-full rounded-l-lg " src={paystack} alt="project1" />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 p-6 bg-gray-100 shadow-lg rounded-r-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Enter Payment Details</h2>
            <form onSubmit={handlePay}>
              <div className="mb-4">
                <label htmlFor="firstname" className="block text-gray-700 font-medium mb-2">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  className="w-full h-10 px-4 py-2 bg-white rounded-3xl border-b border-black gap-2.5"
                  value={form.firstname}
                  onChange={onChange}
                  required
                />
                <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full h-10 px-4 py-2 bg-white rounded-3xl border-b border-black gap-2.5"
                  value={form.lastName}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full h-10 px-4 py-2 bg-white rounded-3xl border-b border-black gap-2.5"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">Amount (KES)</label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  className="w-full h-10 px-4 py-2 bg-white rounded-3xl border-b border-black gap-2.5"
                  value={form.amount}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="flex justify-center flex-col items-center">
                <PaystackConsumer {...payStackProps}>
                  {({initializePayment}) => (
                    <button 
                      className='mt-4 w-52 bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300'
                      onClick={() => initializePayment(onSuccess, onClose)}
                      disabled={isFormEmpty} 
                    >
                      Donate
                    </button>
                  )}
                </PaystackConsumer>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentFields;
