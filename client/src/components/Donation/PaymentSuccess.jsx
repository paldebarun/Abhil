
import { useSearchParams, Link, useLocation } from "react-router-dom";
const PaymentSuccess = () => {
  const { state } = useLocation()
  console.log(state);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-5 space-y-2">
      <h1 className="text-2xl sm:text-3xl font-semibold text-green-500 mb-4 sm:mb-8">Thank You for Your Donation!</h1>
      <p className="sm:text-lg font-medium">Payment Refrence Number: {state}</p>
      <p className="sm:text-lg font-medium text-gray-600 mb-4 sm:mb-8" >Your generous contribution helps us continue our work.</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Back to Home
      </Link>
    </div>
  );
};

export default PaymentSuccess;
