import React from "react";
import { useSearchParams, Link } from "react-router-dom";
const PaymentSuccess = () => {
  const searchQuery = useSearchParams()[0];
  const refrenceNum = searchQuery.get("reference");
  return (
    <div className="flex flex-col items-center p-5 space-y-2">
      <h1 className="text-green-500">Thank You for Your Donation!</h1>
      <p>Payment Refrence Number: {refrenceNum}</p>
      <p>Your generous contribution helps us continue our work.</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Back to Home
      </Link>
    </div>
  );
};

export default PaymentSuccess;
